// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateServiceUser } from "./types/medichain/tx";
import { MsgDeleteUser } from "./types/medichain/tx";
import { MsgDeleteSharing } from "./types/medichain/tx";
import { MsgUpdateUser } from "./types/medichain/tx";
import { MsgCreateUser } from "./types/medichain/tx";
import { MsgCreateService } from "./types/medichain/tx";
import { MsgRejectSharing } from "./types/medichain/tx";
import { MsgCreateSharing } from "./types/medichain/tx";
import { MsgUpdateServiceUser } from "./types/medichain/tx";
import { MsgDeleteServiceUser } from "./types/medichain/tx";
import { MsgUpdateService } from "./types/medichain/tx";
import { MsgDeleteService } from "./types/medichain/tx";
import { MsgAcceptSharing } from "./types/medichain/tx";
import { MsgUpdateSharing } from "./types/medichain/tx";
const types = [
    ["/sota.medichain.medichain.MsgCreateServiceUser", MsgCreateServiceUser],
    ["/sota.medichain.medichain.MsgDeleteUser", MsgDeleteUser],
    ["/sota.medichain.medichain.MsgDeleteSharing", MsgDeleteSharing],
    ["/sota.medichain.medichain.MsgUpdateUser", MsgUpdateUser],
    ["/sota.medichain.medichain.MsgCreateUser", MsgCreateUser],
    ["/sota.medichain.medichain.MsgCreateService", MsgCreateService],
    ["/sota.medichain.medichain.MsgRejectSharing", MsgRejectSharing],
    ["/sota.medichain.medichain.MsgCreateSharing", MsgCreateSharing],
    ["/sota.medichain.medichain.MsgUpdateServiceUser", MsgUpdateServiceUser],
    ["/sota.medichain.medichain.MsgDeleteServiceUser", MsgDeleteServiceUser],
    ["/sota.medichain.medichain.MsgUpdateService", MsgUpdateService],
    ["/sota.medichain.medichain.MsgDeleteService", MsgDeleteService],
    ["/sota.medichain.medichain.MsgAcceptSharing", MsgAcceptSharing],
    ["/sota.medichain.medichain.MsgUpdateSharing", MsgUpdateSharing],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateServiceUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateServiceUser", value: data }),
        msgDeleteUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteUser", value: data }),
        msgDeleteSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteSharing", value: data }),
        msgUpdateUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateUser", value: data }),
        msgCreateUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateUser", value: data }),
        msgCreateService: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateService", value: data }),
        msgRejectSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgRejectSharing", value: data }),
        msgCreateSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateSharing", value: data }),
        msgUpdateServiceUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateServiceUser", value: data }),
        msgDeleteServiceUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteServiceUser", value: data }),
        msgUpdateService: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateService", value: data }),
        msgDeleteService: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteService", value: data }),
        msgAcceptSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgAcceptSharing", value: data }),
        msgUpdateSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateSharing", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
