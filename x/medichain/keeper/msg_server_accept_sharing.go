package keeper

import (
	"context"
	"fmt"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) AcceptSharing(goCtx context.Context, msg *types.MsgAcceptSharing) (*types.MsgAcceptSharingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	valFound, isFound := k.GetSharing(ctx, msg.SharingId)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("sharing id not found %s", msg.SharingId))
	}

	serviceUserFound, isFound := k.GetServiceUser(ctx, valFound.OwnerId)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("owner id not found %s", msg.SharingId))
	}

	userFound, isFound := k.GetUser(ctx, serviceUserFound.UserId)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user id not found %s", msg.SharingId))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != userFound.Address {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	valFound.Status = types.ACCEPTED

	k.SetSharing(ctx, valFound)

	return &types.MsgAcceptSharingResponse{}, nil
}
