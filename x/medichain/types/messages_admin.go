package types

import (
	"encoding/base64"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAdmin{}

func NewMsgCreateAdmin(creator string, pubKey string) *MsgCreateAdmin {
	return &MsgCreateAdmin{
		Creator: creator,
		PubKey:  pubKey,
	}
}

func (msg *MsgCreateAdmin) Route() string {
	return RouterKey
}

func (msg *MsgCreateAdmin) Type() string {
	return "CreateAdmin"
}

func (msg *MsgCreateAdmin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAdmin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAdmin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	pubKeyBz, err := base64.StdEncoding.DecodeString(msg.PubKey)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidPubKey, "cannot decode pubKey (%s)", err)
	}

	pubKey := secp256k1.PubKey{Key: pubKeyBz}
	_, err = sdk.Bech32ifyPubKey(sdk.Bech32PubKeyTypeAccPub, &pubKey)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidPubKey, "cannot decode pubKey (%s)", err)
	}

	return nil
}

var _ sdk.Msg = &MsgUpdateAdmin{}

func NewMsgUpdateAdmin(creator string, id uint64, pubKey string) *MsgUpdateAdmin {
	return &MsgUpdateAdmin{
		Id:      id,
		Creator: creator,
		PubKey:  pubKey,
	}
}

func (msg *MsgUpdateAdmin) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAdmin) Type() string {
	return "UpdateAdmin"
}

func (msg *MsgUpdateAdmin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAdmin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAdmin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	pubKeyBz, err := base64.StdEncoding.DecodeString(msg.PubKey)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidPubKey, "cannot decode pubKey (%s)", err)
	}

	pubKey := secp256k1.PubKey{Key: pubKeyBz}
	_, err = sdk.Bech32ifyPubKey(sdk.Bech32PubKeyTypeAccPub, &pubKey)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidPubKey, "cannot decode pubKey (%s)", err)
	}

	return nil
}

var _ sdk.Msg = &MsgDeleteAdmin{}

func NewMsgDeleteAdmin(creator string, id uint64) *MsgDeleteAdmin {
	return &MsgDeleteAdmin{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteAdmin) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAdmin) Type() string {
	return "DeleteAdmin"
}

func (msg *MsgDeleteAdmin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAdmin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAdmin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
