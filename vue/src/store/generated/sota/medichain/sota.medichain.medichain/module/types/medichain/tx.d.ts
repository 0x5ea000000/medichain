import { Reader, Writer } from 'protobufjs/minimal';
import { Sharing } from '../medichain/sharing';
import { ServiceUser } from '../medichain/service_user';
import { Service } from '../medichain/service';
import { User } from '../medichain/user';
export declare const protobufPackage = "sota.medichain.medichain";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgDeleteSharingBatch {
    creator: string;
    indexs: string[];
}
export interface MsgDeleteSharingBatchResponse {
}
export interface MsgUpdateSharingStatusBatch {
    creator: string;
    indexs: string[];
    status: string;
}
export interface MsgUpdateSharingStatusBatchResponse {
}
export interface MsgCreateSharingBatch {
    creator: string;
    viewerId: string;
    status: string;
    ownerIds: string[];
}
export interface MsgCreateSharingBatchResponse {
}
export interface MsgCreateAdmin {
    creator: string;
    pubKey: string;
}
export interface MsgCreateAdminResponse {
    id: number;
}
export interface MsgUpdateAdmin {
    creator: string;
    id: number;
    pubKey: string;
}
export interface MsgUpdateAdminResponse {
}
export interface MsgDeleteAdmin {
    creator: string;
    id: number;
}
export interface MsgDeleteAdminResponse {
}
export interface MsgRejectSharing {
    creator: string;
    sharingId: string;
}
export interface MsgRejectSharingResponse {
}
export interface MsgAcceptSharing {
    creator: string;
    sharingId: string;
}
export interface MsgAcceptSharingResponse {
}
export interface MsgCreateSharing {
    creator: string;
    ownerId: string;
    viewerId: string;
    status: string;
}
export interface MsgCreateSharingResponse {
    Sharing: Sharing | undefined;
}
export interface MsgUpdateSharing {
    creator: string;
    index: string;
    ownerId: string;
    viewerId: string;
    status: string;
}
export interface MsgUpdateSharingResponse {
    Sharing: Sharing | undefined;
}
export interface MsgDeleteSharing {
    creator: string;
    index: string;
}
export interface MsgDeleteSharingResponse {
}
export interface MsgCreateServiceUser {
    creator: string;
    serviceId: string;
    userId: string;
    serviceUserId: string;
    isActive: boolean;
}
export interface MsgCreateServiceUserResponse {
    ServiceUser: ServiceUser | undefined;
}
export interface MsgUpdateServiceUser {
    creator: string;
    index: string;
    serviceId: string;
    userId: string;
    serviceUserId: string;
    isActive: boolean;
}
export interface MsgUpdateServiceUserResponse {
    ServiceUser: ServiceUser | undefined;
}
export interface MsgDeleteServiceUser {
    creator: string;
    index: string;
}
export interface MsgDeleteServiceUserResponse {
}
export interface MsgCreateService {
    creator: string;
    name: string;
    url: string;
    pubKey: string;
    isActive: boolean;
}
export interface MsgCreateServiceResponse {
    Service: Service | undefined;
}
export interface MsgUpdateService {
    creator: string;
    index: string;
    name: string;
    url: string;
    pubKey: string;
    isActive: boolean;
}
export interface MsgUpdateServiceResponse {
    Service: Service | undefined;
}
export interface MsgDeleteService {
    creator: string;
    index: string;
}
export interface MsgDeleteServiceResponse {
}
export interface MsgCreateUser {
    creator: string;
    pubKey: string;
    isActive: boolean;
}
export interface MsgCreateUserResponse {
    User: User | undefined;
}
export interface MsgUpdateUser {
    creator: string;
    index: string;
    pubKey: string;
    isActive: boolean;
}
export interface MsgUpdateUserResponse {
    User: User | undefined;
}
export interface MsgDeleteUser {
    creator: string;
    index: string;
}
export interface MsgDeleteUserResponse {
}
export declare const MsgDeleteSharingBatch: {
    encode(message: MsgDeleteSharingBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSharingBatch;
    fromJSON(object: any): MsgDeleteSharingBatch;
    toJSON(message: MsgDeleteSharingBatch): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSharingBatch>): MsgDeleteSharingBatch;
};
export declare const MsgDeleteSharingBatchResponse: {
    encode(_: MsgDeleteSharingBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSharingBatchResponse;
    fromJSON(_: any): MsgDeleteSharingBatchResponse;
    toJSON(_: MsgDeleteSharingBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSharingBatchResponse>): MsgDeleteSharingBatchResponse;
};
export declare const MsgUpdateSharingStatusBatch: {
    encode(message: MsgUpdateSharingStatusBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharingStatusBatch;
    fromJSON(object: any): MsgUpdateSharingStatusBatch;
    toJSON(message: MsgUpdateSharingStatusBatch): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSharingStatusBatch>): MsgUpdateSharingStatusBatch;
};
export declare const MsgUpdateSharingStatusBatchResponse: {
    encode(_: MsgUpdateSharingStatusBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharingStatusBatchResponse;
    fromJSON(_: any): MsgUpdateSharingStatusBatchResponse;
    toJSON(_: MsgUpdateSharingStatusBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSharingStatusBatchResponse>): MsgUpdateSharingStatusBatchResponse;
};
export declare const MsgCreateSharingBatch: {
    encode(message: MsgCreateSharingBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSharingBatch;
    fromJSON(object: any): MsgCreateSharingBatch;
    toJSON(message: MsgCreateSharingBatch): unknown;
    fromPartial(object: DeepPartial<MsgCreateSharingBatch>): MsgCreateSharingBatch;
};
export declare const MsgCreateSharingBatchResponse: {
    encode(_: MsgCreateSharingBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSharingBatchResponse;
    fromJSON(_: any): MsgCreateSharingBatchResponse;
    toJSON(_: MsgCreateSharingBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateSharingBatchResponse>): MsgCreateSharingBatchResponse;
};
export declare const MsgCreateAdmin: {
    encode(message: MsgCreateAdmin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAdmin;
    fromJSON(object: any): MsgCreateAdmin;
    toJSON(message: MsgCreateAdmin): unknown;
    fromPartial(object: DeepPartial<MsgCreateAdmin>): MsgCreateAdmin;
};
export declare const MsgCreateAdminResponse: {
    encode(message: MsgCreateAdminResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAdminResponse;
    fromJSON(object: any): MsgCreateAdminResponse;
    toJSON(message: MsgCreateAdminResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateAdminResponse>): MsgCreateAdminResponse;
};
export declare const MsgUpdateAdmin: {
    encode(message: MsgUpdateAdmin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAdmin;
    fromJSON(object: any): MsgUpdateAdmin;
    toJSON(message: MsgUpdateAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAdmin>): MsgUpdateAdmin;
};
export declare const MsgUpdateAdminResponse: {
    encode(_: MsgUpdateAdminResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAdminResponse;
    fromJSON(_: any): MsgUpdateAdminResponse;
    toJSON(_: MsgUpdateAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse;
};
export declare const MsgDeleteAdmin: {
    encode(message: MsgDeleteAdmin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAdmin;
    fromJSON(object: any): MsgDeleteAdmin;
    toJSON(message: MsgDeleteAdmin): unknown;
    fromPartial(object: DeepPartial<MsgDeleteAdmin>): MsgDeleteAdmin;
};
export declare const MsgDeleteAdminResponse: {
    encode(_: MsgDeleteAdminResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAdminResponse;
    fromJSON(_: any): MsgDeleteAdminResponse;
    toJSON(_: MsgDeleteAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteAdminResponse>): MsgDeleteAdminResponse;
};
export declare const MsgRejectSharing: {
    encode(message: MsgRejectSharing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRejectSharing;
    fromJSON(object: any): MsgRejectSharing;
    toJSON(message: MsgRejectSharing): unknown;
    fromPartial(object: DeepPartial<MsgRejectSharing>): MsgRejectSharing;
};
export declare const MsgRejectSharingResponse: {
    encode(_: MsgRejectSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRejectSharingResponse;
    fromJSON(_: any): MsgRejectSharingResponse;
    toJSON(_: MsgRejectSharingResponse): unknown;
    fromPartial(_: DeepPartial<MsgRejectSharingResponse>): MsgRejectSharingResponse;
};
export declare const MsgAcceptSharing: {
    encode(message: MsgAcceptSharing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAcceptSharing;
    fromJSON(object: any): MsgAcceptSharing;
    toJSON(message: MsgAcceptSharing): unknown;
    fromPartial(object: DeepPartial<MsgAcceptSharing>): MsgAcceptSharing;
};
export declare const MsgAcceptSharingResponse: {
    encode(_: MsgAcceptSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAcceptSharingResponse;
    fromJSON(_: any): MsgAcceptSharingResponse;
    toJSON(_: MsgAcceptSharingResponse): unknown;
    fromPartial(_: DeepPartial<MsgAcceptSharingResponse>): MsgAcceptSharingResponse;
};
export declare const MsgCreateSharing: {
    encode(message: MsgCreateSharing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSharing;
    fromJSON(object: any): MsgCreateSharing;
    toJSON(message: MsgCreateSharing): unknown;
    fromPartial(object: DeepPartial<MsgCreateSharing>): MsgCreateSharing;
};
export declare const MsgCreateSharingResponse: {
    encode(message: MsgCreateSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSharingResponse;
    fromJSON(object: any): MsgCreateSharingResponse;
    toJSON(message: MsgCreateSharingResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSharingResponse>): MsgCreateSharingResponse;
};
export declare const MsgUpdateSharing: {
    encode(message: MsgUpdateSharing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharing;
    fromJSON(object: any): MsgUpdateSharing;
    toJSON(message: MsgUpdateSharing): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSharing>): MsgUpdateSharing;
};
export declare const MsgUpdateSharingResponse: {
    encode(message: MsgUpdateSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharingResponse;
    fromJSON(object: any): MsgUpdateSharingResponse;
    toJSON(message: MsgUpdateSharingResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSharingResponse>): MsgUpdateSharingResponse;
};
export declare const MsgDeleteSharing: {
    encode(message: MsgDeleteSharing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSharing;
    fromJSON(object: any): MsgDeleteSharing;
    toJSON(message: MsgDeleteSharing): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSharing>): MsgDeleteSharing;
};
export declare const MsgDeleteSharingResponse: {
    encode(_: MsgDeleteSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSharingResponse;
    fromJSON(_: any): MsgDeleteSharingResponse;
    toJSON(_: MsgDeleteSharingResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSharingResponse>): MsgDeleteSharingResponse;
};
export declare const MsgCreateServiceUser: {
    encode(message: MsgCreateServiceUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceUser;
    fromJSON(object: any): MsgCreateServiceUser;
    toJSON(message: MsgCreateServiceUser): unknown;
    fromPartial(object: DeepPartial<MsgCreateServiceUser>): MsgCreateServiceUser;
};
export declare const MsgCreateServiceUserResponse: {
    encode(message: MsgCreateServiceUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceUserResponse;
    fromJSON(object: any): MsgCreateServiceUserResponse;
    toJSON(message: MsgCreateServiceUserResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateServiceUserResponse>): MsgCreateServiceUserResponse;
};
export declare const MsgUpdateServiceUser: {
    encode(message: MsgUpdateServiceUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceUser;
    fromJSON(object: any): MsgUpdateServiceUser;
    toJSON(message: MsgUpdateServiceUser): unknown;
    fromPartial(object: DeepPartial<MsgUpdateServiceUser>): MsgUpdateServiceUser;
};
export declare const MsgUpdateServiceUserResponse: {
    encode(message: MsgUpdateServiceUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceUserResponse;
    fromJSON(object: any): MsgUpdateServiceUserResponse;
    toJSON(message: MsgUpdateServiceUserResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateServiceUserResponse>): MsgUpdateServiceUserResponse;
};
export declare const MsgDeleteServiceUser: {
    encode(message: MsgDeleteServiceUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteServiceUser;
    fromJSON(object: any): MsgDeleteServiceUser;
    toJSON(message: MsgDeleteServiceUser): unknown;
    fromPartial(object: DeepPartial<MsgDeleteServiceUser>): MsgDeleteServiceUser;
};
export declare const MsgDeleteServiceUserResponse: {
    encode(_: MsgDeleteServiceUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteServiceUserResponse;
    fromJSON(_: any): MsgDeleteServiceUserResponse;
    toJSON(_: MsgDeleteServiceUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteServiceUserResponse>): MsgDeleteServiceUserResponse;
};
export declare const MsgCreateService: {
    encode(message: MsgCreateService, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateService;
    fromJSON(object: any): MsgCreateService;
    toJSON(message: MsgCreateService): unknown;
    fromPartial(object: DeepPartial<MsgCreateService>): MsgCreateService;
};
export declare const MsgCreateServiceResponse: {
    encode(message: MsgCreateServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceResponse;
    fromJSON(object: any): MsgCreateServiceResponse;
    toJSON(message: MsgCreateServiceResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateServiceResponse>): MsgCreateServiceResponse;
};
export declare const MsgUpdateService: {
    encode(message: MsgUpdateService, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateService;
    fromJSON(object: any): MsgUpdateService;
    toJSON(message: MsgUpdateService): unknown;
    fromPartial(object: DeepPartial<MsgUpdateService>): MsgUpdateService;
};
export declare const MsgUpdateServiceResponse: {
    encode(message: MsgUpdateServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceResponse;
    fromJSON(object: any): MsgUpdateServiceResponse;
    toJSON(message: MsgUpdateServiceResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateServiceResponse>): MsgUpdateServiceResponse;
};
export declare const MsgDeleteService: {
    encode(message: MsgDeleteService, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteService;
    fromJSON(object: any): MsgDeleteService;
    toJSON(message: MsgDeleteService): unknown;
    fromPartial(object: DeepPartial<MsgDeleteService>): MsgDeleteService;
};
export declare const MsgDeleteServiceResponse: {
    encode(_: MsgDeleteServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteServiceResponse;
    fromJSON(_: any): MsgDeleteServiceResponse;
    toJSON(_: MsgDeleteServiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteServiceResponse>): MsgDeleteServiceResponse;
};
export declare const MsgCreateUser: {
    encode(message: MsgCreateUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUser;
    fromJSON(object: any): MsgCreateUser;
    toJSON(message: MsgCreateUser): unknown;
    fromPartial(object: DeepPartial<MsgCreateUser>): MsgCreateUser;
};
export declare const MsgCreateUserResponse: {
    encode(message: MsgCreateUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUserResponse;
    fromJSON(object: any): MsgCreateUserResponse;
    toJSON(message: MsgCreateUserResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateUserResponse>): MsgCreateUserResponse;
};
export declare const MsgUpdateUser: {
    encode(message: MsgUpdateUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUser;
    fromJSON(object: any): MsgUpdateUser;
    toJSON(message: MsgUpdateUser): unknown;
    fromPartial(object: DeepPartial<MsgUpdateUser>): MsgUpdateUser;
};
export declare const MsgUpdateUserResponse: {
    encode(message: MsgUpdateUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserResponse;
    fromJSON(object: any): MsgUpdateUserResponse;
    toJSON(message: MsgUpdateUserResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateUserResponse>): MsgUpdateUserResponse;
};
export declare const MsgDeleteUser: {
    encode(message: MsgDeleteUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUser;
    fromJSON(object: any): MsgDeleteUser;
    toJSON(message: MsgDeleteUser): unknown;
    fromPartial(object: DeepPartial<MsgDeleteUser>): MsgDeleteUser;
};
export declare const MsgDeleteUserResponse: {
    encode(_: MsgDeleteUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserResponse;
    fromJSON(_: any): MsgDeleteUserResponse;
    toJSON(_: MsgDeleteUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteUserResponse>): MsgDeleteUserResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteSharingBatch(request: MsgDeleteSharingBatch): Promise<MsgDeleteSharingBatchResponse>;
    UpdateSharingStatusBatch(request: MsgUpdateSharingStatusBatch): Promise<MsgUpdateSharingStatusBatchResponse>;
    CreateSharingBatch(request: MsgCreateSharingBatch): Promise<MsgCreateSharingBatchResponse>;
    CreateAdmin(request: MsgCreateAdmin): Promise<MsgCreateAdminResponse>;
    UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    DeleteAdmin(request: MsgDeleteAdmin): Promise<MsgDeleteAdminResponse>;
    RejectSharing(request: MsgRejectSharing): Promise<MsgRejectSharingResponse>;
    AcceptSharing(request: MsgAcceptSharing): Promise<MsgAcceptSharingResponse>;
    CreateSharing(request: MsgCreateSharing): Promise<MsgCreateSharingResponse>;
    UpdateSharing(request: MsgUpdateSharing): Promise<MsgUpdateSharingResponse>;
    DeleteSharing(request: MsgDeleteSharing): Promise<MsgDeleteSharingResponse>;
    CreateServiceUser(request: MsgCreateServiceUser): Promise<MsgCreateServiceUserResponse>;
    UpdateServiceUser(request: MsgUpdateServiceUser): Promise<MsgUpdateServiceUserResponse>;
    DeleteServiceUser(request: MsgDeleteServiceUser): Promise<MsgDeleteServiceUserResponse>;
    CreateService(request: MsgCreateService): Promise<MsgCreateServiceResponse>;
    UpdateService(request: MsgUpdateService): Promise<MsgUpdateServiceResponse>;
    DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>;
    CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
    UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>;
    DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    DeleteSharingBatch(request: MsgDeleteSharingBatch): Promise<MsgDeleteSharingBatchResponse>;
    UpdateSharingStatusBatch(request: MsgUpdateSharingStatusBatch): Promise<MsgUpdateSharingStatusBatchResponse>;
    CreateSharingBatch(request: MsgCreateSharingBatch): Promise<MsgCreateSharingBatchResponse>;
    CreateAdmin(request: MsgCreateAdmin): Promise<MsgCreateAdminResponse>;
    UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    DeleteAdmin(request: MsgDeleteAdmin): Promise<MsgDeleteAdminResponse>;
    RejectSharing(request: MsgRejectSharing): Promise<MsgRejectSharingResponse>;
    AcceptSharing(request: MsgAcceptSharing): Promise<MsgAcceptSharingResponse>;
    CreateSharing(request: MsgCreateSharing): Promise<MsgCreateSharingResponse>;
    UpdateSharing(request: MsgUpdateSharing): Promise<MsgUpdateSharingResponse>;
    DeleteSharing(request: MsgDeleteSharing): Promise<MsgDeleteSharingResponse>;
    CreateServiceUser(request: MsgCreateServiceUser): Promise<MsgCreateServiceUserResponse>;
    UpdateServiceUser(request: MsgUpdateServiceUser): Promise<MsgUpdateServiceUserResponse>;
    DeleteServiceUser(request: MsgDeleteServiceUser): Promise<MsgDeleteServiceUserResponse>;
    CreateService(request: MsgCreateService): Promise<MsgCreateServiceResponse>;
    UpdateService(request: MsgUpdateService): Promise<MsgUpdateServiceResponse>;
    DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>;
    CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
    UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>;
    DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
