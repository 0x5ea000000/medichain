import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateSharing } from "./types/medichain/tx";
import { MsgDeleteSharing } from "./types/medichain/tx";
import { MsgCreateSharing } from "./types/medichain/tx";
import { MsgAcceptSharing } from "./types/medichain/tx";
import { MsgDeleteServiceUser } from "./types/medichain/tx";
import { MsgDeleteUser } from "./types/medichain/tx";
import { MsgDeleteService } from "./types/medichain/tx";
import { MsgCreateService } from "./types/medichain/tx";
import { MsgUpdateUser } from "./types/medichain/tx";
import { MsgUpdateServiceUser } from "./types/medichain/tx";
import { MsgUpdateService } from "./types/medichain/tx";
import { MsgCreateUser } from "./types/medichain/tx";
import { MsgCreateServiceUser } from "./types/medichain/tx";
import { MsgRejectSharing } from "./types/medichain/tx";
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
    msgUpdateSharing: (data: MsgUpdateSharing) => EncodeObject;
    msgDeleteSharing: (data: MsgDeleteSharing) => EncodeObject;
    msgCreateSharing: (data: MsgCreateSharing) => EncodeObject;
    msgAcceptSharing: (data: MsgAcceptSharing) => EncodeObject;
    msgDeleteServiceUser: (data: MsgDeleteServiceUser) => EncodeObject;
    msgDeleteUser: (data: MsgDeleteUser) => EncodeObject;
    msgDeleteService: (data: MsgDeleteService) => EncodeObject;
    msgCreateService: (data: MsgCreateService) => EncodeObject;
    msgUpdateUser: (data: MsgUpdateUser) => EncodeObject;
    msgUpdateServiceUser: (data: MsgUpdateServiceUser) => EncodeObject;
    msgUpdateService: (data: MsgUpdateService) => EncodeObject;
    msgCreateUser: (data: MsgCreateUser) => EncodeObject;
    msgCreateServiceUser: (data: MsgCreateServiceUser) => EncodeObject;
    msgRejectSharing: (data: MsgRejectSharing) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
