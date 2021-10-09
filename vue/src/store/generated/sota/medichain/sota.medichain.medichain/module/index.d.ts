import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateAdmin } from "./types/medichain/tx";
import { MsgUpdateAdmin } from "./types/medichain/tx";
import { MsgCreateSharing } from "./types/medichain/tx";
import { MsgUpdateUser } from "./types/medichain/tx";
import { MsgCreateServiceUserBatch } from "./types/medichain/tx";
import { MsgUpdateSharing } from "./types/medichain/tx";
import { MsgCreateServiceUser } from "./types/medichain/tx";
import { MsgDeleteSharing } from "./types/medichain/tx";
import { MsgDeleteAdmin } from "./types/medichain/tx";
import { MsgUpdateService } from "./types/medichain/tx";
import { MsgBanUser } from "./types/medichain/tx";
import { MsgDeleteService } from "./types/medichain/tx";
import { MsgCreateUser } from "./types/medichain/tx";
import { MsgUpdateServiceUser } from "./types/medichain/tx";
import { MsgCreateService } from "./types/medichain/tx";
import { MsgDeleteSharingBatch } from "./types/medichain/tx";
import { MsgUnbanUser } from "./types/medichain/tx";
import { MsgAcceptSharing } from "./types/medichain/tx";
import { MsgDeleteServiceUser } from "./types/medichain/tx";
import { MsgRejectSharing } from "./types/medichain/tx";
import { MsgCreateSharingBatch } from "./types/medichain/tx";
import { MsgDeleteUser } from "./types/medichain/tx";
import { MsgUpdateSharingStatusBatch } from "./types/medichain/tx";
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
    msgCreateAdmin: (data: MsgCreateAdmin) => EncodeObject;
    msgUpdateAdmin: (data: MsgUpdateAdmin) => EncodeObject;
    msgCreateSharing: (data: MsgCreateSharing) => EncodeObject;
    msgUpdateUser: (data: MsgUpdateUser) => EncodeObject;
    msgCreateServiceUserBatch: (data: MsgCreateServiceUserBatch) => EncodeObject;
    msgUpdateSharing: (data: MsgUpdateSharing) => EncodeObject;
    msgCreateServiceUser: (data: MsgCreateServiceUser) => EncodeObject;
    msgDeleteSharing: (data: MsgDeleteSharing) => EncodeObject;
    msgDeleteAdmin: (data: MsgDeleteAdmin) => EncodeObject;
    msgUpdateService: (data: MsgUpdateService) => EncodeObject;
    msgBanUser: (data: MsgBanUser) => EncodeObject;
    msgDeleteService: (data: MsgDeleteService) => EncodeObject;
    msgCreateUser: (data: MsgCreateUser) => EncodeObject;
    msgUpdateServiceUser: (data: MsgUpdateServiceUser) => EncodeObject;
    msgCreateService: (data: MsgCreateService) => EncodeObject;
    msgDeleteSharingBatch: (data: MsgDeleteSharingBatch) => EncodeObject;
    msgUnbanUser: (data: MsgUnbanUser) => EncodeObject;
    msgAcceptSharing: (data: MsgAcceptSharing) => EncodeObject;
    msgDeleteServiceUser: (data: MsgDeleteServiceUser) => EncodeObject;
    msgRejectSharing: (data: MsgRejectSharing) => EncodeObject;
    msgCreateSharingBatch: (data: MsgCreateSharingBatch) => EncodeObject;
    msgDeleteUser: (data: MsgDeleteUser) => EncodeObject;
    msgUpdateSharingStatusBatch: (data: MsgUpdateSharingStatusBatch) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
