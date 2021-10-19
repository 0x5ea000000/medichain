import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateServiceUserBatch } from "./types/medichain/tx";
import { MsgRejectSharing } from "./types/medichain/tx";
import { MsgCreateSharing } from "./types/medichain/tx";
import { MsgAcceptSharing } from "./types/medichain/tx";
import { MsgDeleteSharingBatch } from "./types/medichain/tx";
import { MsgDeleteSharing } from "./types/medichain/tx";
import { MsgCreateService } from "./types/medichain/tx";
import { MsgBanUser } from "./types/medichain/tx";
import { MsgDeleteService } from "./types/medichain/tx";
import { MsgCreateServiceUser } from "./types/medichain/tx";
import { MsgUpdateAdmin } from "./types/medichain/tx";
import { MsgCreateUser } from "./types/medichain/tx";
import { MsgDeleteUser } from "./types/medichain/tx";
import { MsgUpdateSharing } from "./types/medichain/tx";
import { MsgCreateSharingBatch } from "./types/medichain/tx";
import { MsgDeleteAdmin } from "./types/medichain/tx";
import { MsgUpdateServiceUser } from "./types/medichain/tx";
import { MsgUpdateSharingStatusBatch } from "./types/medichain/tx";
import { MsgDeleteServiceUser } from "./types/medichain/tx";
import { MsgUpdateUser } from "./types/medichain/tx";
import { MsgCreateAdmin } from "./types/medichain/tx";
import { MsgUnbanUser } from "./types/medichain/tx";
import { MsgUpdateService } from "./types/medichain/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateServiceUserBatch: (data: MsgCreateServiceUserBatch) => EncodeObject;
    msgRejectSharing: (data: MsgRejectSharing) => EncodeObject;
    msgCreateSharing: (data: MsgCreateSharing) => EncodeObject;
    msgAcceptSharing: (data: MsgAcceptSharing) => EncodeObject;
    msgDeleteSharingBatch: (data: MsgDeleteSharingBatch) => EncodeObject;
    msgDeleteSharing: (data: MsgDeleteSharing) => EncodeObject;
    msgCreateService: (data: MsgCreateService) => EncodeObject;
    msgBanUser: (data: MsgBanUser) => EncodeObject;
    msgDeleteService: (data: MsgDeleteService) => EncodeObject;
    msgCreateServiceUser: (data: MsgCreateServiceUser) => EncodeObject;
    msgUpdateAdmin: (data: MsgUpdateAdmin) => EncodeObject;
    msgCreateUser: (data: MsgCreateUser) => EncodeObject;
    msgDeleteUser: (data: MsgDeleteUser) => EncodeObject;
    msgUpdateSharing: (data: MsgUpdateSharing) => EncodeObject;
    msgCreateSharingBatch: (data: MsgCreateSharingBatch) => EncodeObject;
    msgDeleteAdmin: (data: MsgDeleteAdmin) => EncodeObject;
    msgUpdateServiceUser: (data: MsgUpdateServiceUser) => EncodeObject;
    msgUpdateSharingStatusBatch: (data: MsgUpdateSharingStatusBatch) => EncodeObject;
    msgDeleteServiceUser: (data: MsgDeleteServiceUser) => EncodeObject;
    msgUpdateUser: (data: MsgUpdateUser) => EncodeObject;
    msgCreateAdmin: (data: MsgCreateAdmin) => EncodeObject;
    msgUnbanUser: (data: MsgUnbanUser) => EncodeObject;
    msgUpdateService: (data: MsgUpdateService) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
