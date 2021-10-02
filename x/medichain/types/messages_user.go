package types

import (
	"encoding/base64"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateUser{}

func NewMsgCreateUser(creator string, pubKey string, isActive bool) *MsgCreateUser {
	return &MsgCreateUser{
		Creator:  creator,
		PubKey:   pubKey,
		IsActive: isActive,
	}
}

func (msg *MsgCreateUser) Route() string {
	return RouterKey
}

func (msg *MsgCreateUser) Type() string {
	return "CreateUser"
}

func (msg *MsgCreateUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateUser) ValidateBasic() error {
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

var _ sdk.Msg = &MsgUpdateUser{}

func NewMsgUpdateUser(creator string, index string, pubKey string, isActive bool) *MsgUpdateUser {
	return &MsgUpdateUser{
		Creator:  creator,
		Index:    index,
		PubKey:   pubKey,
		IsActive: isActive,
	}
}

func (msg *MsgUpdateUser) Route() string {
	return RouterKey
}

func (msg *MsgUpdateUser) Type() string {
	return "UpdateUser"
}

func (msg *MsgUpdateUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateUser) ValidateBasic() error {
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

var _ sdk.Msg = &MsgDeleteUser{}

func NewMsgDeleteUser(creator string, index string) *MsgDeleteUser {
	return &MsgDeleteUser{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteUser) Route() string {
	return RouterKey
}

func (msg *MsgDeleteUser) Type() string {
	return "DeleteUser"
}

func (msg *MsgDeleteUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteUser) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
