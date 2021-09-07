package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/sota/medichain/x/medichain/types"
)

func TestSharingMsgServerCreate(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	srv := NewMsgServerImpl(*keeper)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		idx := fmt.Sprintf("%d", i)
		expected := &types.MsgCreateSharing{Creator: creator, Index: idx}
		_, err := srv.CreateSharing(wctx, expected)
		require.NoError(t, err)
		rst, found := keeper.GetSharing(ctx, expected.Index)
		require.True(t, found)
		assert.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestSharingMsgServerUpdate(t *testing.T) {
	creator := "A"
	index := "any"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSharing
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSharing{Creator: creator, Index: index},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSharing{Creator: "B", Index: index},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgUpdateSharing{Creator: creator, Index: "missing"},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			keeper, ctx := setupKeeper(t)
			srv := NewMsgServerImpl(*keeper)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateSharing{Creator: creator, Index: index}
			_, err := srv.CreateSharing(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateSharing(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := keeper.GetSharing(ctx, expected.Index)
				require.True(t, found)
				assert.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestSharingMsgServerDelete(t *testing.T) {
	creator := "A"
	index := "any"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSharing
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteSharing{Creator: creator, Index: index},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteSharing{Creator: "B", Index: index},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteSharing{Creator: creator, Index: "missing"},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			keeper, ctx := setupKeeper(t)
			srv := NewMsgServerImpl(*keeper)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateSharing(wctx, &types.MsgCreateSharing{Creator: creator, Index: index})
			require.NoError(t, err)
			_, err = srv.DeleteSharing(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := keeper.GetSharing(ctx, tc.request.Index)
				require.False(t, found)
			}
		})
	}
}
