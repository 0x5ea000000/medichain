package types

import (
	"encoding/base64"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	PROVIDER = "provider"
	VIEW     = "view"
)

var _ sdk.Msg = &MsgCreateService{}

func NewMsgCreateService(creator string, name string, url string, pubKey string, isActive bool) *MsgCreateService {
	return &MsgCreateService{
		Creator:  creator,
		Name:     name,
		Url:      url,
		PubKey:   pubKey,
		IsActive: isActive,
	}
}

func (msg *MsgCreateService) Route() string {
	return RouterKey
}

func (msg *MsgCreateService) Type() string {
	return "CreateService"
}

func (msg *MsgCreateService) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateService) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateService) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	pubKeyBz, err := base64.StdEncoding.DecodeString(msg.PubKey)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "cannot decode pubKey (%s)", err)
	}

	pubKey := secp256k1.PubKey{Key: pubKeyBz}
	_, err = sdk.Bech32ifyPubKey(sdk.Bech32PubKeyTypeAccPub, &pubKey)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "cannot decode pubKey (%s)", err)
	}

	return nil
}

var _ sdk.Msg = &MsgUpdateService{}

func NewMsgUpdateService(creator string, index string, name string, url string, pubKey string, isActive bool) *MsgUpdateService {
	return &MsgUpdateService{
		Creator:  creator,
		Index:    index,
		Name:     name,
		Url:      url,
		PubKey:   pubKey,
		IsActive: isActive,
	}
}

func (msg *MsgUpdateService) Route() string {
	return RouterKey
}

func (msg *MsgUpdateService) Type() string {
	return "UpdateService"
}

func (msg *MsgUpdateService) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateService) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateService) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	pubKeyBz, err := base64.StdEncoding.DecodeString(msg.PubKey)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "cannot decode pubKey (%s)", err)
	}

	pubKey := secp256k1.PubKey{Key: pubKeyBz}
	_, err = sdk.Bech32ifyPubKey(sdk.Bech32PubKeyTypeAccPub, &pubKey)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "cannot decode pubKey (%s)", err)
	}

	return nil
}

var _ sdk.Msg = &MsgDeleteService{}

func NewMsgDeleteService(creator string, index string) *MsgDeleteService {
	return &MsgDeleteService{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteService) Route() string {
	return RouterKey
}

func (msg *MsgDeleteService) Type() string {
	return "DeleteService"
}

func (msg *MsgDeleteService) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteService) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteService) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
