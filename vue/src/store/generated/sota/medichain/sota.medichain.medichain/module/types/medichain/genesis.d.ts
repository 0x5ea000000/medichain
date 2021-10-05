import { Writer, Reader } from 'protobufjs/minimal';
import { Admin } from '../medichain/admin';
import { Sharing } from '../medichain/sharing';
import { ServiceUser } from '../medichain/service_user';
import { Service } from '../medichain/service';
import { User } from '../medichain/user';
export declare const protobufPackage = "sota.medichain.medichain";
/** GenesisState defines the medichain module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    adminList: Admin[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    adminCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    sharingList: Sharing[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    serviceUserList: ServiceUser[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    serviceList: Service[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    userList: User[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
