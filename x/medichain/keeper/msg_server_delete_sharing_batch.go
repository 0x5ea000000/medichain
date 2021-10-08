package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) DeleteSharingBatch(goCtx context.Context, msg *types.MsgDeleteSharingBatch) (*types.MsgDeleteSharingBatchResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx);

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	for _, v := range msg.Indexs {
		m := types.MsgDeleteSharing{
			Creator: msg.Creator,
			Index:   v,
		}
		_, err := k.DeleteSharing(goCtx, &m)
		if err != nil {
			return nil, err
		}
	}
	return &types.MsgDeleteSharingBatchResponse{}, nil
}
