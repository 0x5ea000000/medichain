package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/google/uuid"
)

var _ sdk.Msg = &MsgUpdateSharingStatusBatch{}

func NewMsgUpdateSharingStatusBatch(creator string, indexs []string, status string) *MsgUpdateSharingStatusBatch {
	return &MsgUpdateSharingStatusBatch{
		Creator: creator,
		Indexs:  indexs,
		Status:  status,
	}
}

func (msg *MsgUpdateSharingStatusBatch) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSharingStatusBatch) Type() string {
	return "UpdateSharingStatusBatch"
}

func (msg *MsgUpdateSharingStatusBatch) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSharingStatusBatch) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSharingStatusBatch) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	for _, v := range msg.Indexs {
		_, err = uuid.Parse(v)
		if err != nil {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid ownerId id (%s)", v)
		}
	}

	isValid := validateStatus(msg.Status)
	if !isValid {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid sharing status (%s)", msg.Status)
	}

	return nil
}
