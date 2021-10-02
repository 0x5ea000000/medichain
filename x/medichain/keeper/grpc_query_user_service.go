package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) UserService(goCtx context.Context, req *types.QueryUserServiceRequest) (*types.QueryUserServiceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	res := k.GetUserServiceLinked(ctx, req.UserId)

	return &types.QueryUserServiceResponse{ServiceUser: res}, nil
}
