package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/sota/medichain/x/medichain/types"
)

func createNServiceUser(keeper *Keeper, ctx sdk.Context, n int) []types.ServiceUser {
	items := make([]types.ServiceUser, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetServiceUser(ctx, items[i])
	}
	return items
}

func TestServiceUserGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNServiceUser(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetServiceUser(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestServiceUserRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNServiceUser(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveServiceUser(ctx, item.Index)
		_, found := keeper.GetServiceUser(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestServiceUserGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNServiceUser(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllServiceUser(ctx))
}
