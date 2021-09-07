package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/google/uuid"
)

var _ sdk.Msg = &MsgCreateServiceUser{}

func NewMsgCreateServiceUser(creator string, serviceId string, userId string, serviceUserId string, isActive bool) *MsgCreateServiceUser {
	return &MsgCreateServiceUser{
		Creator:       creator,
		ServiceId:     serviceId,
		UserId:        userId,
		ServiceUserId: serviceUserId,
		IsActive:      isActive,
	}
}

func (msg *MsgCreateServiceUser) Route() string {
	return RouterKey
}

func (msg *MsgCreateServiceUser) Type() string {
	return "CreateServiceUser"
}

func (msg *MsgCreateServiceUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateServiceUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateServiceUser) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = uuid.Parse(msg.UserId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid user id (%s)", msg.UserId)
	}

	_, err = uuid.Parse(msg.ServiceId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid service id (%s)", msg.ServiceId)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateServiceUser{}

func NewMsgUpdateServiceUser(creator string, index string, serviceId string, userId string, serviceUserId string, isActive bool) *MsgUpdateServiceUser {
	return &MsgUpdateServiceUser{
		Creator:       creator,
		Index:         index,
		ServiceId:     serviceId,
		UserId:        userId,
		ServiceUserId: serviceUserId,
		IsActive:      isActive,
	}
}

func (msg *MsgUpdateServiceUser) Route() string {
	return RouterKey
}

func (msg *MsgUpdateServiceUser) Type() string {
	return "UpdateServiceUser"
}

func (msg *MsgUpdateServiceUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateServiceUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateServiceUser) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = uuid.Parse(msg.UserId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid user id (%s)", msg.UserId)
	}

	_, err = uuid.Parse(msg.ServiceId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid service id (%s)", msg.ServiceId)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteServiceUser{}

func NewMsgDeleteServiceUser(creator string, index string) *MsgDeleteServiceUser {
	return &MsgDeleteServiceUser{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteServiceUser) Route() string {
	return RouterKey
}

func (msg *MsgDeleteServiceUser) Type() string {
	return "DeleteServiceUser"
}

func (msg *MsgDeleteServiceUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteServiceUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteServiceUser) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
