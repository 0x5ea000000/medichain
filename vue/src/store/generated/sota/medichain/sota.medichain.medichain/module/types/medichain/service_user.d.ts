import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sota.medichain.medichain";
export interface ServiceUser {
    creator: string;
    index: string;
    serviceId: string;
    userId: string;
    serviceUserId: string;
    isActive: boolean;
}
export declare const ServiceUser: {
    encode(message: ServiceUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ServiceUser;
    fromJSON(object: any): ServiceUser;
    toJSON(message: ServiceUser): unknown;
    fromPartial(object: DeepPartial<ServiceUser>): ServiceUser;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
