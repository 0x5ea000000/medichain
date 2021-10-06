package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) UpdateSharingStatusBatch(goCtx context.Context, msg *types.MsgUpdateSharingStatusBatch) (*types.MsgUpdateSharingStatusBatchResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	for _, v := range msg.Indexs {
		sharing, found := k.GetSharing(ctx, v)
		if !found {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index not found")
		}
		sharing.Status = msg.Status

		k.SetSharing(ctx, sharing)
	}

	return &types.MsgUpdateSharingStatusBatchResponse{}, nil
}
