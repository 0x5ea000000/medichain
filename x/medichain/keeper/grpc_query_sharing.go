package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/sota/medichain/x/medichain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SharingAll(c context.Context, req *types.QueryAllSharingRequest) (*types.QueryAllSharingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sharings []*types.Sharing
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sharingStore := prefix.NewStore(store, types.KeyPrefix(types.SharingKey))

	pageRes, err := query.Paginate(sharingStore, req.Pagination, func(key []byte, value []byte) error {
		var sharing types.Sharing
		if err := k.cdc.UnmarshalBinaryBare(value, &sharing); err != nil {
			return err
		}

		sharings = append(sharings, &sharing)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSharingResponse{Sharing: sharings, Pagination: pageRes}, nil
}

func (k Keeper) Sharing(c context.Context, req *types.QueryGetSharingRequest) (*types.QueryGetSharingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSharing(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSharingResponse{Sharing: &val}, nil
}
