package types

import (
	"encoding/base64"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	AccountAddressPrefix = "medichain"
	Name                 = "medichain"
)

func DecodeAddressFromPubKey(pubKeyStr string) (*string, error) {

	pubKeyBz, err := base64.StdEncoding.DecodeString(pubKeyStr)
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInvalidPubKey, "cannot decode pubKey (%s)", err)
	}

	pubKey := secp256k1.PubKey{Key: pubKeyBz}
	addr, err := sdk.Bech32ifyAddressBytes(AccountAddressPrefix, pubKey.Address().Bytes())
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInvalidPubKey, "cannot decode pubKey (%s)", err)
	}
	return &addr, nil
}
