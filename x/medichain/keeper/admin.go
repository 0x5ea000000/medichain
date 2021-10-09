package keeper

import (
	"encoding/binary"
	"fmt"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sota/medichain/x/medichain/types"
	"strconv"
)

// GetAdminCount get the total number of TypeName.LowerCamel
func (k Keeper) GetAdminCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdminCountKey))
	byteKey := types.KeyPrefix(types.AdminCountKey)
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

// SetAdminCount set the total number of admin
func (k Keeper) SetAdminCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdminCountKey))
	byteKey := types.KeyPrefix(types.AdminCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendAdmin appends a admin in the store with a new id and update the count
func (k Keeper) AppendAdmin(
	ctx sdk.Context,
	admin types.Admin,
) uint64 {
	// Create the admin
	count := k.GetAdminCount(ctx)

	// Set the ID of the appended value
	admin.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdminKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&admin)
	store.Set(GetAdminIDBytes(admin.Id), appendedValue)

	// Update admin count
	k.SetAdminCount(ctx, count+1)

	return count
}

// SetAdmin set a specific admin in the store
func (k Keeper) SetAdmin(ctx sdk.Context, admin types.Admin) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdminKey))
	b := k.cdc.MustMarshalBinaryBare(&admin)
	store.Set(GetAdminIDBytes(admin.Id), b)
}

// GetAdmin returns a admin from its id
func (k Keeper) GetAdmin(ctx sdk.Context, id uint64) types.Admin {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdminKey))
	var admin types.Admin
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetAdminIDBytes(id)), &admin)
	return admin
}

// HasAdmin checks if the admin exists in the store
func (k Keeper) HasAdmin(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdminKey))
	return store.Has(GetAdminIDBytes(id))
}

// GetAdminOwner returns the creator of the
func (k Keeper) GetAdminOwner(ctx sdk.Context, id uint64) string {
	return k.GetAdmin(ctx, id).Creator
}

// RemoveAdmin removes a admin from the store
func (k Keeper) RemoveAdmin(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdminKey))
	store.Delete(GetAdminIDBytes(id))
}

// GetAllAdmin returns all admin
func (k Keeper) GetAllAdmin(ctx sdk.Context) (list []types.Admin) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AdminKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Admin
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAdminIDBytes returns the byte representation of the ID
func GetAdminIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetAdminIDFromBytes returns ID in uint64 format from a byte array
func GetAdminIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) CheckAdmin(ctx sdk.Context, addr string) error {
	//validate creator
	admin := k.GetAdmin(ctx, 0)

	adminAddr, err := types.DecodeAddressFromPubKey(admin.PubKey)
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("incorrect creator , %v", err.Error()))
	}

	if addr != *adminAddr {
		return sdkerrors.Wrap(sdkerrors.ErrUnauthorized, fmt.Sprintf("incorrect creator , %v", err.Error()))
	}
	return nil
}
