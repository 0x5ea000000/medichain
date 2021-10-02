package keeper

import (
	"errors"
	"fmt"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
)

// SetServiceUser set a specific serviceUser in the store from its index
func (k Keeper) SetServiceUser(ctx sdk.Context, serviceUser types.ServiceUser) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceUserKey))
	b := k.cdc.MustMarshalBinaryBare(&serviceUser)
	store.Set(types.KeyPrefix(serviceUser.Index), b)
}

// GetServiceUser returns a serviceUser from its index
func (k Keeper) GetServiceUser(ctx sdk.Context, index string) (val types.ServiceUser, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceUserKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveServiceUser removes a serviceUser from the store
func (k Keeper) RemoveServiceUser(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceUserKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllServiceUser returns all serviceUser
func (k Keeper) GetAllServiceUser(ctx sdk.Context) (list []types.ServiceUser) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceUserKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ServiceUser
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) GetServiceUserIfLinked(ctx sdk.Context, serviceUser types.ServiceUser) (val types.ServiceUser, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceUserKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if val.UserId == serviceUser.UserId && val.ServiceId == serviceUser.ServiceId {
			return val, true
		}
	}

	return val, false
}

func (k Keeper) GetUserServiceLinked(ctx sdk.Context, userId string) (list []*types.ServiceUser) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ServiceUserKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ServiceUser
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if val.UserId == userId {
			list = append(list, &val)
		}
	}

	return list
}

func (k Keeper) ValidateServiceUser(ctx sdk.Context, serviceUser *types.ServiceUser) error {
	_, isFound := k.GetUser(ctx, serviceUser.UserId)
	if !isFound {
		return errors.New(fmt.Sprintf("user id not found %s", serviceUser.UserId))
	}

	_, isFound = k.GetService(ctx, serviceUser.ServiceId)
	if !isFound {
		return errors.New(fmt.Sprintf("service id not found %s", serviceUser.ServiceId))
	}

	_, isFound = k.GetServiceUserIfLinked(ctx, *serviceUser)
	if isFound {
		return errors.New("service and user linked")
	}
	return nil
}
