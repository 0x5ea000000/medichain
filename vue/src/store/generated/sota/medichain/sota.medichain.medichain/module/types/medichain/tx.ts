/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'sota.medichain.medichain'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgRejectSharing {
  creator: string
  sharingId: string
}

export interface MsgRejectSharingResponse {}

export interface MsgAcceptSharing {
  creator: string
  sharingId: string
}

export interface MsgAcceptSharingResponse {}

export interface MsgCreateSharing {
  creator: string
  ownerId: string
  viewerId: string
  status: string
}

export interface MsgCreateSharingResponse {}

export interface MsgUpdateSharing {
  creator: string
  index: string
  ownerId: string
  viewerId: string
  status: string
}

export interface MsgUpdateSharingResponse {}

export interface MsgDeleteSharing {
  creator: string
  index: string
}

export interface MsgDeleteSharingResponse {}

export interface MsgCreateServiceUser {
  creator: string
  serviceId: string
  userId: string
  serviceUserId: string
  isActive: boolean
}

export interface MsgCreateServiceUserResponse {}

export interface MsgUpdateServiceUser {
  creator: string
  index: string
  serviceId: string
  userId: string
  serviceUserId: string
  isActive: boolean
}

export interface MsgUpdateServiceUserResponse {}

export interface MsgDeleteServiceUser {
  creator: string
  index: string
}

export interface MsgDeleteServiceUserResponse {}

export interface MsgCreateService {
  creator: string
  name: string
  url: string
  pubKey: string
  isActive: boolean
}

export interface MsgCreateServiceResponse {}

export interface MsgUpdateService {
  creator: string
  index: string
  name: string
  url: string
  pubKey: string
  isActive: boolean
}

export interface MsgUpdateServiceResponse {}

export interface MsgDeleteService {
  creator: string
  index: string
}

export interface MsgDeleteServiceResponse {}

export interface MsgCreateUser {
  creator: string
  pubKey: string
  isActive: boolean
}

export interface MsgCreateUserResponse {}

export interface MsgUpdateUser {
  creator: string
  index: string
  pubKey: string
  isActive: boolean
}

export interface MsgUpdateUserResponse {}

export interface MsgDeleteUser {
  creator: string
  index: string
}

export interface MsgDeleteUserResponse {}

const baseMsgRejectSharing: object = { creator: '', sharingId: '' }

export const MsgRejectSharing = {
  encode(message: MsgRejectSharing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.sharingId !== '') {
      writer.uint32(18).string(message.sharingId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRejectSharing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRejectSharing } as MsgRejectSharing
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.sharingId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRejectSharing {
    const message = { ...baseMsgRejectSharing } as MsgRejectSharing
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.sharingId !== undefined && object.sharingId !== null) {
      message.sharingId = String(object.sharingId)
    } else {
      message.sharingId = ''
    }
    return message
  },

  toJSON(message: MsgRejectSharing): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.sharingId !== undefined && (obj.sharingId = message.sharingId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRejectSharing>): MsgRejectSharing {
    const message = { ...baseMsgRejectSharing } as MsgRejectSharing
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.sharingId !== undefined && object.sharingId !== null) {
      message.sharingId = object.sharingId
    } else {
      message.sharingId = ''
    }
    return message
  }
}

const baseMsgRejectSharingResponse: object = {}

export const MsgRejectSharingResponse = {
  encode(_: MsgRejectSharingResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRejectSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRejectSharingResponse } as MsgRejectSharingResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgRejectSharingResponse {
    const message = { ...baseMsgRejectSharingResponse } as MsgRejectSharingResponse
    return message
  },

  toJSON(_: MsgRejectSharingResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgRejectSharingResponse>): MsgRejectSharingResponse {
    const message = { ...baseMsgRejectSharingResponse } as MsgRejectSharingResponse
    return message
  }
}

const baseMsgAcceptSharing: object = { creator: '', sharingId: '' }

export const MsgAcceptSharing = {
  encode(message: MsgAcceptSharing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.sharingId !== '') {
      writer.uint32(18).string(message.sharingId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptSharing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAcceptSharing } as MsgAcceptSharing
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.sharingId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgAcceptSharing {
    const message = { ...baseMsgAcceptSharing } as MsgAcceptSharing
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.sharingId !== undefined && object.sharingId !== null) {
      message.sharingId = String(object.sharingId)
    } else {
      message.sharingId = ''
    }
    return message
  },

  toJSON(message: MsgAcceptSharing): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.sharingId !== undefined && (obj.sharingId = message.sharingId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgAcceptSharing>): MsgAcceptSharing {
    const message = { ...baseMsgAcceptSharing } as MsgAcceptSharing
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.sharingId !== undefined && object.sharingId !== null) {
      message.sharingId = object.sharingId
    } else {
      message.sharingId = ''
    }
    return message
  }
}

const baseMsgAcceptSharingResponse: object = {}

export const MsgAcceptSharingResponse = {
  encode(_: MsgAcceptSharingResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAcceptSharingResponse } as MsgAcceptSharingResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgAcceptSharingResponse {
    const message = { ...baseMsgAcceptSharingResponse } as MsgAcceptSharingResponse
    return message
  },

  toJSON(_: MsgAcceptSharingResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgAcceptSharingResponse>): MsgAcceptSharingResponse {
    const message = { ...baseMsgAcceptSharingResponse } as MsgAcceptSharingResponse
    return message
  }
}

const baseMsgCreateSharing: object = { creator: '', ownerId: '', viewerId: '', status: '' }

export const MsgCreateSharing = {
  encode(message: MsgCreateSharing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSharing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSharing } as MsgCreateSharing
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
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

  fromJSON(object: any): MsgCreateSharing {
    const message = { ...baseMsgCreateSharing } as MsgCreateSharing
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateSharing): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.ownerId !== undefined && (obj.ownerId = message.ownerId)
    message.viewerId !== undefined && (obj.viewerId = message.viewerId)
    message.status !== undefined && (obj.status = message.status)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSharing>): MsgCreateSharing {
    const message = { ...baseMsgCreateSharing } as MsgCreateSharing
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateSharingResponse: object = {}

export const MsgCreateSharingResponse = {
  encode(_: MsgCreateSharingResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSharingResponse } as MsgCreateSharingResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateSharingResponse {
    const message = { ...baseMsgCreateSharingResponse } as MsgCreateSharingResponse
    return message
  },

  toJSON(_: MsgCreateSharingResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateSharingResponse>): MsgCreateSharingResponse {
    const message = { ...baseMsgCreateSharingResponse } as MsgCreateSharingResponse
    return message
  }
}

const baseMsgUpdateSharing: object = { creator: '', index: '', ownerId: '', viewerId: '', status: '' }

export const MsgUpdateSharing = {
  encode(message: MsgUpdateSharing, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSharing } as MsgUpdateSharing
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

  fromJSON(object: any): MsgUpdateSharing {
    const message = { ...baseMsgUpdateSharing } as MsgUpdateSharing
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

  toJSON(message: MsgUpdateSharing): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.ownerId !== undefined && (obj.ownerId = message.ownerId)
    message.viewerId !== undefined && (obj.viewerId = message.viewerId)
    message.status !== undefined && (obj.status = message.status)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateSharing>): MsgUpdateSharing {
    const message = { ...baseMsgUpdateSharing } as MsgUpdateSharing
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

const baseMsgUpdateSharingResponse: object = {}

export const MsgUpdateSharingResponse = {
  encode(_: MsgUpdateSharingResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSharingResponse } as MsgUpdateSharingResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateSharingResponse {
    const message = { ...baseMsgUpdateSharingResponse } as MsgUpdateSharingResponse
    return message
  },

  toJSON(_: MsgUpdateSharingResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateSharingResponse>): MsgUpdateSharingResponse {
    const message = { ...baseMsgUpdateSharingResponse } as MsgUpdateSharingResponse
    return message
  }
}

const baseMsgDeleteSharing: object = { creator: '', index: '' }

export const MsgDeleteSharing = {
  encode(message: MsgDeleteSharing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSharing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSharing } as MsgDeleteSharing
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteSharing {
    const message = { ...baseMsgDeleteSharing } as MsgDeleteSharing
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
    return message
  },

  toJSON(message: MsgDeleteSharing): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteSharing>): MsgDeleteSharing {
    const message = { ...baseMsgDeleteSharing } as MsgDeleteSharing
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
    return message
  }
}

const baseMsgDeleteSharingResponse: object = {}

export const MsgDeleteSharingResponse = {
  encode(_: MsgDeleteSharingResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSharingResponse } as MsgDeleteSharingResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteSharingResponse {
    const message = { ...baseMsgDeleteSharingResponse } as MsgDeleteSharingResponse
    return message
  },

  toJSON(_: MsgDeleteSharingResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteSharingResponse>): MsgDeleteSharingResponse {
    const message = { ...baseMsgDeleteSharingResponse } as MsgDeleteSharingResponse
    return message
  }
}

const baseMsgCreateServiceUser: object = { creator: '', serviceId: '', userId: '', serviceUserId: '', isActive: false }

export const MsgCreateServiceUser = {
  encode(message: MsgCreateServiceUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.serviceId !== '') {
      writer.uint32(26).string(message.serviceId)
    }
    if (message.userId !== '') {
      writer.uint32(34).string(message.userId)
    }
    if (message.serviceUserId !== '') {
      writer.uint32(42).string(message.serviceUserId)
    }
    if (message.isActive === true) {
      writer.uint32(48).bool(message.isActive)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateServiceUser } as MsgCreateServiceUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.serviceId = reader.string()
          break
        case 4:
          message.userId = reader.string()
          break
        case 5:
          message.serviceUserId = reader.string()
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

  fromJSON(object: any): MsgCreateServiceUser {
    const message = { ...baseMsgCreateServiceUser } as MsgCreateServiceUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.serviceId !== undefined && object.serviceId !== null) {
      message.serviceId = String(object.serviceId)
    } else {
      message.serviceId = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId)
    } else {
      message.userId = ''
    }
    if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
      message.serviceUserId = String(object.serviceUserId)
    } else {
      message.serviceUserId = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive)
    } else {
      message.isActive = false
    }
    return message
  },

  toJSON(message: MsgCreateServiceUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.serviceId !== undefined && (obj.serviceId = message.serviceId)
    message.userId !== undefined && (obj.userId = message.userId)
    message.serviceUserId !== undefined && (obj.serviceUserId = message.serviceUserId)
    message.isActive !== undefined && (obj.isActive = message.isActive)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateServiceUser>): MsgCreateServiceUser {
    const message = { ...baseMsgCreateServiceUser } as MsgCreateServiceUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.serviceId !== undefined && object.serviceId !== null) {
      message.serviceId = object.serviceId
    } else {
      message.serviceId = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = ''
    }
    if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
      message.serviceUserId = object.serviceUserId
    } else {
      message.serviceUserId = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive
    } else {
      message.isActive = false
    }
    return message
  }
}

const baseMsgCreateServiceUserResponse: object = {}

export const MsgCreateServiceUserResponse = {
  encode(_: MsgCreateServiceUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateServiceUserResponse } as MsgCreateServiceUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateServiceUserResponse {
    const message = { ...baseMsgCreateServiceUserResponse } as MsgCreateServiceUserResponse
    return message
  },

  toJSON(_: MsgCreateServiceUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateServiceUserResponse>): MsgCreateServiceUserResponse {
    const message = { ...baseMsgCreateServiceUserResponse } as MsgCreateServiceUserResponse
    return message
  }
}

const baseMsgUpdateServiceUser: object = { creator: '', index: '', serviceId: '', userId: '', serviceUserId: '', isActive: false }

export const MsgUpdateServiceUser = {
  encode(message: MsgUpdateServiceUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.serviceId !== '') {
      writer.uint32(26).string(message.serviceId)
    }
    if (message.userId !== '') {
      writer.uint32(34).string(message.userId)
    }
    if (message.serviceUserId !== '') {
      writer.uint32(42).string(message.serviceUserId)
    }
    if (message.isActive === true) {
      writer.uint32(48).bool(message.isActive)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateServiceUser } as MsgUpdateServiceUser
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
          message.serviceId = reader.string()
          break
        case 4:
          message.userId = reader.string()
          break
        case 5:
          message.serviceUserId = reader.string()
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

  fromJSON(object: any): MsgUpdateServiceUser {
    const message = { ...baseMsgUpdateServiceUser } as MsgUpdateServiceUser
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
    if (object.serviceId !== undefined && object.serviceId !== null) {
      message.serviceId = String(object.serviceId)
    } else {
      message.serviceId = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId)
    } else {
      message.userId = ''
    }
    if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
      message.serviceUserId = String(object.serviceUserId)
    } else {
      message.serviceUserId = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive)
    } else {
      message.isActive = false
    }
    return message
  },

  toJSON(message: MsgUpdateServiceUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.serviceId !== undefined && (obj.serviceId = message.serviceId)
    message.userId !== undefined && (obj.userId = message.userId)
    message.serviceUserId !== undefined && (obj.serviceUserId = message.serviceUserId)
    message.isActive !== undefined && (obj.isActive = message.isActive)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateServiceUser>): MsgUpdateServiceUser {
    const message = { ...baseMsgUpdateServiceUser } as MsgUpdateServiceUser
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
    if (object.serviceId !== undefined && object.serviceId !== null) {
      message.serviceId = object.serviceId
    } else {
      message.serviceId = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = ''
    }
    if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
      message.serviceUserId = object.serviceUserId
    } else {
      message.serviceUserId = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive
    } else {
      message.isActive = false
    }
    return message
  }
}

const baseMsgUpdateServiceUserResponse: object = {}

export const MsgUpdateServiceUserResponse = {
  encode(_: MsgUpdateServiceUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateServiceUserResponse } as MsgUpdateServiceUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateServiceUserResponse {
    const message = { ...baseMsgUpdateServiceUserResponse } as MsgUpdateServiceUserResponse
    return message
  },

  toJSON(_: MsgUpdateServiceUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateServiceUserResponse>): MsgUpdateServiceUserResponse {
    const message = { ...baseMsgUpdateServiceUserResponse } as MsgUpdateServiceUserResponse
    return message
  }
}

const baseMsgDeleteServiceUser: object = { creator: '', index: '' }

export const MsgDeleteServiceUser = {
  encode(message: MsgDeleteServiceUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteServiceUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteServiceUser } as MsgDeleteServiceUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteServiceUser {
    const message = { ...baseMsgDeleteServiceUser } as MsgDeleteServiceUser
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
    return message
  },

  toJSON(message: MsgDeleteServiceUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteServiceUser>): MsgDeleteServiceUser {
    const message = { ...baseMsgDeleteServiceUser } as MsgDeleteServiceUser
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
    return message
  }
}

const baseMsgDeleteServiceUserResponse: object = {}

export const MsgDeleteServiceUserResponse = {
  encode(_: MsgDeleteServiceUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteServiceUserResponse } as MsgDeleteServiceUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteServiceUserResponse {
    const message = { ...baseMsgDeleteServiceUserResponse } as MsgDeleteServiceUserResponse
    return message
  },

  toJSON(_: MsgDeleteServiceUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteServiceUserResponse>): MsgDeleteServiceUserResponse {
    const message = { ...baseMsgDeleteServiceUserResponse } as MsgDeleteServiceUserResponse
    return message
  }
}

const baseMsgCreateService: object = { creator: '', name: '', url: '', pubKey: '', isActive: false }

export const MsgCreateService = {
  encode(message: MsgCreateService, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.url !== '') {
      writer.uint32(34).string(message.url)
    }
    if (message.pubKey !== '') {
      writer.uint32(42).string(message.pubKey)
    }
    if (message.isActive === true) {
      writer.uint32(48).bool(message.isActive)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateService {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateService } as MsgCreateService
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.url = reader.string()
          break
        case 5:
          message.pubKey = reader.string()
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

  fromJSON(object: any): MsgCreateService {
    const message = { ...baseMsgCreateService } as MsgCreateService
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey)
    } else {
      message.pubKey = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive)
    } else {
      message.isActive = false
    }
    return message
  },

  toJSON(message: MsgCreateService): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.url !== undefined && (obj.url = message.url)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    message.isActive !== undefined && (obj.isActive = message.isActive)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateService>): MsgCreateService {
    const message = { ...baseMsgCreateService } as MsgCreateService
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey
    } else {
      message.pubKey = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive
    } else {
      message.isActive = false
    }
    return message
  }
}

const baseMsgCreateServiceResponse: object = {}

export const MsgCreateServiceResponse = {
  encode(_: MsgCreateServiceResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateServiceResponse } as MsgCreateServiceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateServiceResponse {
    const message = { ...baseMsgCreateServiceResponse } as MsgCreateServiceResponse
    return message
  },

  toJSON(_: MsgCreateServiceResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateServiceResponse>): MsgCreateServiceResponse {
    const message = { ...baseMsgCreateServiceResponse } as MsgCreateServiceResponse
    return message
  }
}

const baseMsgUpdateService: object = { creator: '', index: '', name: '', url: '', pubKey: '', isActive: false }

export const MsgUpdateService = {
  encode(message: MsgUpdateService, writer: Writer = Writer.create()): Writer {
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
    if (message.pubKey !== '') {
      writer.uint32(42).string(message.pubKey)
    }
    if (message.isActive === true) {
      writer.uint32(48).bool(message.isActive)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateService {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateService } as MsgUpdateService
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
          message.pubKey = reader.string()
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

  fromJSON(object: any): MsgUpdateService {
    const message = { ...baseMsgUpdateService } as MsgUpdateService
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
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey)
    } else {
      message.pubKey = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive)
    } else {
      message.isActive = false
    }
    return message
  },

  toJSON(message: MsgUpdateService): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.name !== undefined && (obj.name = message.name)
    message.url !== undefined && (obj.url = message.url)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    message.isActive !== undefined && (obj.isActive = message.isActive)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateService>): MsgUpdateService {
    const message = { ...baseMsgUpdateService } as MsgUpdateService
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
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey
    } else {
      message.pubKey = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive
    } else {
      message.isActive = false
    }
    return message
  }
}

const baseMsgUpdateServiceResponse: object = {}

export const MsgUpdateServiceResponse = {
  encode(_: MsgUpdateServiceResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateServiceResponse } as MsgUpdateServiceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateServiceResponse {
    const message = { ...baseMsgUpdateServiceResponse } as MsgUpdateServiceResponse
    return message
  },

  toJSON(_: MsgUpdateServiceResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateServiceResponse>): MsgUpdateServiceResponse {
    const message = { ...baseMsgUpdateServiceResponse } as MsgUpdateServiceResponse
    return message
  }
}

const baseMsgDeleteService: object = { creator: '', index: '' }

export const MsgDeleteService = {
  encode(message: MsgDeleteService, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteService {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteService } as MsgDeleteService
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteService {
    const message = { ...baseMsgDeleteService } as MsgDeleteService
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
    return message
  },

  toJSON(message: MsgDeleteService): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteService>): MsgDeleteService {
    const message = { ...baseMsgDeleteService } as MsgDeleteService
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
    return message
  }
}

const baseMsgDeleteServiceResponse: object = {}

export const MsgDeleteServiceResponse = {
  encode(_: MsgDeleteServiceResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteServiceResponse } as MsgDeleteServiceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteServiceResponse {
    const message = { ...baseMsgDeleteServiceResponse } as MsgDeleteServiceResponse
    return message
  },

  toJSON(_: MsgDeleteServiceResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteServiceResponse>): MsgDeleteServiceResponse {
    const message = { ...baseMsgDeleteServiceResponse } as MsgDeleteServiceResponse
    return message
  }
}

const baseMsgCreateUser: object = { creator: '', pubKey: '', isActive: false }

export const MsgCreateUser = {
  encode(message: MsgCreateUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pubKey !== '') {
      writer.uint32(26).string(message.pubKey)
    }
    if (message.isActive === true) {
      writer.uint32(32).bool(message.isActive)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateUser } as MsgCreateUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.pubKey = reader.string()
          break
        case 4:
          message.isActive = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateUser {
    const message = { ...baseMsgCreateUser } as MsgCreateUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey)
    } else {
      message.pubKey = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive)
    } else {
      message.isActive = false
    }
    return message
  },

  toJSON(message: MsgCreateUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    message.isActive !== undefined && (obj.isActive = message.isActive)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateUser>): MsgCreateUser {
    const message = { ...baseMsgCreateUser } as MsgCreateUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey
    } else {
      message.pubKey = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive
    } else {
      message.isActive = false
    }
    return message
  }
}

const baseMsgCreateUserResponse: object = {}

export const MsgCreateUserResponse = {
  encode(_: MsgCreateUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse
    return message
  },

  toJSON(_: MsgCreateUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateUserResponse>): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse
    return message
  }
}

const baseMsgUpdateUser: object = { creator: '', index: '', pubKey: '', isActive: false }

export const MsgUpdateUser = {
  encode(message: MsgUpdateUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.pubKey !== '') {
      writer.uint32(26).string(message.pubKey)
    }
    if (message.isActive === true) {
      writer.uint32(32).bool(message.isActive)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUser } as MsgUpdateUser
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
          message.pubKey = reader.string()
          break
        case 4:
          message.isActive = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateUser {
    const message = { ...baseMsgUpdateUser } as MsgUpdateUser
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
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey)
    } else {
      message.pubKey = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive)
    } else {
      message.isActive = false
    }
    return message
  },

  toJSON(message: MsgUpdateUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    message.isActive !== undefined && (obj.isActive = message.isActive)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateUser>): MsgUpdateUser {
    const message = { ...baseMsgUpdateUser } as MsgUpdateUser
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
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey
    } else {
      message.pubKey = ''
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive
    } else {
      message.isActive = false
    }
    return message
  }
}

const baseMsgUpdateUserResponse: object = {}

export const MsgUpdateUserResponse = {
  encode(_: MsgUpdateUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateUserResponse {
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse
    return message
  },

  toJSON(_: MsgUpdateUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateUserResponse>): MsgUpdateUserResponse {
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse
    return message
  }
}

const baseMsgDeleteUser: object = { creator: '', index: '' }

export const MsgDeleteUser = {
  encode(message: MsgDeleteUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteUser } as MsgDeleteUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteUser {
    const message = { ...baseMsgDeleteUser } as MsgDeleteUser
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
    return message
  },

  toJSON(message: MsgDeleteUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteUser>): MsgDeleteUser {
    const message = { ...baseMsgDeleteUser } as MsgDeleteUser
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
    return message
  }
}

const baseMsgDeleteUserResponse: object = {}

export const MsgDeleteUserResponse = {
  encode(_: MsgDeleteUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteUserResponse } as MsgDeleteUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteUserResponse {
    const message = { ...baseMsgDeleteUserResponse } as MsgDeleteUserResponse
    return message
  },

  toJSON(_: MsgDeleteUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteUserResponse>): MsgDeleteUserResponse {
    const message = { ...baseMsgDeleteUserResponse } as MsgDeleteUserResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RejectSharing(request: MsgRejectSharing): Promise<MsgRejectSharingResponse>
  AcceptSharing(request: MsgAcceptSharing): Promise<MsgAcceptSharingResponse>
  CreateSharing(request: MsgCreateSharing): Promise<MsgCreateSharingResponse>
  UpdateSharing(request: MsgUpdateSharing): Promise<MsgUpdateSharingResponse>
  DeleteSharing(request: MsgDeleteSharing): Promise<MsgDeleteSharingResponse>
  CreateServiceUser(request: MsgCreateServiceUser): Promise<MsgCreateServiceUserResponse>
  UpdateServiceUser(request: MsgUpdateServiceUser): Promise<MsgUpdateServiceUserResponse>
  DeleteServiceUser(request: MsgDeleteServiceUser): Promise<MsgDeleteServiceUserResponse>
  CreateService(request: MsgCreateService): Promise<MsgCreateServiceResponse>
  UpdateService(request: MsgUpdateService): Promise<MsgUpdateServiceResponse>
  DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>
  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>
  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  RejectSharing(request: MsgRejectSharing): Promise<MsgRejectSharingResponse> {
    const data = MsgRejectSharing.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'RejectSharing', data)
    return promise.then((data) => MsgRejectSharingResponse.decode(new Reader(data)))
  }

  AcceptSharing(request: MsgAcceptSharing): Promise<MsgAcceptSharingResponse> {
    const data = MsgAcceptSharing.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'AcceptSharing', data)
    return promise.then((data) => MsgAcceptSharingResponse.decode(new Reader(data)))
  }

  CreateSharing(request: MsgCreateSharing): Promise<MsgCreateSharingResponse> {
    const data = MsgCreateSharing.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateSharing', data)
    return promise.then((data) => MsgCreateSharingResponse.decode(new Reader(data)))
  }

  UpdateSharing(request: MsgUpdateSharing): Promise<MsgUpdateSharingResponse> {
    const data = MsgUpdateSharing.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateSharing', data)
    return promise.then((data) => MsgUpdateSharingResponse.decode(new Reader(data)))
  }

  DeleteSharing(request: MsgDeleteSharing): Promise<MsgDeleteSharingResponse> {
    const data = MsgDeleteSharing.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteSharing', data)
    return promise.then((data) => MsgDeleteSharingResponse.decode(new Reader(data)))
  }

  CreateServiceUser(request: MsgCreateServiceUser): Promise<MsgCreateServiceUserResponse> {
    const data = MsgCreateServiceUser.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateServiceUser', data)
    return promise.then((data) => MsgCreateServiceUserResponse.decode(new Reader(data)))
  }

  UpdateServiceUser(request: MsgUpdateServiceUser): Promise<MsgUpdateServiceUserResponse> {
    const data = MsgUpdateServiceUser.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateServiceUser', data)
    return promise.then((data) => MsgUpdateServiceUserResponse.decode(new Reader(data)))
  }

  DeleteServiceUser(request: MsgDeleteServiceUser): Promise<MsgDeleteServiceUserResponse> {
    const data = MsgDeleteServiceUser.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteServiceUser', data)
    return promise.then((data) => MsgDeleteServiceUserResponse.decode(new Reader(data)))
  }

  CreateService(request: MsgCreateService): Promise<MsgCreateServiceResponse> {
    const data = MsgCreateService.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateService', data)
    return promise.then((data) => MsgCreateServiceResponse.decode(new Reader(data)))
  }

  UpdateService(request: MsgUpdateService): Promise<MsgUpdateServiceResponse> {
    const data = MsgUpdateService.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateService', data)
    return promise.then((data) => MsgUpdateServiceResponse.decode(new Reader(data)))
  }

  DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse> {
    const data = MsgDeleteService.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteService', data)
    return promise.then((data) => MsgDeleteServiceResponse.decode(new Reader(data)))
  }

  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse> {
    const data = MsgCreateUser.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateUser', data)
    return promise.then((data) => MsgCreateUserResponse.decode(new Reader(data)))
  }

  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse> {
    const data = MsgUpdateUser.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateUser', data)
    return promise.then((data) => MsgUpdateUserResponse.decode(new Reader(data)))
  }

  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse> {
    const data = MsgDeleteUser.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteUser', data)
    return promise.then((data) => MsgDeleteUserResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
