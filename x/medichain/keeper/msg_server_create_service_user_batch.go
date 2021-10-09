package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) CreateServiceUserBatch(goCtx context.Context, msg *types.MsgCreateServiceUserBatch) (*types.MsgCreateServiceUserBatchResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}
	for _, v := range msg.ServiceIds {
		serviceUserMsg := types.MsgCreateServiceUser{
			Creator:       msg.Creator,
			ServiceId:     v,
			UserId:        msg.UserId,
			ServiceUserId: "",
			IsActive:      false,
		}
		_, err := k.CreateServiceUser(goCtx, &serviceUserMsg)
		if err != nil {
			return nil, err
		}
	}

	return &types.MsgCreateServiceUserBatchResponse{}, nil
}
