package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/google/uuid"
)

var _ sdk.Msg = &MsgDeleteSharingBatch{}

func NewMsgDeleteSharingBatch(creator string, indexs []string) *MsgDeleteSharingBatch {
	return &MsgDeleteSharingBatch{
		Creator: creator,
		Indexs:  indexs,
	}
}

func (msg *MsgDeleteSharingBatch) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSharingBatch) Type() string {
	return "DeleteSharingBatch"
}

func (msg *MsgDeleteSharingBatch) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSharingBatch) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSharingBatch) ValidateBasic() error {
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

	return nil
}
