package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRejectSharing{}

func NewMsgRejectSharing(creator string, sharingId string) *MsgRejectSharing {
	return &MsgRejectSharing{
		Creator:   creator,
		SharingId: sharingId,
	}
}

func (msg *MsgRejectSharing) Route() string {
	return RouterKey
}

func (msg *MsgRejectSharing) Type() string {
	return "RejectSharing"
}

func (msg *MsgRejectSharing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRejectSharing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRejectSharing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
