package keeper

import (
	"context"
	"encoding/base64"
	"fmt"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) RejectSharing(goCtx context.Context, msg *types.MsgRejectSharing) (*types.MsgRejectSharingResponse, error) {
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

	keybz, err := base64.StdEncoding.DecodeString(userFound.PubKey)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("cannot decode user pubkey %s", userFound.PubKey))
	}
	pubKey := secp256k1.PubKey{Key: keybz}

	addr, err := sdk.Bech32ifyAddressBytes("medichain", pubKey.Address().Bytes())
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("cannot get user address %s", userFound.PubKey))
	}
	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != addr {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}
	valFound.Status = types.REJECTED

	k.SetSharing(ctx, valFound)

	return &types.MsgRejectSharingResponse{}, nil
}
