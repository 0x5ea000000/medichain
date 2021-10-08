package keeper

import (
	"encoding/base64"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
	"github.com/tendermint/tendermint/crypto"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

var _ types.MsgServer = msgServer{}

func (k Keeper) initAcct(ctx sdk.Context, desPubKey string) error {
	initCoin, err := sdk.ParseCoinsNormalized("1token")
	if err != nil {
		return err
	}

	logger := k.Logger(ctx)

	logger.Info("dcm")

	if err := k.bankKeeper.MintCoins(ctx, types.ModuleName, initCoin); err != nil {
		return err
	}

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	ServicePubKeyBz, err := base64.StdEncoding.DecodeString(desPubKey)
	if err != nil {
		return err
	}

	ServicePubKey := secp256k1.PubKey{Key: ServicePubKeyBz}
	_, err = sdk.Bech32ifyPubKey(sdk.Bech32PubKeyTypeAccPub, &ServicePubKey)
	if err != nil {
		return err
	}

	if err := k.bankKeeper.SendCoins(ctx, moduleAcct, sdk.AccAddress(ServicePubKey.Address()), initCoin); err != nil {
		return err
	}
	return nil
}
