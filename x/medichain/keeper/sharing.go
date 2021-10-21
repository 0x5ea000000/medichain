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

	ownerStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(sharing.OwnerId))
	count := k.GetOwnerSharingCount(ctx, sharing.OwnerId)
	ownerStore.Set(GetSharingCountBytes(count), types.KeyPrefix(sharing.Index))
	k.SetOwnerSharingCount(ctx, sharing.OwnerId, count+1)

	viewerStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(sharing.ViewerId))
	count = k.GetViewerSharingCount(ctx, sharing.ViewerId)
	viewerStore.Set(GetSharingCountBytes(count), types.KeyPrefix(sharing.Index))
	k.SetViewerSharingCount(ctx, sharing.ViewerId, count+1)
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

func (k Keeper) GetSharingIfExisted(ctx sdk.Context, sharing types.Sharing) *types.Sharing {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(sharing.ViewerId))
	count := k.GetViewerSharingCount(ctx, sharing.ViewerId)

	var res *types.Sharing

	for i := uint64(0); i < count; i++ {
		val, _ := k.GetSharing(ctx, string(store.Get(GetSharingCountBytes(i))))
		if val.OwnerId == sharing.OwnerId && val.ViewerId == sharing.ViewerId {
			if val.Status != types.REJECTED {
				return &val
			} else {
				res = &val
			}
		}
	}

	if res != nil {
		return res
	}

	return nil
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

// GetSharingByOwner get all sharing ids of a ServiceUser
func (k Keeper) GetSharingByOwner(ctx sdk.Context, ownerId string) []string {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(ownerId))
	count := k.GetOwnerSharingCount(ctx, ownerId)
	res := make([]string, 0)
	for i := uint64(0); i < count; i++ {
		res = append(res, string(store.Get(GetSharingCountBytes(i))))
	}
	return res
}

// GetOwnerSharingCount get the total number of sharing of each ServiceUser
func (k Keeper) GetOwnerSharingCount(ctx sdk.Context, ownerId string) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OwnerSharingCount))
	byteKey := types.KeyPrefix(ownerId)
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

// SetOwnerSharingCount set the total number of sharing of each ServiceUser
func (k Keeper) SetOwnerSharingCount(ctx sdk.Context, ownerId string, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OwnerSharingCount))
	byteKey := types.KeyPrefix(ownerId)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

func GetSharingCountBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSharingByViewer get all sharing ids of a viewer(UserId)
func (k Keeper) GetSharingByViewer(ctx sdk.Context, viewerId string) []string {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(viewerId))
	count := k.GetViewerSharingCount(ctx, viewerId)
	res := make([]string, 0)
	for i := uint64(0); i < count; i++ {
		res = append(res, string(store.Get(GetSharingCountBytes(i))))
	}
	return res
}

// GetViewerSharingCount get the total number of sharing of each viewer(UserId)
func (k Keeper) GetViewerSharingCount(ctx sdk.Context, viewerId string) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ViewerSharingCount))
	byteKey := types.KeyPrefix(viewerId)
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

// SetViewerSharingCount set the total number of sharing of each viewer(UserId)
func (k Keeper) SetViewerSharingCount(ctx sdk.Context, viewerId string, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ViewerSharingCount))
	byteKey := types.KeyPrefix(viewerId)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}
