package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CheckServiceUser(goCtx context.Context, req *types.QueryCheckServiceUserRequest) (*types.QueryCheckServiceUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	serviceUser := types.ServiceUser{
		UserId:    req.UserId,
		ServiceId: req.ServiceId,
	}
	res, isFound := k.GetServiceUserIfLinked(ctx, serviceUser)
	if !isFound {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryCheckServiceUserResponse{ServiceUser: &res}, nil
}
