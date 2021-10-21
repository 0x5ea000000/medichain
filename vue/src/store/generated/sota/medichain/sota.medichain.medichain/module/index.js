// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSharingBatch } from "./types/medichain/tx";
import { MsgUpdateUser } from "./types/medichain/tx";
import { MsgDeleteUser } from "./types/medichain/tx";
import { MsgCreateServiceUser } from "./types/medichain/tx";
import { MsgDeleteSharingBatch } from "./types/medichain/tx";
import { MsgUpdateAdmin } from "./types/medichain/tx";
import { MsgUpdateSharingStatusBatch } from "./types/medichain/tx";
import { MsgCreateSharing } from "./types/medichain/tx";
import { MsgUnbanUser } from "./types/medichain/tx";
import { MsgUpdateServiceUser } from "./types/medichain/tx";
import { MsgRejectSharing } from "./types/medichain/tx";
import { MsgCreateUser } from "./types/medichain/tx";
import { MsgDeleteSharing } from "./types/medichain/tx";
import { MsgDeleteServiceUser } from "./types/medichain/tx";
import { MsgCreateService } from "./types/medichain/tx";
import { MsgCreateServiceUserBatch } from "./types/medichain/tx";
import { MsgUpdateService } from "./types/medichain/tx";
import { MsgDeleteService } from "./types/medichain/tx";
import { MsgBanUser } from "./types/medichain/tx";
import { MsgCreateAdmin } from "./types/medichain/tx";
import { MsgUpdateSharing } from "./types/medichain/tx";
import { MsgAcceptSharing } from "./types/medichain/tx";
import { MsgDeleteAdmin } from "./types/medichain/tx";
const types = [
    ["/sota.medichain.medichain.MsgCreateSharingBatch", MsgCreateSharingBatch],
    ["/sota.medichain.medichain.MsgUpdateUser", MsgUpdateUser],
    ["/sota.medichain.medichain.MsgDeleteUser", MsgDeleteUser],
    ["/sota.medichain.medichain.MsgCreateServiceUser", MsgCreateServiceUser],
    ["/sota.medichain.medichain.MsgDeleteSharingBatch", MsgDeleteSharingBatch],
    ["/sota.medichain.medichain.MsgUpdateAdmin", MsgUpdateAdmin],
    ["/sota.medichain.medichain.MsgUpdateSharingStatusBatch", MsgUpdateSharingStatusBatch],
    ["/sota.medichain.medichain.MsgCreateSharing", MsgCreateSharing],
    ["/sota.medichain.medichain.MsgUnbanUser", MsgUnbanUser],
    ["/sota.medichain.medichain.MsgUpdateServiceUser", MsgUpdateServiceUser],
    ["/sota.medichain.medichain.MsgRejectSharing", MsgRejectSharing],
    ["/sota.medichain.medichain.MsgCreateUser", MsgCreateUser],
    ["/sota.medichain.medichain.MsgDeleteSharing", MsgDeleteSharing],
    ["/sota.medichain.medichain.MsgDeleteServiceUser", MsgDeleteServiceUser],
    ["/sota.medichain.medichain.MsgCreateService", MsgCreateService],
    ["/sota.medichain.medichain.MsgCreateServiceUserBatch", MsgCreateServiceUserBatch],
    ["/sota.medichain.medichain.MsgUpdateService", MsgUpdateService],
    ["/sota.medichain.medichain.MsgDeleteService", MsgDeleteService],
    ["/sota.medichain.medichain.MsgBanUser", MsgBanUser],
    ["/sota.medichain.medichain.MsgCreateAdmin", MsgCreateAdmin],
    ["/sota.medichain.medichain.MsgUpdateSharing", MsgUpdateSharing],
    ["/sota.medichain.medichain.MsgAcceptSharing", MsgAcceptSharing],
    ["/sota.medichain.medichain.MsgDeleteAdmin", MsgDeleteAdmin],
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
        msgCreateSharingBatch: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateSharingBatch", value: data }),
        msgUpdateUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateUser", value: data }),
        msgDeleteUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteUser", value: data }),
        msgCreateServiceUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateServiceUser", value: data }),
        msgDeleteSharingBatch: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteSharingBatch", value: data }),
        msgUpdateAdmin: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateAdmin", value: data }),
        msgUpdateSharingStatusBatch: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateSharingStatusBatch", value: data }),
        msgCreateSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateSharing", value: data }),
        msgUnbanUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUnbanUser", value: data }),
        msgUpdateServiceUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateServiceUser", value: data }),
        msgRejectSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgRejectSharing", value: data }),
        msgCreateUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateUser", value: data }),
        msgDeleteSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteSharing", value: data }),
        msgDeleteServiceUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteServiceUser", value: data }),
        msgCreateService: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateService", value: data }),
        msgCreateServiceUserBatch: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateServiceUserBatch", value: data }),
        msgUpdateService: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateService", value: data }),
        msgDeleteService: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteService", value: data }),
        msgBanUser: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgBanUser", value: data }),
        msgCreateAdmin: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgCreateAdmin", value: data }),
        msgUpdateSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateSharing", value: data }),
        msgAcceptSharing: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgAcceptSharing", value: data }),
        msgDeleteAdmin: (data) => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteAdmin", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
