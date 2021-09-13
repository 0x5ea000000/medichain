/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Sharing } from '../medichain/sharing'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { ServiceUser } from '../medichain/service_user'
import { Service } from '../medichain/service'
import { User } from '../medichain/user'

export const protobufPackage = 'sota.medichain.medichain'

/** this line is used by starport scaffolding # 3 */
export interface QueryCheckSharingRequest {
  ownerId: string
  viewerId: string
}

export interface QueryCheckSharingResponse {
  Sharing: Sharing | undefined
}

export interface QueryGetSharingRequest {
  index: string
}

export interface QueryGetSharingResponse {
  Sharing: Sharing | undefined
}

export interface QueryAllSharingRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSharingResponse {
  Sharing: Sharing[]
  pagination: PageResponse | undefined
}

export interface QueryGetServiceUserRequest {
  index: string
}

export interface QueryGetServiceUserResponse {
  ServiceUser: ServiceUser | undefined
}

export interface QueryAllServiceUserRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllServiceUserResponse {
  ServiceUser: ServiceUser[]
  pagination: PageResponse | undefined
}

export interface QueryGetServiceRequest {
  index: string
}

export interface QueryGetServiceResponse {
  Service: Service | undefined
}

export interface QueryAllServiceRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllServiceResponse {
  Service: Service[]
  pagination: PageResponse | undefined
}

export interface QueryGetUserRequest {
  index: string
}

export interface QueryGetUserResponse {
  User: User | undefined
}

export interface QueryAllUserRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllUserResponse {
  User: User[]
  pagination: PageResponse | undefined
}

const baseQueryCheckSharingRequest: object = { ownerId: '', viewerId: '' }

export const QueryCheckSharingRequest = {
  encode(message: QueryCheckSharingRequest, writer: Writer = Writer.create()): Writer {
    if (message.ownerId !== '') {
      writer.uint32(10).string(message.ownerId)
    }
    if (message.viewerId !== '') {
      writer.uint32(18).string(message.viewerId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCheckSharingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryCheckSharingRequest } as QueryCheckSharingRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ownerId = reader.string()
          break
        case 2:
          message.viewerId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryCheckSharingRequest {
    const message = { ...baseQueryCheckSharingRequest } as QueryCheckSharingRequest
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
    return message
  },

  toJSON(message: QueryCheckSharingRequest): unknown {
    const obj: any = {}
    message.ownerId !== undefined && (obj.ownerId = message.ownerId)
    message.viewerId !== undefined && (obj.viewerId = message.viewerId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryCheckSharingRequest>): QueryCheckSharingRequest {
    const message = { ...baseQueryCheckSharingRequest } as QueryCheckSharingRequest
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
    return message
  }
}

const baseQueryCheckSharingResponse: object = {}

export const QueryCheckSharingResponse = {
  encode(message: QueryCheckSharingResponse, writer: Writer = Writer.create()): Writer {
    if (message.Sharing !== undefined) {
      Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCheckSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryCheckSharingResponse } as QueryCheckSharingResponse
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

  fromJSON(object: any): QueryCheckSharingResponse {
    const message = { ...baseQueryCheckSharingResponse } as QueryCheckSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromJSON(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    return message
  },

  toJSON(message: QueryCheckSharingResponse): unknown {
    const obj: any = {}
    message.Sharing !== undefined && (obj.Sharing = message.Sharing ? Sharing.toJSON(message.Sharing) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryCheckSharingResponse>): QueryCheckSharingResponse {
    const message = { ...baseQueryCheckSharingResponse } as QueryCheckSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromPartial(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    return message
  }
}

const baseQueryGetSharingRequest: object = { index: '' }

export const QueryGetSharingRequest = {
  encode(message: QueryGetSharingRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSharingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSharingRequest } as QueryGetSharingRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSharingRequest {
    const message = { ...baseQueryGetSharingRequest } as QueryGetSharingRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetSharingRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSharingRequest>): QueryGetSharingRequest {
    const message = { ...baseQueryGetSharingRequest } as QueryGetSharingRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetSharingResponse: object = {}

export const QueryGetSharingResponse = {
  encode(message: QueryGetSharingResponse, writer: Writer = Writer.create()): Writer {
    if (message.Sharing !== undefined) {
      Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSharingResponse } as QueryGetSharingResponse
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

  fromJSON(object: any): QueryGetSharingResponse {
    const message = { ...baseQueryGetSharingResponse } as QueryGetSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromJSON(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    return message
  },

  toJSON(message: QueryGetSharingResponse): unknown {
    const obj: any = {}
    message.Sharing !== undefined && (obj.Sharing = message.Sharing ? Sharing.toJSON(message.Sharing) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSharingResponse>): QueryGetSharingResponse {
    const message = { ...baseQueryGetSharingResponse } as QueryGetSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromPartial(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    return message
  }
}

const baseQueryAllSharingRequest: object = {}

export const QueryAllSharingRequest = {
  encode(message: QueryAllSharingRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSharingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSharingRequest } as QueryAllSharingRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSharingRequest {
    const message = { ...baseQueryAllSharingRequest } as QueryAllSharingRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSharingRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSharingRequest>): QueryAllSharingRequest {
    const message = { ...baseQueryAllSharingRequest } as QueryAllSharingRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSharingResponse: object = {}

export const QueryAllSharingResponse = {
  encode(message: QueryAllSharingResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Sharing) {
      Sharing.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSharingResponse } as QueryAllSharingResponse
    message.Sharing = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Sharing.push(Sharing.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSharingResponse {
    const message = { ...baseQueryAllSharingResponse } as QueryAllSharingResponse
    message.Sharing = []
    if (object.Sharing !== undefined && object.Sharing !== null) {
      for (const e of object.Sharing) {
        message.Sharing.push(Sharing.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSharingResponse): unknown {
    const obj: any = {}
    if (message.Sharing) {
      obj.Sharing = message.Sharing.map((e) => (e ? Sharing.toJSON(e) : undefined))
    } else {
      obj.Sharing = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSharingResponse>): QueryAllSharingResponse {
    const message = { ...baseQueryAllSharingResponse } as QueryAllSharingResponse
    message.Sharing = []
    if (object.Sharing !== undefined && object.Sharing !== null) {
      for (const e of object.Sharing) {
        message.Sharing.push(Sharing.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetServiceUserRequest: object = { index: '' }

export const QueryGetServiceUserRequest = {
  encode(message: QueryGetServiceUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetServiceUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetServiceUserRequest } as QueryGetServiceUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetServiceUserRequest {
    const message = { ...baseQueryGetServiceUserRequest } as QueryGetServiceUserRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetServiceUserRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetServiceUserRequest>): QueryGetServiceUserRequest {
    const message = { ...baseQueryGetServiceUserRequest } as QueryGetServiceUserRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetServiceUserResponse: object = {}

export const QueryGetServiceUserResponse = {
  encode(message: QueryGetServiceUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.ServiceUser !== undefined) {
      ServiceUser.encode(message.ServiceUser, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetServiceUserResponse } as QueryGetServiceUserResponse
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

  fromJSON(object: any): QueryGetServiceUserResponse {
    const message = { ...baseQueryGetServiceUserResponse } as QueryGetServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromJSON(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
    return message
  },

  toJSON(message: QueryGetServiceUserResponse): unknown {
    const obj: any = {}
    message.ServiceUser !== undefined && (obj.ServiceUser = message.ServiceUser ? ServiceUser.toJSON(message.ServiceUser) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetServiceUserResponse>): QueryGetServiceUserResponse {
    const message = { ...baseQueryGetServiceUserResponse } as QueryGetServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromPartial(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
    return message
  }
}

const baseQueryAllServiceUserRequest: object = {}

export const QueryAllServiceUserRequest = {
  encode(message: QueryAllServiceUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllServiceUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllServiceUserRequest } as QueryAllServiceUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllServiceUserRequest {
    const message = { ...baseQueryAllServiceUserRequest } as QueryAllServiceUserRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllServiceUserRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllServiceUserRequest>): QueryAllServiceUserRequest {
    const message = { ...baseQueryAllServiceUserRequest } as QueryAllServiceUserRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllServiceUserResponse: object = {}

export const QueryAllServiceUserResponse = {
  encode(message: QueryAllServiceUserResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ServiceUser) {
      ServiceUser.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllServiceUserResponse } as QueryAllServiceUserResponse
    message.ServiceUser = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ServiceUser.push(ServiceUser.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllServiceUserResponse {
    const message = { ...baseQueryAllServiceUserResponse } as QueryAllServiceUserResponse
    message.ServiceUser = []
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      for (const e of object.ServiceUser) {
        message.ServiceUser.push(ServiceUser.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllServiceUserResponse): unknown {
    const obj: any = {}
    if (message.ServiceUser) {
      obj.ServiceUser = message.ServiceUser.map((e) => (e ? ServiceUser.toJSON(e) : undefined))
    } else {
      obj.ServiceUser = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllServiceUserResponse>): QueryAllServiceUserResponse {
    const message = { ...baseQueryAllServiceUserResponse } as QueryAllServiceUserResponse
    message.ServiceUser = []
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      for (const e of object.ServiceUser) {
        message.ServiceUser.push(ServiceUser.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetServiceRequest: object = { index: '' }

export const QueryGetServiceRequest = {
  encode(message: QueryGetServiceRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetServiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetServiceRequest } as QueryGetServiceRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetServiceRequest {
    const message = { ...baseQueryGetServiceRequest } as QueryGetServiceRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetServiceRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetServiceRequest>): QueryGetServiceRequest {
    const message = { ...baseQueryGetServiceRequest } as QueryGetServiceRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetServiceResponse: object = {}

export const QueryGetServiceResponse = {
  encode(message: QueryGetServiceResponse, writer: Writer = Writer.create()): Writer {
    if (message.Service !== undefined) {
      Service.encode(message.Service, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetServiceResponse } as QueryGetServiceResponse
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

  fromJSON(object: any): QueryGetServiceResponse {
    const message = { ...baseQueryGetServiceResponse } as QueryGetServiceResponse
    if (object.Service !== undefined && object.Service !== null) {
      message.Service = Service.fromJSON(object.Service)
    } else {
      message.Service = undefined
    }
    return message
  },

  toJSON(message: QueryGetServiceResponse): unknown {
    const obj: any = {}
    message.Service !== undefined && (obj.Service = message.Service ? Service.toJSON(message.Service) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetServiceResponse>): QueryGetServiceResponse {
    const message = { ...baseQueryGetServiceResponse } as QueryGetServiceResponse
    if (object.Service !== undefined && object.Service !== null) {
      message.Service = Service.fromPartial(object.Service)
    } else {
      message.Service = undefined
    }
    return message
  }
}

const baseQueryAllServiceRequest: object = {}

export const QueryAllServiceRequest = {
  encode(message: QueryAllServiceRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllServiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllServiceRequest } as QueryAllServiceRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllServiceRequest {
    const message = { ...baseQueryAllServiceRequest } as QueryAllServiceRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllServiceRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllServiceRequest>): QueryAllServiceRequest {
    const message = { ...baseQueryAllServiceRequest } as QueryAllServiceRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllServiceResponse: object = {}

export const QueryAllServiceResponse = {
  encode(message: QueryAllServiceResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Service) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllServiceResponse } as QueryAllServiceResponse
    message.Service = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Service.push(Service.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllServiceResponse {
    const message = { ...baseQueryAllServiceResponse } as QueryAllServiceResponse
    message.Service = []
    if (object.Service !== undefined && object.Service !== null) {
      for (const e of object.Service) {
        message.Service.push(Service.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllServiceResponse): unknown {
    const obj: any = {}
    if (message.Service) {
      obj.Service = message.Service.map((e) => (e ? Service.toJSON(e) : undefined))
    } else {
      obj.Service = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllServiceResponse>): QueryAllServiceResponse {
    const message = { ...baseQueryAllServiceResponse } as QueryAllServiceResponse
    message.Service = []
    if (object.Service !== undefined && object.Service !== null) {
      for (const e of object.Service) {
        message.Service.push(Service.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetUserRequest: object = { index: '' }

export const QueryGetUserRequest = {
  encode(message: QueryGetUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetUserRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetUserRequest>): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetUserResponse: object = {}

export const QueryGetUserResponse = {
  encode(message: QueryGetUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.User !== undefined) {
      User.encode(message.User, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse
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

  fromJSON(object: any): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromJSON(object.User)
    } else {
      message.User = undefined
    }
    return message
  },

  toJSON(message: QueryGetUserResponse): unknown {
    const obj: any = {}
    message.User !== undefined && (obj.User = message.User ? User.toJSON(message.User) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetUserResponse>): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromPartial(object.User)
    } else {
      message.User = undefined
    }
    return message
  }
}

const baseQueryAllUserRequest: object = {}

export const QueryAllUserRequest = {
  encode(message: QueryAllUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllUserRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllUserRequest>): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllUserResponse: object = {}

export const QueryAllUserResponse = {
  encode(message: QueryAllUserResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.User) {
      User.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse
    message.User = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.User.push(User.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse
    message.User = []
    if (object.User !== undefined && object.User !== null) {
      for (const e of object.User) {
        message.User.push(User.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllUserResponse): unknown {
    const obj: any = {}
    if (message.User) {
      obj.User = message.User.map((e) => (e ? User.toJSON(e) : undefined))
    } else {
      obj.User = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllUserResponse>): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse
    message.User = []
    if (object.User !== undefined && object.User !== null) {
      for (const e of object.User) {
        message.User.push(User.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of checkSharing items. */
  CheckSharing(request: QueryCheckSharingRequest): Promise<QueryCheckSharingResponse>
  /** Queries a sharing by index. */
  Sharing(request: QueryGetSharingRequest): Promise<QueryGetSharingResponse>
  /** Queries a list of sharing items. */
  SharingAll(request: QueryAllSharingRequest): Promise<QueryAllSharingResponse>
  /** Queries a serviceUser by index. */
  ServiceUser(request: QueryGetServiceUserRequest): Promise<QueryGetServiceUserResponse>
  /** Queries a list of serviceUser items. */
  ServiceUserAll(request: QueryAllServiceUserRequest): Promise<QueryAllServiceUserResponse>
  /** Queries a service by index. */
  Service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse>
  /** Queries a list of service items. */
  ServiceAll(request: QueryAllServiceRequest): Promise<QueryAllServiceResponse>
  /** Queries a user by index. */
  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>
  /** Queries a list of user items. */
  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CheckSharing(request: QueryCheckSharingRequest): Promise<QueryCheckSharingResponse> {
    const data = QueryCheckSharingRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'CheckSharing', data)
    return promise.then((data) => QueryCheckSharingResponse.decode(new Reader(data)))
  }

  Sharing(request: QueryGetSharingRequest): Promise<QueryGetSharingResponse> {
    const data = QueryGetSharingRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'Sharing', data)
    return promise.then((data) => QueryGetSharingResponse.decode(new Reader(data)))
  }

  SharingAll(request: QueryAllSharingRequest): Promise<QueryAllSharingResponse> {
    const data = QueryAllSharingRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'SharingAll', data)
    return promise.then((data) => QueryAllSharingResponse.decode(new Reader(data)))
  }

  ServiceUser(request: QueryGetServiceUserRequest): Promise<QueryGetServiceUserResponse> {
    const data = QueryGetServiceUserRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'ServiceUser', data)
    return promise.then((data) => QueryGetServiceUserResponse.decode(new Reader(data)))
  }

  ServiceUserAll(request: QueryAllServiceUserRequest): Promise<QueryAllServiceUserResponse> {
    const data = QueryAllServiceUserRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'ServiceUserAll', data)
    return promise.then((data) => QueryAllServiceUserResponse.decode(new Reader(data)))
  }

  Service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse> {
    const data = QueryGetServiceRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'Service', data)
    return promise.then((data) => QueryGetServiceResponse.decode(new Reader(data)))
  }

  ServiceAll(request: QueryAllServiceRequest): Promise<QueryAllServiceResponse> {
    const data = QueryAllServiceRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'ServiceAll', data)
    return promise.then((data) => QueryAllServiceResponse.decode(new Reader(data)))
  }

  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse> {
    const data = QueryGetUserRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'User', data)
    return promise.then((data) => QueryGetUserResponse.decode(new Reader(data)))
  }

  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse> {
    const data = QueryAllUserRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'UserAll', data)
    return promise.then((data) => QueryAllUserResponse.decode(new Reader(data)))
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
