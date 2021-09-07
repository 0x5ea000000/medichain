import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "sota.medichain.medichain";
/** this line is used by starport scaffolding # proto/tx/message */
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
}
export interface MsgUpdateSharing {
    creator: string;
    index: string;
    ownerId: string;
    viewerId: string;
    status: string;
}
export interface MsgUpdateSharingResponse {
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
    class: string;
    isActive: boolean;
}
export interface MsgCreateServiceResponse {
}
export interface MsgUpdateService {
    creator: string;
    index: string;
    name: string;
    url: string;
    class: string;
    isActive: boolean;
}
export interface MsgUpdateServiceResponse {
}
export interface MsgDeleteService {
    creator: string;
    index: string;
}
export interface MsgDeleteServiceResponse {
}
export interface MsgCreateUser {
    creator: string;
    address: string;
    isActive: boolean;
}
export interface MsgCreateUserResponse {
}
export interface MsgUpdateUser {
    creator: string;
    index: string;
    address: string;
    isActive: boolean;
}
export interface MsgUpdateUserResponse {
}
export interface MsgDeleteUser {
    creator: string;
    index: string;
}
export interface MsgDeleteUserResponse {
}
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
    encode(_: MsgCreateSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSharingResponse;
    fromJSON(_: any): MsgCreateSharingResponse;
    toJSON(_: MsgCreateSharingResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateSharingResponse>): MsgCreateSharingResponse;
};
export declare const MsgUpdateSharing: {
    encode(message: MsgUpdateSharing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharing;
    fromJSON(object: any): MsgUpdateSharing;
    toJSON(message: MsgUpdateSharing): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSharing>): MsgUpdateSharing;
};
export declare const MsgUpdateSharingResponse: {
    encode(_: MsgUpdateSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharingResponse;
    fromJSON(_: any): MsgUpdateSharingResponse;
    toJSON(_: MsgUpdateSharingResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSharingResponse>): MsgUpdateSharingResponse;
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
    encode(_: MsgCreateServiceUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceUserResponse;
    fromJSON(_: any): MsgCreateServiceUserResponse;
    toJSON(_: MsgCreateServiceUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateServiceUserResponse>): MsgCreateServiceUserResponse;
};
export declare const MsgUpdateServiceUser: {
    encode(message: MsgUpdateServiceUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceUser;
    fromJSON(object: any): MsgUpdateServiceUser;
    toJSON(message: MsgUpdateServiceUser): unknown;
    fromPartial(object: DeepPartial<MsgUpdateServiceUser>): MsgUpdateServiceUser;
};
export declare const MsgUpdateServiceUserResponse: {
    encode(_: MsgUpdateServiceUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceUserResponse;
    fromJSON(_: any): MsgUpdateServiceUserResponse;
    toJSON(_: MsgUpdateServiceUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateServiceUserResponse>): MsgUpdateServiceUserResponse;
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
    encode(_: MsgCreateServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceResponse;
    fromJSON(_: any): MsgCreateServiceResponse;
    toJSON(_: MsgCreateServiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateServiceResponse>): MsgCreateServiceResponse;
};
export declare const MsgUpdateService: {
    encode(message: MsgUpdateService, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateService;
    fromJSON(object: any): MsgUpdateService;
    toJSON(message: MsgUpdateService): unknown;
    fromPartial(object: DeepPartial<MsgUpdateService>): MsgUpdateService;
};
export declare const MsgUpdateServiceResponse: {
    encode(_: MsgUpdateServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceResponse;
    fromJSON(_: any): MsgUpdateServiceResponse;
    toJSON(_: MsgUpdateServiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateServiceResponse>): MsgUpdateServiceResponse;
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
    encode(_: MsgCreateUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUserResponse;
    fromJSON(_: any): MsgCreateUserResponse;
    toJSON(_: MsgCreateUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateUserResponse>): MsgCreateUserResponse;
};
export declare const MsgUpdateUser: {
    encode(message: MsgUpdateUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUser;
    fromJSON(object: any): MsgUpdateUser;
    toJSON(message: MsgUpdateUser): unknown;
    fromPartial(object: DeepPartial<MsgUpdateUser>): MsgUpdateUser;
};
export declare const MsgUpdateUserResponse: {
    encode(_: MsgUpdateUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserResponse;
    fromJSON(_: any): MsgUpdateUserResponse;
    toJSON(_: MsgUpdateUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateUserResponse>): MsgUpdateUserResponse;
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
