/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sota.medichain.medichain'

export interface Sharing {
  creator: string
  index: string
  ownerId: string
  viewerId: string
  status: string
}

const baseSharing: object = { creator: '', index: '', ownerId: '', viewerId: '', status: '' }

export const Sharing = {
  encode(message: Sharing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.ownerId !== '') {
      writer.uint32(26).string(message.ownerId)
    }
    if (message.viewerId !== '') {
      writer.uint32(34).string(message.viewerId)
    }
    if (message.status !== '') {
      writer.uint32(42).string(message.status)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Sharing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSharing } as Sharing
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.ownerId = reader.string()
          break
        case 4:
          message.viewerId = reader.string()
          break
        case 5:
          message.status = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Sharing {
    const message = { ...baseSharing } as Sharing
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = String(object.ownerId)
    } else {
      message.ownerId = ''
    }
    if (object.viewerId !== undefined && object.viewerId !== null) {
      message.viewerId = String(object.viewerId)
    } else {
      message.viewerId = ''
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status)
    } else {
      message.status = ''
    }
    return message
  },

  toJSON(message: Sharing): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.ownerId !== undefined && (obj.ownerId = message.ownerId)
    message.viewerId !== undefined && (obj.viewerId = message.viewerId)
    message.status !== undefined && (obj.status = message.status)
    return obj
  },

  fromPartial(object: DeepPartial<Sharing>): Sharing {
    const message = { ...baseSharing } as Sharing
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = object.ownerId
    } else {
      message.ownerId = ''
    }
    if (object.viewerId !== undefined && object.viewerId !== null) {
      message.viewerId = object.viewerId
    } else {
      message.viewerId = ''
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = ''
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
