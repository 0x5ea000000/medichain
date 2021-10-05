package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
	"github.com/stretchr/testify/assert"
)

func createNAdmin(keeper *Keeper, ctx sdk.Context, n int) []types.Admin {
	items := make([]types.Admin, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendAdmin(ctx, items[i])
	}
	return items
}

func TestAdminGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAdmin(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetAdmin(ctx, item.Id))
	}
}

func TestAdminExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAdmin(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasAdmin(ctx, item.Id))
	}
}

func TestAdminRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAdmin(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAdmin(ctx, item.Id)
		assert.False(t, keeper.HasAdmin(ctx, item.Id))
	}
}

func TestAdminGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAdmin(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllAdmin(ctx))
}

func TestAdminCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAdmin(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetAdminCount(ctx))
}
