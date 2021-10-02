import { Reader, Writer } from 'protobufjs/minimal';
import { ServiceUser } from '../medichain/service_user';
import { Sharing } from '../medichain/sharing';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Service } from '../medichain/service';
import { User } from '../medichain/user';
export declare const protobufPackage = "sota.medichain.medichain";
/** this line is used by starport scaffolding # 3 */
export interface QueryUserServiceRequest {
    userId: string;
}
export interface QueryUserServiceResponse {
    ServiceUser: ServiceUser[];
}
export interface QueryCheckServiceUserRequest {
    serviceId: string;
    userId: string;
}
export interface QueryCheckServiceUserResponse {
    ServiceUser: ServiceUser | undefined;
}
export interface QueryCheckSharingRequest {
    ownerId: string;
    viewerId: string;
}
export interface QueryCheckSharingResponse {
    Sharing: Sharing | undefined;
    Owner: ServiceUser | undefined;
}
export interface QueryGetSharingRequest {
    index: string;
}
export interface QueryGetSharingResponse {
    Sharing: Sharing | undefined;
}
export interface QueryAllSharingRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSharingResponse {
    Sharing: Sharing[];
    pagination: PageResponse | undefined;
}
export interface QueryGetServiceUserRequest {
    index: string;
}
export interface QueryGetServiceUserResponse {
    ServiceUser: ServiceUser | undefined;
}
export interface QueryAllServiceUserRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllServiceUserResponse {
    ServiceUser: ServiceUser[];
    pagination: PageResponse | undefined;
}
export interface QueryGetServiceRequest {
    index: string;
}
export interface QueryGetServiceResponse {
    Service: Service | undefined;
}
export interface QueryAllServiceRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllServiceResponse {
    Service: Service[];
    pagination: PageResponse | undefined;
}
export interface QueryGetUserRequest {
    index: string;
}
export interface QueryGetUserResponse {
    User: User | undefined;
}
export interface QueryAllUserRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllUserResponse {
    User: User[];
    pagination: PageResponse | undefined;
}
export declare const QueryUserServiceRequest: {
    encode(message: QueryUserServiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryUserServiceRequest;
    fromJSON(object: any): QueryUserServiceRequest;
    toJSON(message: QueryUserServiceRequest): unknown;
    fromPartial(object: DeepPartial<QueryUserServiceRequest>): QueryUserServiceRequest;
};
export declare const QueryUserServiceResponse: {
    encode(message: QueryUserServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryUserServiceResponse;
    fromJSON(object: any): QueryUserServiceResponse;
    toJSON(message: QueryUserServiceResponse): unknown;
    fromPartial(object: DeepPartial<QueryUserServiceResponse>): QueryUserServiceResponse;
};
export declare const QueryCheckServiceUserRequest: {
    encode(message: QueryCheckServiceUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCheckServiceUserRequest;
    fromJSON(object: any): QueryCheckServiceUserRequest;
    toJSON(message: QueryCheckServiceUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryCheckServiceUserRequest>): QueryCheckServiceUserRequest;
};
export declare const QueryCheckServiceUserResponse: {
    encode(message: QueryCheckServiceUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCheckServiceUserResponse;
    fromJSON(object: any): QueryCheckServiceUserResponse;
    toJSON(message: QueryCheckServiceUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryCheckServiceUserResponse>): QueryCheckServiceUserResponse;
};
export declare const QueryCheckSharingRequest: {
    encode(message: QueryCheckSharingRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCheckSharingRequest;
    fromJSON(object: any): QueryCheckSharingRequest;
    toJSON(message: QueryCheckSharingRequest): unknown;
    fromPartial(object: DeepPartial<QueryCheckSharingRequest>): QueryCheckSharingRequest;
};
export declare const QueryCheckSharingResponse: {
    encode(message: QueryCheckSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCheckSharingResponse;
    fromJSON(object: any): QueryCheckSharingResponse;
    toJSON(message: QueryCheckSharingResponse): unknown;
    fromPartial(object: DeepPartial<QueryCheckSharingResponse>): QueryCheckSharingResponse;
};
export declare const QueryGetSharingRequest: {
    encode(message: QueryGetSharingRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSharingRequest;
    fromJSON(object: any): QueryGetSharingRequest;
    toJSON(message: QueryGetSharingRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSharingRequest>): QueryGetSharingRequest;
};
export declare const QueryGetSharingResponse: {
    encode(message: QueryGetSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSharingResponse;
    fromJSON(object: any): QueryGetSharingResponse;
    toJSON(message: QueryGetSharingResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSharingResponse>): QueryGetSharingResponse;
};
export declare const QueryAllSharingRequest: {
    encode(message: QueryAllSharingRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSharingRequest;
    fromJSON(object: any): QueryAllSharingRequest;
    toJSON(message: QueryAllSharingRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSharingRequest>): QueryAllSharingRequest;
};
export declare const QueryAllSharingResponse: {
    encode(message: QueryAllSharingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSharingResponse;
    fromJSON(object: any): QueryAllSharingResponse;
    toJSON(message: QueryAllSharingResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSharingResponse>): QueryAllSharingResponse;
};
export declare const QueryGetServiceUserRequest: {
    encode(message: QueryGetServiceUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetServiceUserRequest;
    fromJSON(object: any): QueryGetServiceUserRequest;
    toJSON(message: QueryGetServiceUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetServiceUserRequest>): QueryGetServiceUserRequest;
};
export declare const QueryGetServiceUserResponse: {
    encode(message: QueryGetServiceUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetServiceUserResponse;
    fromJSON(object: any): QueryGetServiceUserResponse;
    toJSON(message: QueryGetServiceUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetServiceUserResponse>): QueryGetServiceUserResponse;
};
export declare const QueryAllServiceUserRequest: {
    encode(message: QueryAllServiceUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllServiceUserRequest;
    fromJSON(object: any): QueryAllServiceUserRequest;
    toJSON(message: QueryAllServiceUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllServiceUserRequest>): QueryAllServiceUserRequest;
};
export declare const QueryAllServiceUserResponse: {
    encode(message: QueryAllServiceUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllServiceUserResponse;
    fromJSON(object: any): QueryAllServiceUserResponse;
    toJSON(message: QueryAllServiceUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllServiceUserResponse>): QueryAllServiceUserResponse;
};
export declare const QueryGetServiceRequest: {
    encode(message: QueryGetServiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetServiceRequest;
    fromJSON(object: any): QueryGetServiceRequest;
    toJSON(message: QueryGetServiceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetServiceRequest>): QueryGetServiceRequest;
};
export declare const QueryGetServiceResponse: {
    encode(message: QueryGetServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetServiceResponse;
    fromJSON(object: any): QueryGetServiceResponse;
    toJSON(message: QueryGetServiceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetServiceResponse>): QueryGetServiceResponse;
};
export declare const QueryAllServiceRequest: {
    encode(message: QueryAllServiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllServiceRequest;
    fromJSON(object: any): QueryAllServiceRequest;
    toJSON(message: QueryAllServiceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllServiceRequest>): QueryAllServiceRequest;
};
export declare const QueryAllServiceResponse: {
    encode(message: QueryAllServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllServiceResponse;
    fromJSON(object: any): QueryAllServiceResponse;
    toJSON(message: QueryAllServiceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllServiceResponse>): QueryAllServiceResponse;
};
export declare const QueryGetUserRequest: {
    encode(message: QueryGetUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUserRequest;
    fromJSON(object: any): QueryGetUserRequest;
    toJSON(message: QueryGetUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetUserRequest>): QueryGetUserRequest;
};
export declare const QueryGetUserResponse: {
    encode(message: QueryGetUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUserResponse;
    fromJSON(object: any): QueryGetUserResponse;
    toJSON(message: QueryGetUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetUserResponse>): QueryGetUserResponse;
};
export declare const QueryAllUserRequest: {
    encode(message: QueryAllUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUserRequest;
    fromJSON(object: any): QueryAllUserRequest;
    toJSON(message: QueryAllUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllUserRequest>): QueryAllUserRequest;
};
export declare const QueryAllUserResponse: {
    encode(message: QueryAllUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUserResponse;
    fromJSON(object: any): QueryAllUserResponse;
    toJSON(message: QueryAllUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllUserResponse>): QueryAllUserResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of userService items. */
    UserService(request: QueryUserServiceRequest): Promise<QueryUserServiceResponse>;
    /** Queries a list of checkServiceUser items. */
    CheckServiceUser(request: QueryCheckServiceUserRequest): Promise<QueryCheckServiceUserResponse>;
    /** Queries a list of checkSharing items. */
    CheckSharing(request: QueryCheckSharingRequest): Promise<QueryCheckSharingResponse>;
    /** Queries a sharing by index. */
    Sharing(request: QueryGetSharingRequest): Promise<QueryGetSharingResponse>;
    /** Queries a list of sharing items. */
    SharingAll(request: QueryAllSharingRequest): Promise<QueryAllSharingResponse>;
    /** Queries a serviceUser by index. */
    ServiceUser(request: QueryGetServiceUserRequest): Promise<QueryGetServiceUserResponse>;
    /** Queries a list of serviceUser items. */
    ServiceUserAll(request: QueryAllServiceUserRequest): Promise<QueryAllServiceUserResponse>;
    /** Queries a service by index. */
    Service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse>;
    /** Queries a list of service items. */
    ServiceAll(request: QueryAllServiceRequest): Promise<QueryAllServiceResponse>;
    /** Queries a user by index. */
    User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    /** Queries a list of user items. */
    UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    UserService(request: QueryUserServiceRequest): Promise<QueryUserServiceResponse>;
    CheckServiceUser(request: QueryCheckServiceUserRequest): Promise<QueryCheckServiceUserResponse>;
    CheckSharing(request: QueryCheckSharingRequest): Promise<QueryCheckSharingResponse>;
    Sharing(request: QueryGetSharingRequest): Promise<QueryGetSharingResponse>;
    SharingAll(request: QueryAllSharingRequest): Promise<QueryAllSharingResponse>;
    ServiceUser(request: QueryGetServiceUserRequest): Promise<QueryGetServiceUserResponse>;
    ServiceUserAll(request: QueryAllServiceUserRequest): Promise<QueryAllServiceUserResponse>;
    Service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse>;
    ServiceAll(request: QueryAllServiceRequest): Promise<QueryAllServiceResponse>;
    User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
