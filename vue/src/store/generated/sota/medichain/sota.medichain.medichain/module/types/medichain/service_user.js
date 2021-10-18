/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'sota.medichain.medichain';
const baseServiceUser = { creator: '', index: '', serviceId: '', userId: '', serviceUserId: '', connectedAt: 0, isActive: false };
export const ServiceUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.serviceId !== '') {
            writer.uint32(26).string(message.serviceId);
        }
        if (message.userId !== '') {
            writer.uint32(34).string(message.userId);
        }
        if (message.serviceUserId !== '') {
            writer.uint32(42).string(message.serviceUserId);
        }
        if (message.connectedAt !== 0) {
            writer.uint32(48).int64(message.connectedAt);
        }
        if (message.isActive === true) {
            writer.uint32(56).bool(message.isActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServiceUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.serviceId = reader.string();
                    break;
                case 4:
                    message.userId = reader.string();
                    break;
                case 5:
                    message.serviceUserId = reader.string();
                    break;
                case 6:
                    message.connectedAt = longToNumber(reader.int64());
                    break;
                case 7:
                    message.isActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseServiceUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.serviceId !== undefined && object.serviceId !== null) {
            message.serviceId = String(object.serviceId);
        }
        else {
            message.serviceId = '';
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        else {
            message.userId = '';
        }
        if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
            message.serviceUserId = String(object.serviceUserId);
        }
        else {
            message.serviceUserId = '';
        }
        if (object.connectedAt !== undefined && object.connectedAt !== null) {
            message.connectedAt = Number(object.connectedAt);
        }
        else {
            message.connectedAt = 0;
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = Boolean(object.isActive);
        }
        else {
            message.isActive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.userId !== undefined && (obj.userId = message.userId);
        message.serviceUserId !== undefined && (obj.serviceUserId = message.serviceUserId);
        message.connectedAt !== undefined && (obj.connectedAt = message.connectedAt);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseServiceUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.serviceId !== undefined && object.serviceId !== null) {
            message.serviceId = object.serviceId;
        }
        else {
            message.serviceId = '';
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        else {
            message.userId = '';
        }
        if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
            message.serviceUserId = object.serviceUserId;
        }
        else {
            message.serviceUserId = '';
        }
        if (object.connectedAt !== undefined && object.connectedAt !== null) {
            message.connectedAt = object.connectedAt;
        }
        else {
            message.connectedAt = 0;
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = object.isActive;
        }
        else {
            message.isActive = false;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
