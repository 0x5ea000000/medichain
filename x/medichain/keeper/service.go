package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
)

// SetService set a specific service in the store from its index
func (k Keeper) SetService(ctx sdk.Context, service types.Service) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceKey))
	b := k.cdc.MustMarshalBinaryBare(&service)
	store.Set(types.KeyPrefix(service.Index), b)
}

// GetService returns a service from its index
func (k Keeper) GetService(ctx sdk.Context, index string) (val types.Service, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveService removes a service from the store
func (k Keeper) RemoveService(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllService returns all service
func (k Keeper) GetAllService(ctx sdk.Context) (list []types.Service) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Service
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
