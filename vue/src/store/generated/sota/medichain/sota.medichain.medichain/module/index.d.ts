import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUnbanUser } from "./types/medichain/tx";
import { MsgUpdateService } from "./types/medichain/tx";
import { MsgCreateServiceUserBatch } from "./types/medichain/tx";
import { MsgUpdateServiceUser } from "./types/medichain/tx";
import { MsgDeleteServiceUser } from "./types/medichain/tx";
import { MsgCreateUser } from "./types/medichain/tx";
import { MsgBanUser } from "./types/medichain/tx";
import { MsgCreateSharing } from "./types/medichain/tx";
import { MsgUpdateSharing } from "./types/medichain/tx";
import { MsgUpdateSharingStatusBatch } from "./types/medichain/tx";
import { MsgDeleteService } from "./types/medichain/tx";
import { MsgAcceptSharing } from "./types/medichain/tx";
import { MsgDeleteUser } from "./types/medichain/tx";
import { MsgDeleteAdmin } from "./types/medichain/tx";
import { MsgDeleteSharingBatch } from "./types/medichain/tx";
import { MsgDeleteSharing } from "./types/medichain/tx";
import { MsgUpdateAdmin } from "./types/medichain/tx";
import { MsgUpdateUser } from "./types/medichain/tx";
import { MsgCreateServiceUser } from "./types/medichain/tx";
import { MsgRejectSharing } from "./types/medichain/tx";
import { MsgCreateSharingBatch } from "./types/medichain/tx";
import { MsgCreateAdmin } from "./types/medichain/tx";
import { MsgCreateService } from "./types/medichain/tx";
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
    msgUnbanUser: (data: MsgUnbanUser) => EncodeObject;
    msgUpdateService: (data: MsgUpdateService) => EncodeObject;
    msgCreateServiceUserBatch: (data: MsgCreateServiceUserBatch) => EncodeObject;
    msgUpdateServiceUser: (data: MsgUpdateServiceUser) => EncodeObject;
    msgDeleteServiceUser: (data: MsgDeleteServiceUser) => EncodeObject;
    msgCreateUser: (data: MsgCreateUser) => EncodeObject;
    msgBanUser: (data: MsgBanUser) => EncodeObject;
    msgCreateSharing: (data: MsgCreateSharing) => EncodeObject;
    msgUpdateSharing: (data: MsgUpdateSharing) => EncodeObject;
    msgUpdateSharingStatusBatch: (data: MsgUpdateSharingStatusBatch) => EncodeObject;
    msgDeleteService: (data: MsgDeleteService) => EncodeObject;
    msgAcceptSharing: (data: MsgAcceptSharing) => EncodeObject;
    msgDeleteUser: (data: MsgDeleteUser) => EncodeObject;
    msgDeleteAdmin: (data: MsgDeleteAdmin) => EncodeObject;
    msgDeleteSharingBatch: (data: MsgDeleteSharingBatch) => EncodeObject;
    msgDeleteSharing: (data: MsgDeleteSharing) => EncodeObject;
    msgUpdateAdmin: (data: MsgUpdateAdmin) => EncodeObject;
    msgUpdateUser: (data: MsgUpdateUser) => EncodeObject;
    msgCreateServiceUser: (data: MsgCreateServiceUser) => EncodeObject;
    msgRejectSharing: (data: MsgRejectSharing) => EncodeObject;
    msgCreateSharingBatch: (data: MsgCreateSharingBatch) => EncodeObject;
    msgCreateAdmin: (data: MsgCreateAdmin) => EncodeObject;
    msgCreateService: (data: MsgCreateService) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
