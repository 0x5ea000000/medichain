package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) CreateSharingBatch(goCtx context.Context, msg *types.MsgCreateSharingBatch) (*types.MsgCreateSharingBatchResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	for _, v := range msg.OwnerIds {
		m := types.MsgCreateSharing{
			Creator:  msg.Creator,
			ViewerId: msg.ViewerId,
			OwnerId:  v,
			Status:   msg.Status,
		}
		_, err := k.CreateSharing(goCtx, &m)
		if err != nil {
			return nil, err
		}
	}
	return &types.MsgCreateSharingBatchResponse{}, nil
}
