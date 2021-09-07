package keeper

import (
	"errors"
	"fmt"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
)

// SetSharing set a specific sharing in the store from its index
func (k Keeper) SetSharing(ctx sdk.Context, sharing types.Sharing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SharingKey))
	b := k.cdc.MustMarshalBinaryBare(&sharing)
	store.Set(types.KeyPrefix(sharing.Index), b)
}

// GetSharing returns a sharing from its index
func (k Keeper) GetSharing(ctx sdk.Context, index string) (val types.Sharing, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SharingKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveSharing removes a sharing from the store
func (k Keeper) RemoveSharing(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SharingKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllSharing returns all sharing
func (k Keeper) GetAllSharing(ctx sdk.Context) (list []types.Sharing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SharingKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Sharing
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) GetSharingIfShared(ctx sdk.Context, sharing types.Sharing) (val types.Sharing, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SharingKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if val.OwnerId == sharing.OwnerId && val.ViewerId == sharing.ViewerId {
			return val, true
		}
	}

	return val, false
}

func (k Keeper) ValidateSharing(ctx sdk.Context, sharing *types.Sharing) error {
	_, isFound := k.GetServiceUser(ctx, sharing.OwnerId)
	if !isFound {
		return errors.New(fmt.Sprintf("owner id not found %s", sharing.OwnerId))
	}

	_, isFound = k.GetUser(ctx, sharing.ViewerId)
	if !isFound {
		return errors.New(fmt.Sprintf("viewer id not found %s", sharing.ViewerId))
	}

	_, isFound = k.GetSharingIfShared(ctx, *sharing)
	if isFound {
		return errors.New("owner and viewer sharing record found")
	}
	return nil
}
