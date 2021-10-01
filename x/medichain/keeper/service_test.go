package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/sota/medichain/x/medichain/types"
)

func createNService(keeper *Keeper, ctx sdk.Context, n int) []types.Service {
	items := make([]types.Service, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetService(ctx, items[i])
	}
	return items
}

func TestServiceGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNService(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetService(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestServiceRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNService(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveService(ctx, item.Index)
		_, found := keeper.GetService(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestServiceGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNService(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllService(ctx))
}
