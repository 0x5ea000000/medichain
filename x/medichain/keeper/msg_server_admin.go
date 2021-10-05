package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) CreateAdmin(goCtx context.Context, msg *types.MsgCreateAdmin) (*types.MsgCreateAdminResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var admin = types.Admin{
		Creator: msg.Creator,
		PubKey:  msg.PubKey,
	}

	if k.HasAdmin(ctx, 0) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, fmt.Sprintf("admin key exists"))
	}

	id := k.AppendAdmin(
		ctx,
		admin,
	)

	return &types.MsgCreateAdminResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateAdmin(goCtx context.Context, msg *types.MsgUpdateAdmin) (*types.MsgUpdateAdminResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var admin = types.Admin{
		Creator: msg.Creator,
		Id:      msg.Id,
		PubKey:  msg.PubKey,
	}

	// Checks that the element exists
	if !k.HasAdmin(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetAdminOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetAdmin(ctx, admin)

	return &types.MsgUpdateAdminResponse{}, nil
}

func (k msgServer) DeleteAdmin(goCtx context.Context, msg *types.MsgDeleteAdmin) (*types.MsgDeleteAdminResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasAdmin(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetAdminOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveAdmin(ctx, msg.Id)

	return &types.MsgDeleteAdminResponse{}, nil
}
