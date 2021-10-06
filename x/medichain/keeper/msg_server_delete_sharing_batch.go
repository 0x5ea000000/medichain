package keeper

import (
	"context"

	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) DeleteSharingBatch(goCtx context.Context, msg *types.MsgDeleteSharingBatch) (*types.MsgDeleteSharingBatchResponse, error) {

	for _, v := range msg.Indexs {
		m := types.MsgDeleteSharing{
			Creator:  msg.Creator,
			Index: v,
		}
		_, err := k.DeleteSharing(goCtx, &m)
		if err != nil {
			return nil, err
		}
	}
	return &types.MsgDeleteSharingBatchResponse{}, nil
}
