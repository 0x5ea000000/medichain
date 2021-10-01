package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/google/uuid"
)

const (
	PENDING  = "pending"
	ACCEPTED = "accepted"
	REJECTED = "rejected"
)

var _ sdk.Msg = &MsgCreateSharing{}

func NewMsgCreateSharing(creator string, ownerId string, viewerId string, status string) *MsgCreateSharing {
	return &MsgCreateSharing{
		Creator:  creator,
		OwnerId:  ownerId,
		ViewerId: viewerId,
		Status:   status,
	}
}

func (msg *MsgCreateSharing) Route() string {
	return RouterKey
}

func (msg *MsgCreateSharing) Type() string {
	return "CreateSharing"
}

func (msg *MsgCreateSharing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSharing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSharing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = uuid.Parse(msg.OwnerId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid owner id (%s)", msg.OwnerId)
	}

	_, err = uuid.Parse(msg.ViewerId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid viewer id (%s)", msg.ViewerId)
	}

	isValid := validateStatus(msg.Status)
	if !isValid {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid sharing status (%s)", msg.Status)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSharing{}

func NewMsgUpdateSharing(creator string, index string, ownerId string, viewerId string, status string) *MsgUpdateSharing {
	return &MsgUpdateSharing{
		Creator:  creator,
		Index:    index,
		OwnerId:  ownerId,
		ViewerId: viewerId,
		Status:   status,
	}
}

func (msg *MsgUpdateSharing) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSharing) Type() string {
	return "UpdateSharing"
}

func (msg *MsgUpdateSharing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSharing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSharing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = uuid.Parse(msg.OwnerId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid owner id (%s)", msg.OwnerId)
	}

	_, err = uuid.Parse(msg.ViewerId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid viewer id (%s)", msg.ViewerId)
	}

	isValid := validateStatus(msg.Status)
	if !isValid {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid sharing status (%s)", msg.Status)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSharing{}

func NewMsgDeleteSharing(creator string, index string) *MsgDeleteSharing {
	return &MsgDeleteSharing{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteSharing) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSharing) Type() string {
	return "DeleteSharing"
}

func (msg *MsgDeleteSharing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSharing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSharing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

func validateStatus(status string) bool {
	switch status {
	case PENDING, ACCEPTED, REJECTED:
		return true
	default:
		return false
	}

}
