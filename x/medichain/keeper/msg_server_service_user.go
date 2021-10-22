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

	//validate creator
	admin := k.GetAdmin(ctx, 0)

	adminAddr, err := types.DecodeAddressFromPubKey(admin.PubKey)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("incorrect creator , %v", err.Error()))
	}

	isAdmin := msg.Creator == *adminAddr

	if !isAdmin {
		service, found := k.GetService(ctx, msg.ServiceId)
		if !found {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("incorrect creator , %v", err.Error()))
		}

		serviceAddr, err := types.DecodeAddressFromPubKey(service.PubKey)
		if err != nil {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("incorrect creator , %v", err.Error()))
		}
		if msg.Creator != *serviceAddr {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("incorrect creator"))
		}
	}

	var serviceUser = types.ServiceUser{
		Creator:       msg.Creator,
		ServiceId:     msg.ServiceId,
		UserId:        msg.UserId,
		ServiceUserId: msg.ServiceUserId,
		IsActive:      msg.IsActive,
	}

	val := k.GetServiceUserIfLinked(ctx, serviceUser)
	if val != nil {
		serviceUser = *val
		if serviceUser.IsActive {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "connected")
		}
		if !isAdmin {
			serviceUser.ServiceUserId = msg.ServiceUserId
			serviceUser.IsActive = msg.IsActive
		} else {
			return &types.MsgCreateServiceUserResponse{ServiceUser: &serviceUser}, nil
		}
	} else {

		var indexStr string
		// Check if the id value already exists
		for indexStr == "" {
			index := uuid.New()

			_, isFound := k.GetService(ctx, indexStr)
			if !isFound {
				indexStr = index.String()
			}
		}
		serviceUser.Index = indexStr

		if isAdmin {
			serviceUser.IsActive = false
		}
		err := k.ValidateServiceUser(ctx, &serviceUser)
		if err != nil {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, err.Error())
		}
	}

	k.SetServiceUser(
		ctx,
		serviceUser,
	)
	return &types.MsgCreateServiceUserResponse{ServiceUser: &serviceUser}, nil
}

func (k msgServer) UpdateServiceUser(goCtx context.Context, msg *types.MsgUpdateServiceUser) (*types.MsgUpdateServiceUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	// Check if the value exists
	valFound, isFound := k.GetServiceUser(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		//return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var serviceUser = types.ServiceUser{
		Index:         msg.Index,
		Creator:       msg.Creator,
		ServiceId:     msg.ServiceId,
		UserId:        msg.UserId,
		ServiceUserId: msg.ServiceUserId,
		IsActive:      msg.IsActive,
	}

	val := k.GetServiceUserIfLinked(ctx, serviceUser)
	if val != nil && val.Index != msg.Index {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "service user linked")
	}

	if serviceUser.IsActive == false {
		for _, sharingId := range k.GetSharingByOwner(ctx, msg.Index) {
			sharing, _ := k.GetSharing(ctx, sharingId)
			if sharing.Status == types.ACCEPTED {
				sharing.Status = types.REJECTED
				k.SetSharing(ctx, sharing)
			}
		}
	}

	k.SetServiceUser(ctx, serviceUser)

	return &types.MsgUpdateServiceUserResponse{ServiceUser: &serviceUser}, nil
}

func (k msgServer) DeleteServiceUser(goCtx context.Context, msg *types.MsgDeleteServiceUser) (*types.MsgDeleteServiceUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	// Check if the value exists
	valFound, isFound := k.GetServiceUser(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		//return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveServiceUser(ctx, msg.Index)

	return &types.MsgDeleteServiceUserResponse{}, nil
}
