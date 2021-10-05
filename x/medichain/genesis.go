package medichain

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/keeper"
	"github.com/sota/medichain/x/medichain/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the admin
	for _, elem := range genState.AdminList {
		k.SetAdmin(ctx, *elem)
	}

	// Set admin count
	k.SetAdminCount(ctx, genState.AdminCount)

	// Set all the sharing
	for _, elem := range genState.SharingList {
		k.SetSharing(ctx, *elem)
	}

	// Set all the serviceUser
	for _, elem := range genState.ServiceUserList {
		k.SetServiceUser(ctx, *elem)
	}

	// Set all the service
	for _, elem := range genState.ServiceList {
		k.SetService(ctx, *elem)
	}

	// Set all the user
	for _, elem := range genState.UserList {
		k.SetUser(ctx, *elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all admin
	adminList := k.GetAllAdmin(ctx)
	for _, elem := range adminList {
		elem := elem
		genesis.AdminList = append(genesis.AdminList, &elem)
	}

	// Set the current count
	genesis.AdminCount = k.GetAdminCount(ctx)

	// Get all sharing
	sharingList := k.GetAllSharing(ctx)
	for _, elem := range sharingList {
		elem := elem
		genesis.SharingList = append(genesis.SharingList, &elem)
	}

	// Get all serviceUser
	serviceUserList := k.GetAllServiceUser(ctx)
	for _, elem := range serviceUserList {
		elem := elem
		genesis.ServiceUserList = append(genesis.ServiceUserList, &elem)
	}

	// Get all service
	serviceList := k.GetAllService(ctx)
	for _, elem := range serviceList {
		elem := elem
		genesis.ServiceList = append(genesis.ServiceList, &elem)
	}

	// Get all user
	userList := k.GetAllUser(ctx)
	for _, elem := range userList {
		elem := elem
		genesis.UserList = append(genesis.UserList, &elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
