package keeper

import (
	"context"
	"fmt"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) UnbanUser(goCtx context.Context, msg *types.MsgUnbanUser) (*types.MsgUnbanUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	user, found := k.GetUser(ctx, msg.UserId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user %v not found", msg.UserId))
	}

	user.IsActive = true

	k.SetUser(ctx, user)

	return &types.MsgUnbanUserResponse{}, nil
}
