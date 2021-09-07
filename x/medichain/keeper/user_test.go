package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/sota/medichain/x/medichain/types"
)

func createNUser(keeper *Keeper, ctx sdk.Context, n int) []types.User {
	items := make([]types.User, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetUser(ctx, items[i])
	}
	return items
}

func TestUserGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNUser(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetUser(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestUserRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNUser(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveUser(ctx, item.Index)
		_, found := keeper.GetUser(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestUserGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNUser(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllUser(ctx))
}
