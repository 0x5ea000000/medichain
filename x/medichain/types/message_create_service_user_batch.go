package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/google/uuid"
)

var _ sdk.Msg = &MsgCreateServiceUserBatch{}

func NewMsgCreateServiceUserBatch(creator string, userId string, serviceIds []string) *MsgCreateServiceUserBatch {
	return &MsgCreateServiceUserBatch{
		Creator:    creator,
		UserId:     userId,
		ServiceIds: serviceIds,
	}
}

func (msg *MsgCreateServiceUserBatch) Route() string {
	return RouterKey
}

func (msg *MsgCreateServiceUserBatch) Type() string {
	return "CreateServiceUserBatch"
}

func (msg *MsgCreateServiceUserBatch) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateServiceUserBatch) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateServiceUserBatch) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = uuid.Parse(msg.UserId)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid user id (%s)", msg.UserId)
	}

	for _, v := range msg.ServiceIds {
		_, err = uuid.Parse(v)
		if err != nil {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid service id (%s)", v)
		}
	}

	return nil
}
