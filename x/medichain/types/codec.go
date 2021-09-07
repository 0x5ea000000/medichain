package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgRejectSharing{}, "medichain/RejectSharing", nil)

	cdc.RegisterConcrete(&MsgAcceptSharing{}, "medichain/AcceptSharing", nil)

	cdc.RegisterConcrete(&MsgCreateSharing{}, "medichain/CreateSharing", nil)
	cdc.RegisterConcrete(&MsgUpdateSharing{}, "medichain/UpdateSharing", nil)
	cdc.RegisterConcrete(&MsgDeleteSharing{}, "medichain/DeleteSharing", nil)

	cdc.RegisterConcrete(&MsgCreateServiceUser{}, "medichain/CreateServiceUser", nil)
	cdc.RegisterConcrete(&MsgUpdateServiceUser{}, "medichain/UpdateServiceUser", nil)
	cdc.RegisterConcrete(&MsgDeleteServiceUser{}, "medichain/DeleteServiceUser", nil)

	cdc.RegisterConcrete(&MsgCreateService{}, "medichain/CreateService", nil)
	cdc.RegisterConcrete(&MsgUpdateService{}, "medichain/UpdateService", nil)
	cdc.RegisterConcrete(&MsgDeleteService{}, "medichain/DeleteService", nil)

	cdc.RegisterConcrete(&MsgCreateUser{}, "medichain/CreateUser", nil)
	cdc.RegisterConcrete(&MsgUpdateUser{}, "medichain/UpdateUser", nil)
	cdc.RegisterConcrete(&MsgDeleteUser{}, "medichain/DeleteUser", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRejectSharing{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAcceptSharing{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSharing{},
		&MsgUpdateSharing{},
		&MsgDeleteSharing{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateServiceUser{},
		&MsgUpdateServiceUser{},
		&MsgDeleteServiceUser{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateService{},
		&MsgUpdateService{},
		&MsgDeleteService{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateUser{},
		&MsgUpdateUser{},
		&MsgDeleteUser{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
