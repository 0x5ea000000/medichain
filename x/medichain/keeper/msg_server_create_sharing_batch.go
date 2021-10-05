package keeper

import (
	"context"

	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) CreateSharingBatch(goCtx context.Context, msg *types.MsgCreateSharingBatch) (*types.MsgCreateSharingBatchResponse, error) {
	// TODO: Handling the message
	for _, v := range msg.OwnerIds {
		m := types.MsgCreateSharing{Creator: msg.Creator, ViewerId: msg.ViewerId, OwnerId: v, Status: types.ACCEPTED}
		_, err := k.CreateSharing(goCtx, &m)
		if err != nil {
			return nil, err
		}
	}
	return &types.MsgCreateSharingBatchResponse{}, nil
}
