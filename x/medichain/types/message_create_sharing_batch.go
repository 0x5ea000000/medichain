package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/google/uuid"
)

var _ sdk.Msg = &MsgCreateSharingBatch{}

func NewMsgCreateSharingBatch(creator string, viewerId string, ownerIds []string, status string) *MsgCreateSharingBatch {
	return &MsgCreateSharingBatch{
		Creator:  creator,
		ViewerId: viewerId,
		OwnerIds: ownerIds,
		Status:   status,
	}
}

func (msg *MsgCreateSharingBatch) Route() string {
	return RouterKey
}

func (msg *MsgCreateSharingBatch) Type() string {
	return "CreateSharingBatch"
}

func (msg *MsgCreateSharingBatch) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSharingBatch) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSharingBatch) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = uuid.Parse(msg.ViewerId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid viewerId id (%s)", msg.ViewerId)
	}

	for _, v := range msg.OwnerIds {
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
