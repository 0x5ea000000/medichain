package keeper

import (
	"context"
	"fmt"
	"github.com/google/uuid"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) CreateServiceUser(goCtx context.Context, msg *types.MsgCreateServiceUser) (*types.MsgCreateServiceUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var indexStr string

	// Check if the value already exists
	for indexStr == "" {
		index, err := uuid.NewUUID()

		_, isFound := k.GetService(ctx, indexStr)
		if err == nil && !isFound {
			indexStr = index.String()
		}
	}

	var serviceUser = types.ServiceUser{
		Index:         indexStr,
		Creator:       msg.Creator,
		ServiceId:     msg.ServiceId,
		UserId:        msg.UserId,
		ServiceUserId: msg.ServiceUserId,
		IsActive:      msg.IsActive,
	}

	err := k.ValidateServiceUser(ctx, &serviceUser)

	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, err.Error())
	}

	k.SetServiceUser(
		ctx,
		serviceUser,
	)
	return &types.MsgCreateServiceUserResponse{ServiceUser: &serviceUser}, nil
}

func (k msgServer) UpdateServiceUser(goCtx context.Context, msg *types.MsgUpdateServiceUser) (*types.MsgUpdateServiceUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetServiceUser(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var serviceUser = types.ServiceUser{
		Index:         msg.Index,
		Creator:       msg.Creator,
		ServiceId:     msg.ServiceId,
		UserId:        msg.UserId,
		ServiceUserId: msg.ServiceUserId,
		IsActive:      msg.IsActive,
	}

	k.SetServiceUser(ctx, serviceUser)

	return &types.MsgUpdateServiceUserResponse{ServiceUser: &serviceUser}, nil
}

func (k msgServer) DeleteServiceUser(goCtx context.Context, msg *types.MsgDeleteServiceUser) (*types.MsgDeleteServiceUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetServiceUser(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveServiceUser(ctx, msg.Index)

	return &types.MsgDeleteServiceUserResponse{}, nil
}
