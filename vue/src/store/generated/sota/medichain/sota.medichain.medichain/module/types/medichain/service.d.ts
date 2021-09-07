import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sota.medichain.medichain";
export interface Service {
    creator: string;
    index: string;
    name: string;
    url: string;
    class: string;
    isActive: boolean;
}
export declare const Service: {
    encode(message: Service, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial(object: DeepPartial<Service>): Service;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
