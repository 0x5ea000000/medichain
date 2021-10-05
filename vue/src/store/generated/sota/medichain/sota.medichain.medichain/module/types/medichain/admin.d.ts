import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sota.medichain.medichain";
export interface Admin {
    creator: string;
    id: number;
    pubKey: string;
}
export declare const Admin: {
    encode(message: Admin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Admin;
    fromJSON(object: any): Admin;
    toJSON(message: Admin): unknown;
    fromPartial(object: DeepPartial<Admin>): Admin;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
