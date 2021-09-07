/* eslint-disable */
import { Sharing } from '../medichain/sharing'
import { ServiceUser } from '../medichain/service_user'
import { Service } from '../medichain/service'
import { User } from '../medichain/user'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sota.medichain.medichain'

/** GenesisState defines the medichain module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  sharingList: Sharing[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  serviceUserList: ServiceUser[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  serviceList: Service[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  userList: User[]
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.sharingList) {
      Sharing.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    for (const v of message.serviceUserList) {
      ServiceUser.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.serviceList) {
      Service.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.userList) {
      User.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.sharingList = []
    message.serviceUserList = []
    message.serviceList = []
    message.userList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 4:
          message.sharingList.push(Sharing.decode(reader, reader.uint32()))
          break
        case 3:
          message.serviceUserList.push(ServiceUser.decode(reader, reader.uint32()))
          break
        case 2:
          message.serviceList.push(Service.decode(reader, reader.uint32()))
          break
        case 1:
          message.userList.push(User.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.sharingList = []
    message.serviceUserList = []
    message.serviceList = []
    message.userList = []
    if (object.sharingList !== undefined && object.sharingList !== null) {
      for (const e of object.sharingList) {
        message.sharingList.push(Sharing.fromJSON(e))
      }
    }
    if (object.serviceUserList !== undefined && object.serviceUserList !== null) {
      for (const e of object.serviceUserList) {
        message.serviceUserList.push(ServiceUser.fromJSON(e))
      }
    }
    if (object.serviceList !== undefined && object.serviceList !== null) {
      for (const e of object.serviceList) {
        message.serviceList.push(Service.fromJSON(e))
      }
    }
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.sharingList) {
      obj.sharingList = message.sharingList.map((e) => (e ? Sharing.toJSON(e) : undefined))
    } else {
      obj.sharingList = []
    }
    if (message.serviceUserList) {
      obj.serviceUserList = message.serviceUserList.map((e) => (e ? ServiceUser.toJSON(e) : undefined))
    } else {
      obj.serviceUserList = []
    }
    if (message.serviceList) {
      obj.serviceList = message.serviceList.map((e) => (e ? Service.toJSON(e) : undefined))
    } else {
      obj.serviceList = []
    }
    if (message.userList) {
      obj.userList = message.userList.map((e) => (e ? User.toJSON(e) : undefined))
    } else {
      obj.userList = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.sharingList = []
    message.serviceUserList = []
    message.serviceList = []
    message.userList = []
    if (object.sharingList !== undefined && object.sharingList !== null) {
      for (const e of object.sharingList) {
        message.sharingList.push(Sharing.fromPartial(e))
      }
    }
    if (object.serviceUserList !== undefined && object.serviceUserList !== null) {
      for (const e of object.serviceUserList) {
        message.serviceUserList.push(ServiceUser.fromPartial(e))
      }
    }
    if (object.serviceList !== undefined && object.serviceList !== null) {
      for (const e of object.serviceList) {
        message.serviceList.push(Service.fromPartial(e))
      }
    }
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromPartial(e))
      }
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
