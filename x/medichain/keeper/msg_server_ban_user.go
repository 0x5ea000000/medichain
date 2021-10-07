package keeper

import (
	"context"
	"fmt"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) BanUser(goCtx context.Context, msg *types.MsgBanUser) (*types.MsgBanUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	user, found := k.GetUser(ctx, msg.UserId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user %v not found" ,msg.UserId))
	}

	user.IsActive = false

	serviceUsers := k.GetUserServiceLinked(ctx, msg.UserId)

	for _, v := range serviceUsers {
		k.RemoveServiceUser(ctx, v.Index)
	}

	k.SetUser(ctx, user)

	return &types.MsgBanUserResponse{}, nil
}
