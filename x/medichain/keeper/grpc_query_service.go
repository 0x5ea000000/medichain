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

func (k Keeper) ServiceAll(c context.Context, req *types.QueryAllServiceRequest) (*types.QueryAllServiceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var services []*types.Service
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	serviceStore := prefix.NewStore(store, types.KeyPrefix(types.ServiceKey))

	pageRes, err := query.Paginate(serviceStore, req.Pagination, func(key []byte, value []byte) error {
		var service types.Service
		if err := k.cdc.UnmarshalBinaryBare(value, &service); err != nil {
			return err
		}

		services = append(services, &service)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllServiceResponse{Service: services, Pagination: pageRes}, nil
}

func (k Keeper) Service(c context.Context, req *types.QueryGetServiceRequest) (*types.QueryGetServiceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetService(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetServiceResponse{Service: &val}, nil
}
