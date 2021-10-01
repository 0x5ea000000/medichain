/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sota.medichain.medichain'

export interface Service {
  creator: string
  index: string
  name: string
  url: string
  class: string
  isActive: boolean
}

const baseService: object = { creator: '', index: '', name: '', url: '', class: '', isActive: false }

export const Service = {
  encode(message: Service, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.url !== '') {
      writer.uint32(34).string(message.url)
    }
    if (message.class !== '') {
      writer.uint32(42).string(message.class)
    }
    if (message.isActive === true) {
      writer.uint32(48).bool(message.isActive)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseService } as Service
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
          message.name = reader.string()
          break
        case 4:
          message.url = reader.string()
          break
        case 5:
          message.class = reader.string()
          break
        case 6:
          message.isActive = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Service {
    const message = { ...baseService } as Service
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url)
    } else {
      message.url = ''
    }
    if (object.class !== undefined && object.class !== null) {
      message.class = String(object.class)
    } else {
      message.class = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive)
    } else {
      message.isActive = false
    }
    return message
  },

  toJSON(message: Service): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.name !== undefined && (obj.name = message.name)
    message.url !== undefined && (obj.url = message.url)
    message.class !== undefined && (obj.class = message.class)
    message.isActive !== undefined && (obj.isActive = message.isActive)
    return obj
  },

  fromPartial(object: DeepPartial<Service>): Service {
    const message = { ...baseService } as Service
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url
    } else {
      message.url = ''
    }
    if (object.class !== undefined && object.class !== null) {
      message.class = object.class
    } else {
      message.class = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive
    } else {
      message.isActive = false
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
