package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	PROVIDER = "provider"
	VIEW     = "view"
)

var _ sdk.Msg = &MsgCreateService{}

func NewMsgCreateService(creator string, name string, url string, class string, isActive bool) *MsgCreateService {
	return &MsgCreateService{
		Creator:  creator,
		Name:     name,
		Url:      url,
		Class:    class,
		IsActive: isActive,
	}
}

func (msg *MsgCreateService) Route() string {
	return RouterKey
}

func (msg *MsgCreateService) Type() string {
	return "CreateService"
}

func (msg *MsgCreateService) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateService) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateService) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	isValid := validateClass(msg.Class)
	if !isValid {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid class (%s)", msg.Class)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateService{}

func NewMsgUpdateService(creator string, index string, name string, url string, class string, isActive bool) *MsgUpdateService {
	return &MsgUpdateService{
		Creator:  creator,
		Index:    index,
		Name:     name,
		Url:      url,
		Class:    class,
		IsActive: isActive,
	}
}

func (msg *MsgUpdateService) Route() string {
	return RouterKey
}

func (msg *MsgUpdateService) Type() string {
	return "UpdateService"
}

func (msg *MsgUpdateService) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateService) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateService) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	isValid := validateClass(msg.Class)
	if !isValid {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid class (%s)", msg.Class)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteService{}

func NewMsgDeleteService(creator string, index string) *MsgDeleteService {
	return &MsgDeleteService{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteService) Route() string {
	return RouterKey
}

func (msg *MsgDeleteService) Type() string {
	return "DeleteService"
}

func (msg *MsgDeleteService) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteService) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteService) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

func validateClass(class string) bool {
	switch class {
	case PROVIDER, VIEW:
		return true
	default:
		return false
	}

}
