package keeper

import (
	"context"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/google/uuid"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) CreateService(goCtx context.Context, msg *types.MsgCreateService) (*types.MsgCreateServiceResponse, error) {
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

	var service = types.Service{
		Index:    indexStr,
		Creator:  msg.Creator,
		Name:     msg.Name,
		Url:      msg.Url,
		PubKey:   msg.PubKey,
		IsActive: msg.IsActive,
	}

	_, found := k.GetServiceIfExisted(ctx, service)
	if found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "service pubKey existed")
	}

	k.SetService(
		ctx,
		service,
	)

	err := k.initAcct(ctx, msg.PubKey)

	if err != nil {
		logger := k.Logger(ctx)
		logger.Error(err.Error())
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "cannot init address")
	}

	return &types.MsgCreateServiceResponse{Service: &service}, nil
}

func (k msgServer) UpdateService(goCtx context.Context, msg *types.MsgUpdateService) (*types.MsgUpdateServiceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetService(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		//return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var service = types.Service{
		Index:    msg.Index,
		Creator:  msg.Creator,
		Name:     msg.Name,
		Url:      msg.Url,
		PubKey:   msg.PubKey,
		IsActive: msg.IsActive,
	}

	_, found := k.GetServiceIfExisted(ctx, service)
	if found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "service pubKey existed")
	}

	k.SetService(ctx, service)

	return &types.MsgUpdateServiceResponse{Service: &service}, nil
}

func (k msgServer) DeleteService(goCtx context.Context, msg *types.MsgDeleteService) (*types.MsgDeleteServiceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetService(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		//return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveService(ctx, msg.Index)

	return &types.MsgDeleteServiceResponse{}, nil
}
