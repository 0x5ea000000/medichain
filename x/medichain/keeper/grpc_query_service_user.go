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

func (k Keeper) ServiceUserAll(c context.Context, req *types.QueryAllServiceUserRequest) (*types.QueryAllServiceUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var serviceUsers []*types.ServiceUser
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	serviceUserStore := prefix.NewStore(store, types.KeyPrefix(types.ServiceUserKey))

	pageRes, err := query.Paginate(serviceUserStore, req.Pagination, func(key []byte, value []byte) error {
		var serviceUser types.ServiceUser
		if err := k.cdc.UnmarshalBinaryBare(value, &serviceUser); err != nil {
			return err
		}

		serviceUsers = append(serviceUsers, &serviceUser)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllServiceUserResponse{ServiceUser: serviceUsers, Pagination: pageRes}, nil
}

func (k Keeper) ServiceUser(c context.Context, req *types.QueryGetServiceUserRequest) (*types.QueryGetServiceUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetServiceUser(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetServiceUserResponse{ServiceUser: &val}, nil
}
