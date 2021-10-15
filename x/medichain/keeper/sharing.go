package keeper

import (
	"encoding/binary"
	"errors"
	"fmt"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
	"strconv"
)

// SetSharing set a specific sharing in the store from its index
func (k Keeper) SetSharing(ctx sdk.Context, sharing types.Sharing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SharingKey))
	b := k.cdc.MustMarshalBinaryBare(&sharing)
	store.Set(types.KeyPrefix(sharing.Index), b)

	serviceUserStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(sharing.OwnerId))
	count := k.GetSharingCount(ctx, sharing.OwnerId)
	serviceUserStore.Set(GetSharingCountBytes(count), types.KeyPrefix(sharing.Index))
	k.SetSharingCount(ctx, sharing.OwnerId, count+1)
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

func (k Keeper) GetSharingIfExisted(ctx sdk.Context, sharing types.Sharing) (val types.Sharing, found bool) {
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
	
	return nil
}

// GetSharingByServiceUser get all sharing ids of a ServiceUser
func (k Keeper) GetSharingByServiceUser(ctx sdk.Context, serviceUserId string) []string {
	serviceUserStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(serviceUserId))
	count := k.GetSharingCount(ctx, serviceUserId)
	res := make([]string, 0)
	for i := uint64(0); i < count; i++ {
		res = append(res, string(serviceUserStore.Get(GetAdminIDBytes(i))))
	}
	return res
}

// GetSharingCount get the total number of sharing of each ServiceUser
func (k Keeper) GetSharingCount(ctx sdk.Context, serviceUserId string) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SharingCount))
	byteKey := types.KeyPrefix(serviceUserId)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetSharingCount set the total number of sharing of each ServiceUser
func (k Keeper) SetSharingCount(ctx sdk.Context, serviceUserId string, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SharingCount))
	byteKey := types.KeyPrefix(serviceUserId)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

func GetSharingCountBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}
