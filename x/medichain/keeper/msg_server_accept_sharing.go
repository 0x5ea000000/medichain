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

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	valFound, isFound := k.GetSharing(ctx, msg.SharingId)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("sharing id not found %s", msg.SharingId))
	}

	valFound.Status = types.ACCEPTED

	k.SetSharing(ctx, valFound)

	return &types.MsgAcceptSharingResponse{}, nil
}
