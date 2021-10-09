package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgUnbanUser{}

func NewMsgUnbanUser(creator string, index string) *MsgUnbanUser {
	return &MsgUnbanUser{
		Creator: creator,
		UserId:  index,
	}
}

func (msg *MsgUnbanUser) Route() string {
	return RouterKey
}

func (msg *MsgUnbanUser) Type() string {
	return "UnbanUser"
}

func (msg *MsgUnbanUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUnbanUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnbanUser) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
