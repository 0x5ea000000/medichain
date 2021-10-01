import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sota.medichain.medichain";
export interface Sharing {
    creator: string;
    index: string;
    ownerId: string;
    viewerId: string;
    status: string;
}
export declare const Sharing: {
    encode(message: Sharing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Sharing;
    fromJSON(object: any): Sharing;
    toJSON(message: Sharing): unknown;
    fromPartial(object: DeepPartial<Sharing>): Sharing;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
