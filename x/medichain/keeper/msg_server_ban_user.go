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

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	user, found := k.GetUser(ctx, msg.UserId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user %v not found", msg.UserId))
	}

	user.IsActive = false

	owners := k.GetUserServiceLinked(ctx, msg.UserId)

	for _, v := range owners {
		v.IsActive = false
		sharings := k.GetSharingByOwner(ctx, v.Index)
		for _, sharingId := range sharings {
			// no error catching
			sharing, _ := k.GetSharing(ctx, sharingId)
			if sharing.Status != types.REJECTED {
				sharing.Status = types.REJECTED
				k.SetSharing(ctx, sharing)
			}
		}
		k.SetServiceUser(ctx, *v)
	}

	for _, sharingId := range k.GetSharingByViewer(ctx, msg.UserId) {
		sharing,_ := k.GetSharing(ctx, sharingId)
		if sharing.Status == types.PENDING {
			sharing.Status = types.REJECTED
			k.SetSharing(ctx, sharing)
		}
	}

	k.SetUser(ctx, user)

	return &types.MsgBanUserResponse{}, nil
}
