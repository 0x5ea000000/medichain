package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/google/uuid"
)

var _ sdk.Msg = &MsgAcceptSharing{}

func NewMsgAcceptSharing(creator string, sharingId string) *MsgAcceptSharing {
	return &MsgAcceptSharing{
		Creator:   creator,
		SharingId: sharingId,
	}
}

func (msg *MsgAcceptSharing) Route() string {
	return RouterKey
}

func (msg *MsgAcceptSharing) Type() string {
	return "AcceptSharing"
}

func (msg *MsgAcceptSharing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAcceptSharing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)

}

func (msg *MsgAcceptSharing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = uuid.Parse(msg.SharingId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid sharing id (%s)", msg.SharingId)
	}

	return nil
}
