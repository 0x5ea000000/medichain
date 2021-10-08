package keeper

import (
	"context"
	"fmt"
	"github.com/google/uuid"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) CreateSharing(goCtx context.Context, msg *types.MsgCreateSharing) (*types.MsgCreateSharingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	var indexStr string

	// Check if the id value already exists
	for indexStr == "" {
		index, err := uuid.NewUUID()

		_, isFound := k.GetService(ctx, indexStr)
		if err == nil && !isFound {
			indexStr = index.String()
		}
	}

	var sharing = types.Sharing{
		Index:    indexStr,
		Creator:  msg.Creator,
		OwnerId:  msg.OwnerId,
		ViewerId: msg.ViewerId,
		Status:   msg.Status,
	}

	err := k.ValidateSharing(ctx, &sharing)

	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, err.Error())
	}

	k.SetSharing(
		ctx,
		sharing,
	)
	return &types.MsgCreateSharingResponse{Sharing: &sharing}, nil
}

func (k msgServer) UpdateSharing(goCtx context.Context, msg *types.MsgUpdateSharing) (*types.MsgUpdateSharingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	// Check if the value exists
	valFound, isFound := k.GetSharing(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		//return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var sharing = types.Sharing{
		Index:    msg.Index,
		Creator:  msg.Creator,
		OwnerId:  msg.OwnerId,
		ViewerId: msg.ViewerId,
		Status:   msg.Status,
	}

	err := k.ValidateSharing(ctx, &sharing)

	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, err.Error())
	}

	k.SetSharing(ctx, sharing)

	return &types.MsgUpdateSharingResponse{Sharing: &sharing}, nil
}

func (k msgServer) DeleteSharing(goCtx context.Context, msg *types.MsgDeleteSharing) (*types.MsgDeleteSharingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	// Check if the value exists
	valFound, isFound := k.GetSharing(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		//return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSharing(ctx, msg.Index)

	return &types.MsgDeleteSharingResponse{}, nil
}
