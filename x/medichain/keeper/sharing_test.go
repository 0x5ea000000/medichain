package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/sota/medichain/x/medichain/types"
)

func createNSharing(keeper *Keeper, ctx sdk.Context, n int) []types.Sharing {
	items := make([]types.Sharing, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetSharing(ctx, items[i])
	}
	return items
}

func TestSharingGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSharing(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSharing(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestSharingRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSharing(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSharing(ctx, item.Index)
		_, found := keeper.GetSharing(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestSharingGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSharing(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllSharing(ctx))
}
