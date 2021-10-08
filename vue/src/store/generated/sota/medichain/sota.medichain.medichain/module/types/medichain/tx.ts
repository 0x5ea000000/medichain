/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Sharing } from '../medichain/sharing'
import { ServiceUser } from '../medichain/service_user'
import { Service } from '../medichain/service'
import { User } from '../medichain/user'

export const protobufPackage = 'sota.medichain.medichain'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgUnbanUser {
  creator: string
  userId: string
}

export interface MsgUnbanUserResponse {}

export interface MsgBanUser {
  creator: string
  userId: string
}

export interface MsgBanUserResponse {}

export interface MsgDeleteSharingBatch {
  creator: string
  indexs: string[]
}

export interface MsgDeleteSharingBatchResponse {}

export interface MsgUpdateSharingStatusBatch {
  creator: string
  indexs: string[]
  status: string
}

export interface MsgUpdateSharingStatusBatchResponse {}

export interface MsgCreateSharingBatch {
  creator: string
  viewerId: string
  status: string
  ownerIds: string[]
}

export interface MsgCreateSharingBatchResponse {}

export interface MsgCreateAdmin {
  creator: string
  pubKey: string
}

export interface MsgCreateAdminResponse {
  id: number
}

export interface MsgUpdateAdmin {
  creator: string
  id: number
  pubKey: string
}

export interface MsgUpdateAdminResponse {}

export interface MsgDeleteAdmin {
  creator: string
  id: number
}

export interface MsgDeleteAdminResponse {}

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

export interface MsgCreateSharingResponse {
  Sharing: Sharing | undefined
}

export interface MsgUpdateSharing {
  creator: string
  index: string
  ownerId: string
  viewerId: string
  status: string
}

export interface MsgUpdateSharingResponse {
  Sharing: Sharing | undefined
}

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

export interface MsgCreateServiceUserResponse {
  ServiceUser: ServiceUser | undefined
}

export interface MsgUpdateServiceUser {
  creator: string
  index: string
  serviceId: string
  userId: string
  serviceUserId: string
  isActive: boolean
}

export interface MsgUpdateServiceUserResponse {
  ServiceUser: ServiceUser | undefined
}

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

export interface MsgCreateServiceResponse {
  Service: Service | undefined
}

export interface MsgUpdateService {
  creator: string
  index: string
  name: string
  url: string
  pubKey: string
  isActive: boolean
}

export interface MsgUpdateServiceResponse {
  Service: Service | undefined
}

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

export interface MsgCreateUserResponse {
  User: User | undefined
}

export interface MsgUpdateUser {
  creator: string
  index: string
  pubKey: string
  isActive: boolean
}

export interface MsgUpdateUserResponse {
  User: User | undefined
}

export interface MsgDeleteUser {
  creator: string
  index: string
}

export interface MsgDeleteUserResponse {}

const baseMsgUnbanUser: object = { creator: '', userId: '' }

export const MsgUnbanUser = {
  encode(message: MsgUnbanUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.userId !== '') {
      writer.uint32(18).string(message.userId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnbanUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUnbanUser } as MsgUnbanUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.userId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUnbanUser {
    const message = { ...baseMsgUnbanUser } as MsgUnbanUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId)
    } else {
      message.userId = ''
    }
    return message
  },

  toJSON(message: MsgUnbanUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.userId !== undefined && (obj.userId = message.userId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUnbanUser>): MsgUnbanUser {
    const message = { ...baseMsgUnbanUser } as MsgUnbanUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = ''
    }
    return message
  }
}

const baseMsgUnbanUserResponse: object = {}

export const MsgUnbanUserResponse = {
  encode(_: MsgUnbanUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnbanUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUnbanUserResponse } as MsgUnbanUserResponse
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

  fromJSON(_: any): MsgUnbanUserResponse {
    const message = { ...baseMsgUnbanUserResponse } as MsgUnbanUserResponse
    return message
  },

  toJSON(_: MsgUnbanUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUnbanUserResponse>): MsgUnbanUserResponse {
    const message = { ...baseMsgUnbanUserResponse } as MsgUnbanUserResponse
    return message
  }
}

const baseMsgBanUser: object = { creator: '', userId: '' }

export const MsgBanUser = {
  encode(message: MsgBanUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.userId !== '') {
      writer.uint32(18).string(message.userId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBanUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBanUser } as MsgBanUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.userId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBanUser {
    const message = { ...baseMsgBanUser } as MsgBanUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId)
    } else {
      message.userId = ''
    }
    return message
  },

  toJSON(message: MsgBanUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.userId !== undefined && (obj.userId = message.userId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBanUser>): MsgBanUser {
    const message = { ...baseMsgBanUser } as MsgBanUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = ''
    }
    return message
  }
}

const baseMsgBanUserResponse: object = {}

export const MsgBanUserResponse = {
  encode(_: MsgBanUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBanUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBanUserResponse } as MsgBanUserResponse
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

  fromJSON(_: any): MsgBanUserResponse {
    const message = { ...baseMsgBanUserResponse } as MsgBanUserResponse
    return message
  },

  toJSON(_: MsgBanUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgBanUserResponse>): MsgBanUserResponse {
    const message = { ...baseMsgBanUserResponse } as MsgBanUserResponse
    return message
  }
}

const baseMsgDeleteSharingBatch: object = { creator: '', indexs: '' }

export const MsgDeleteSharingBatch = {
  encode(message: MsgDeleteSharingBatch, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    for (const v of message.indexs) {
      writer.uint32(18).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSharingBatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSharingBatch } as MsgDeleteSharingBatch
    message.indexs = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.indexs.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteSharingBatch {
    const message = { ...baseMsgDeleteSharingBatch } as MsgDeleteSharingBatch
    message.indexs = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.indexs !== undefined && object.indexs !== null) {
      for (const e of object.indexs) {
        message.indexs.push(String(e))
      }
    }
    return message
  },

  toJSON(message: MsgDeleteSharingBatch): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    if (message.indexs) {
      obj.indexs = message.indexs.map((e) => e)
    } else {
      obj.indexs = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteSharingBatch>): MsgDeleteSharingBatch {
    const message = { ...baseMsgDeleteSharingBatch } as MsgDeleteSharingBatch
    message.indexs = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.indexs !== undefined && object.indexs !== null) {
      for (const e of object.indexs) {
        message.indexs.push(e)
      }
    }
    return message
  }
}

const baseMsgDeleteSharingBatchResponse: object = {}

export const MsgDeleteSharingBatchResponse = {
  encode(_: MsgDeleteSharingBatchResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSharingBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSharingBatchResponse } as MsgDeleteSharingBatchResponse
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

  fromJSON(_: any): MsgDeleteSharingBatchResponse {
    const message = { ...baseMsgDeleteSharingBatchResponse } as MsgDeleteSharingBatchResponse
    return message
  },

  toJSON(_: MsgDeleteSharingBatchResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteSharingBatchResponse>): MsgDeleteSharingBatchResponse {
    const message = { ...baseMsgDeleteSharingBatchResponse } as MsgDeleteSharingBatchResponse
    return message
  }
}

const baseMsgUpdateSharingStatusBatch: object = { creator: '', indexs: '', status: '' }

export const MsgUpdateSharingStatusBatch = {
  encode(message: MsgUpdateSharingStatusBatch, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    for (const v of message.indexs) {
      writer.uint32(18).string(v!)
    }
    if (message.status !== '') {
      writer.uint32(26).string(message.status)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharingStatusBatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSharingStatusBatch } as MsgUpdateSharingStatusBatch
    message.indexs = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.indexs.push(reader.string())
          break
        case 3:
          message.status = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateSharingStatusBatch {
    const message = { ...baseMsgUpdateSharingStatusBatch } as MsgUpdateSharingStatusBatch
    message.indexs = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.indexs !== undefined && object.indexs !== null) {
      for (const e of object.indexs) {
        message.indexs.push(String(e))
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status)
    } else {
      message.status = ''
    }
    return message
  },

  toJSON(message: MsgUpdateSharingStatusBatch): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    if (message.indexs) {
      obj.indexs = message.indexs.map((e) => e)
    } else {
      obj.indexs = []
    }
    message.status !== undefined && (obj.status = message.status)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateSharingStatusBatch>): MsgUpdateSharingStatusBatch {
    const message = { ...baseMsgUpdateSharingStatusBatch } as MsgUpdateSharingStatusBatch
    message.indexs = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.indexs !== undefined && object.indexs !== null) {
      for (const e of object.indexs) {
        message.indexs.push(e)
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = ''
    }
    return message
  }
}

const baseMsgUpdateSharingStatusBatchResponse: object = {}

export const MsgUpdateSharingStatusBatchResponse = {
  encode(_: MsgUpdateSharingStatusBatchResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharingStatusBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSharingStatusBatchResponse } as MsgUpdateSharingStatusBatchResponse
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

  fromJSON(_: any): MsgUpdateSharingStatusBatchResponse {
    const message = { ...baseMsgUpdateSharingStatusBatchResponse } as MsgUpdateSharingStatusBatchResponse
    return message
  },

  toJSON(_: MsgUpdateSharingStatusBatchResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateSharingStatusBatchResponse>): MsgUpdateSharingStatusBatchResponse {
    const message = { ...baseMsgUpdateSharingStatusBatchResponse } as MsgUpdateSharingStatusBatchResponse
    return message
  }
}

const baseMsgCreateSharingBatch: object = { creator: '', viewerId: '', status: '', ownerIds: '' }

export const MsgCreateSharingBatch = {
  encode(message: MsgCreateSharingBatch, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.viewerId !== '') {
      writer.uint32(18).string(message.viewerId)
    }
    if (message.status !== '') {
      writer.uint32(26).string(message.status)
    }
    for (const v of message.ownerIds) {
      writer.uint32(34).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSharingBatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSharingBatch } as MsgCreateSharingBatch
    message.ownerIds = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.viewerId = reader.string()
          break
        case 3:
          message.status = reader.string()
          break
        case 4:
          message.ownerIds.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateSharingBatch {
    const message = { ...baseMsgCreateSharingBatch } as MsgCreateSharingBatch
    message.ownerIds = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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
    if (object.ownerIds !== undefined && object.ownerIds !== null) {
      for (const e of object.ownerIds) {
        message.ownerIds.push(String(e))
      }
    }
    return message
  },

  toJSON(message: MsgCreateSharingBatch): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.viewerId !== undefined && (obj.viewerId = message.viewerId)
    message.status !== undefined && (obj.status = message.status)
    if (message.ownerIds) {
      obj.ownerIds = message.ownerIds.map((e) => e)
    } else {
      obj.ownerIds = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSharingBatch>): MsgCreateSharingBatch {
    const message = { ...baseMsgCreateSharingBatch } as MsgCreateSharingBatch
    message.ownerIds = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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
    if (object.ownerIds !== undefined && object.ownerIds !== null) {
      for (const e of object.ownerIds) {
        message.ownerIds.push(e)
      }
    }
    return message
  }
}

const baseMsgCreateSharingBatchResponse: object = {}

export const MsgCreateSharingBatchResponse = {
  encode(_: MsgCreateSharingBatchResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSharingBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSharingBatchResponse } as MsgCreateSharingBatchResponse
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

  fromJSON(_: any): MsgCreateSharingBatchResponse {
    const message = { ...baseMsgCreateSharingBatchResponse } as MsgCreateSharingBatchResponse
    return message
  },

  toJSON(_: MsgCreateSharingBatchResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateSharingBatchResponse>): MsgCreateSharingBatchResponse {
    const message = { ...baseMsgCreateSharingBatchResponse } as MsgCreateSharingBatchResponse
    return message
  }
}

const baseMsgCreateAdmin: object = { creator: '', pubKey: '' }

export const MsgCreateAdmin = {
  encode(message: MsgCreateAdmin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pubKey !== '') {
      writer.uint32(18).string(message.pubKey)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAdmin } as MsgCreateAdmin
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.pubKey = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateAdmin {
    const message = { ...baseMsgCreateAdmin } as MsgCreateAdmin
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
    return message
  },

  toJSON(message: MsgCreateAdmin): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateAdmin>): MsgCreateAdmin {
    const message = { ...baseMsgCreateAdmin } as MsgCreateAdmin
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
    return message
  }
}

const baseMsgCreateAdminResponse: object = { id: 0 }

export const MsgCreateAdminResponse = {
  encode(message: MsgCreateAdminResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAdminResponse } as MsgCreateAdminResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateAdminResponse {
    const message = { ...baseMsgCreateAdminResponse } as MsgCreateAdminResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateAdminResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateAdminResponse>): MsgCreateAdminResponse {
    const message = { ...baseMsgCreateAdminResponse } as MsgCreateAdminResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateAdmin: object = { creator: '', id: 0, pubKey: '' }

export const MsgUpdateAdmin = {
  encode(message: MsgUpdateAdmin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.pubKey !== '') {
      writer.uint32(26).string(message.pubKey)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateAdmin } as MsgUpdateAdmin
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.pubKey = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateAdmin {
    const message = { ...baseMsgUpdateAdmin } as MsgUpdateAdmin
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey)
    } else {
      message.pubKey = ''
    }
    return message
  },

  toJSON(message: MsgUpdateAdmin): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateAdmin>): MsgUpdateAdmin {
    const message = { ...baseMsgUpdateAdmin } as MsgUpdateAdmin
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey
    } else {
      message.pubKey = ''
    }
    return message
  }
}

const baseMsgUpdateAdminResponse: object = {}

export const MsgUpdateAdminResponse = {
  encode(_: MsgUpdateAdminResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateAdminResponse } as MsgUpdateAdminResponse
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

  fromJSON(_: any): MsgUpdateAdminResponse {
    const message = { ...baseMsgUpdateAdminResponse } as MsgUpdateAdminResponse
    return message
  },

  toJSON(_: MsgUpdateAdminResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse {
    const message = { ...baseMsgUpdateAdminResponse } as MsgUpdateAdminResponse
    return message
  }
}

const baseMsgDeleteAdmin: object = { creator: '', id: 0 }

export const MsgDeleteAdmin = {
  encode(message: MsgDeleteAdmin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteAdmin } as MsgDeleteAdmin
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteAdmin {
    const message = { ...baseMsgDeleteAdmin } as MsgDeleteAdmin
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteAdmin): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteAdmin>): MsgDeleteAdmin {
    const message = { ...baseMsgDeleteAdmin } as MsgDeleteAdmin
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteAdminResponse: object = {}

export const MsgDeleteAdminResponse = {
  encode(_: MsgDeleteAdminResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteAdminResponse } as MsgDeleteAdminResponse
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

  fromJSON(_: any): MsgDeleteAdminResponse {
    const message = { ...baseMsgDeleteAdminResponse } as MsgDeleteAdminResponse
    return message
  },

  toJSON(_: MsgDeleteAdminResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteAdminResponse>): MsgDeleteAdminResponse {
    const message = { ...baseMsgDeleteAdminResponse } as MsgDeleteAdminResponse
    return message
  }
}

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
  encode(message: MsgCreateSharingResponse, writer: Writer = Writer.create()): Writer {
    if (message.Sharing !== undefined) {
      Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSharingResponse } as MsgCreateSharingResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Sharing = Sharing.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateSharingResponse {
    const message = { ...baseMsgCreateSharingResponse } as MsgCreateSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromJSON(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    return message
  },

  toJSON(message: MsgCreateSharingResponse): unknown {
    const obj: any = {}
    message.Sharing !== undefined && (obj.Sharing = message.Sharing ? Sharing.toJSON(message.Sharing) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSharingResponse>): MsgCreateSharingResponse {
    const message = { ...baseMsgCreateSharingResponse } as MsgCreateSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromPartial(object.Sharing)
    } else {
      message.Sharing = undefined
    }
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
  encode(message: MsgUpdateSharingResponse, writer: Writer = Writer.create()): Writer {
    if (message.Sharing !== undefined) {
      Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSharingResponse } as MsgUpdateSharingResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Sharing = Sharing.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateSharingResponse {
    const message = { ...baseMsgUpdateSharingResponse } as MsgUpdateSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromJSON(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    return message
  },

  toJSON(message: MsgUpdateSharingResponse): unknown {
    const obj: any = {}
    message.Sharing !== undefined && (obj.Sharing = message.Sharing ? Sharing.toJSON(message.Sharing) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateSharingResponse>): MsgUpdateSharingResponse {
    const message = { ...baseMsgUpdateSharingResponse } as MsgUpdateSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromPartial(object.Sharing)
    } else {
      message.Sharing = undefined
    }
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
  encode(message: MsgCreateServiceUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.ServiceUser !== undefined) {
      ServiceUser.encode(message.ServiceUser, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateServiceUserResponse } as MsgCreateServiceUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ServiceUser = ServiceUser.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateServiceUserResponse {
    const message = { ...baseMsgCreateServiceUserResponse } as MsgCreateServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromJSON(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
    return message
  },

  toJSON(message: MsgCreateServiceUserResponse): unknown {
    const obj: any = {}
    message.ServiceUser !== undefined && (obj.ServiceUser = message.ServiceUser ? ServiceUser.toJSON(message.ServiceUser) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateServiceUserResponse>): MsgCreateServiceUserResponse {
    const message = { ...baseMsgCreateServiceUserResponse } as MsgCreateServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromPartial(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
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
  encode(message: MsgUpdateServiceUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.ServiceUser !== undefined) {
      ServiceUser.encode(message.ServiceUser, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateServiceUserResponse } as MsgUpdateServiceUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ServiceUser = ServiceUser.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateServiceUserResponse {
    const message = { ...baseMsgUpdateServiceUserResponse } as MsgUpdateServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromJSON(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
    return message
  },

  toJSON(message: MsgUpdateServiceUserResponse): unknown {
    const obj: any = {}
    message.ServiceUser !== undefined && (obj.ServiceUser = message.ServiceUser ? ServiceUser.toJSON(message.ServiceUser) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateServiceUserResponse>): MsgUpdateServiceUserResponse {
    const message = { ...baseMsgUpdateServiceUserResponse } as MsgUpdateServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromPartial(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
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
  encode(message: MsgCreateServiceResponse, writer: Writer = Writer.create()): Writer {
    if (message.Service !== undefined) {
      Service.encode(message.Service, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateServiceResponse } as MsgCreateServiceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Service = Service.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateServiceResponse {
    const message = { ...baseMsgCreateServiceResponse } as MsgCreateServiceResponse
    if (object.Service !== undefined && object.Service !== null) {
      message.Service = Service.fromJSON(object.Service)
    } else {
      message.Service = undefined
    }
    return message
  },

  toJSON(message: MsgCreateServiceResponse): unknown {
    const obj: any = {}
    message.Service !== undefined && (obj.Service = message.Service ? Service.toJSON(message.Service) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateServiceResponse>): MsgCreateServiceResponse {
    const message = { ...baseMsgCreateServiceResponse } as MsgCreateServiceResponse
    if (object.Service !== undefined && object.Service !== null) {
      message.Service = Service.fromPartial(object.Service)
    } else {
      message.Service = undefined
    }
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
  encode(message: MsgUpdateServiceResponse, writer: Writer = Writer.create()): Writer {
    if (message.Service !== undefined) {
      Service.encode(message.Service, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateServiceResponse } as MsgUpdateServiceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Service = Service.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateServiceResponse {
    const message = { ...baseMsgUpdateServiceResponse } as MsgUpdateServiceResponse
    if (object.Service !== undefined && object.Service !== null) {
      message.Service = Service.fromJSON(object.Service)
    } else {
      message.Service = undefined
    }
    return message
  },

  toJSON(message: MsgUpdateServiceResponse): unknown {
    const obj: any = {}
    message.Service !== undefined && (obj.Service = message.Service ? Service.toJSON(message.Service) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateServiceResponse>): MsgUpdateServiceResponse {
    const message = { ...baseMsgUpdateServiceResponse } as MsgUpdateServiceResponse
    if (object.Service !== undefined && object.Service !== null) {
      message.Service = Service.fromPartial(object.Service)
    } else {
      message.Service = undefined
    }
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
  encode(message: MsgCreateUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.User !== undefined) {
      User.encode(message.User, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.User = User.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromJSON(object.User)
    } else {
      message.User = undefined
    }
    return message
  },

  toJSON(message: MsgCreateUserResponse): unknown {
    const obj: any = {}
    message.User !== undefined && (obj.User = message.User ? User.toJSON(message.User) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateUserResponse>): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromPartial(object.User)
    } else {
      message.User = undefined
    }
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
  encode(message: MsgUpdateUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.User !== undefined) {
      User.encode(message.User, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.User = User.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateUserResponse {
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromJSON(object.User)
    } else {
      message.User = undefined
    }
    return message
  },

  toJSON(message: MsgUpdateUserResponse): unknown {
    const obj: any = {}
    message.User !== undefined && (obj.User = message.User ? User.toJSON(message.User) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateUserResponse>): MsgUpdateUserResponse {
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromPartial(object.User)
    } else {
      message.User = undefined
    }
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
  UnbanUser(request: MsgUnbanUser): Promise<MsgUnbanUserResponse>
  BanUser(request: MsgBanUser): Promise<MsgBanUserResponse>
  DeleteSharingBatch(request: MsgDeleteSharingBatch): Promise<MsgDeleteSharingBatchResponse>
  UpdateSharingStatusBatch(request: MsgUpdateSharingStatusBatch): Promise<MsgUpdateSharingStatusBatchResponse>
  CreateSharingBatch(request: MsgCreateSharingBatch): Promise<MsgCreateSharingBatchResponse>
  CreateAdmin(request: MsgCreateAdmin): Promise<MsgCreateAdminResponse>
  UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>
  DeleteAdmin(request: MsgDeleteAdmin): Promise<MsgDeleteAdminResponse>
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
  UnbanUser(request: MsgUnbanUser): Promise<MsgUnbanUserResponse> {
    const data = MsgUnbanUser.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UnbanUser', data)
    return promise.then((data) => MsgUnbanUserResponse.decode(new Reader(data)))
  }

  BanUser(request: MsgBanUser): Promise<MsgBanUserResponse> {
    const data = MsgBanUser.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'BanUser', data)
    return promise.then((data) => MsgBanUserResponse.decode(new Reader(data)))
  }

  DeleteSharingBatch(request: MsgDeleteSharingBatch): Promise<MsgDeleteSharingBatchResponse> {
    const data = MsgDeleteSharingBatch.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteSharingBatch', data)
    return promise.then((data) => MsgDeleteSharingBatchResponse.decode(new Reader(data)))
  }

  UpdateSharingStatusBatch(request: MsgUpdateSharingStatusBatch): Promise<MsgUpdateSharingStatusBatchResponse> {
    const data = MsgUpdateSharingStatusBatch.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateSharingStatusBatch', data)
    return promise.then((data) => MsgUpdateSharingStatusBatchResponse.decode(new Reader(data)))
  }

  CreateSharingBatch(request: MsgCreateSharingBatch): Promise<MsgCreateSharingBatchResponse> {
    const data = MsgCreateSharingBatch.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateSharingBatch', data)
    return promise.then((data) => MsgCreateSharingBatchResponse.decode(new Reader(data)))
  }

  CreateAdmin(request: MsgCreateAdmin): Promise<MsgCreateAdminResponse> {
    const data = MsgCreateAdmin.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateAdmin', data)
    return promise.then((data) => MsgCreateAdminResponse.decode(new Reader(data)))
  }

  UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse> {
    const data = MsgUpdateAdmin.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateAdmin', data)
    return promise.then((data) => MsgUpdateAdminResponse.decode(new Reader(data)))
  }

  DeleteAdmin(request: MsgDeleteAdmin): Promise<MsgDeleteAdminResponse> {
    const data = MsgDeleteAdmin.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteAdmin', data)
    return promise.then((data) => MsgDeleteAdminResponse.decode(new Reader(data)))
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

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
