// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: medichain/sharing.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Sharing struct {
	Creator  string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Index    string `protobuf:"bytes,2,opt,name=index,proto3" json:"index,omitempty"`
	OwnerId  string `protobuf:"bytes,3,opt,name=ownerId,proto3" json:"ownerId,omitempty"`
	ViewerId string `protobuf:"bytes,4,opt,name=viewerId,proto3" json:"viewerId,omitempty"`
	Status   string `protobuf:"bytes,5,opt,name=status,proto3" json:"status,omitempty"`
}

func (m *Sharing) Reset()         { *m = Sharing{} }
func (m *Sharing) String() string { return proto.CompactTextString(m) }
func (*Sharing) ProtoMessage()    {}
func (*Sharing) Descriptor() ([]byte, []int) {
	return fileDescriptor_838413071f44c58c, []int{0}
}
func (m *Sharing) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Sharing) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Sharing.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Sharing) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Sharing.Merge(m, src)
}
func (m *Sharing) XXX_Size() int {
	return m.Size()
}
func (m *Sharing) XXX_DiscardUnknown() {
	xxx_messageInfo_Sharing.DiscardUnknown(m)
}

var xxx_messageInfo_Sharing proto.InternalMessageInfo

func (m *Sharing) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Sharing) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *Sharing) GetOwnerId() string {
	if m != nil {
		return m.OwnerId
	}
	return ""
}

func (m *Sharing) GetViewerId() string {
	if m != nil {
		return m.ViewerId
	}
	return ""
}

func (m *Sharing) GetStatus() string {
	if m != nil {
		return m.Status
	}
	return ""
}

func init() {
	proto.RegisterType((*Sharing)(nil), "sota.medichain.medichain.Sharing")
}

func init() { proto.RegisterFile("medichain/sharing.proto", fileDescriptor_838413071f44c58c) }

var fileDescriptor_838413071f44c58c = []byte{
	// 219 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xcf, 0x4d, 0x4d, 0xc9,
	0x4c, 0xce, 0x48, 0xcc, 0xcc, 0xd3, 0x2f, 0xce, 0x48, 0x2c, 0xca, 0xcc, 0x4b, 0xd7, 0x2b, 0x28,
	0xca, 0x2f, 0xc9, 0x17, 0x92, 0x28, 0xce, 0x2f, 0x49, 0xd4, 0x83, 0xcb, 0x22, 0x58, 0x52, 0x22,
	0xe9, 0xf9, 0xe9, 0xf9, 0x60, 0x45, 0xfa, 0x20, 0x16, 0x44, 0xbd, 0x52, 0x3b, 0x23, 0x17, 0x7b,
	0x30, 0xc4, 0x04, 0x21, 0x09, 0x2e, 0xf6, 0xe4, 0xa2, 0xd4, 0xc4, 0x92, 0xfc, 0x22, 0x09, 0x46,
	0x05, 0x46, 0x0d, 0xce, 0x20, 0x18, 0x57, 0x48, 0x84, 0x8b, 0x35, 0x33, 0x2f, 0x25, 0xb5, 0x42,
	0x82, 0x09, 0x2c, 0x0e, 0xe1, 0x80, 0xd4, 0xe7, 0x97, 0xe7, 0xa5, 0x16, 0x79, 0xa6, 0x48, 0x30,
	0x43, 0xd4, 0x43, 0xb9, 0x42, 0x52, 0x5c, 0x1c, 0x65, 0x99, 0xa9, 0xe5, 0x60, 0x29, 0x16, 0xb0,
	0x14, 0x9c, 0x2f, 0x24, 0xc6, 0xc5, 0x56, 0x5c, 0x92, 0x58, 0x52, 0x5a, 0x2c, 0xc1, 0x0a, 0x96,
	0x81, 0xf2, 0x9c, 0x5c, 0x4f, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39,
	0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0x4a, 0x3b,
	0x3d, 0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0xe4, 0x3d, 0x7d, 0x84, 0xe7,
	0x2b, 0x90, 0xd8, 0x25, 0x95, 0x05, 0xa9, 0xc5, 0x49, 0x6c, 0x60, 0x7f, 0x19, 0x03, 0x02, 0x00,
	0x00, 0xff, 0xff, 0x70, 0x8d, 0xc6, 0x34, 0x22, 0x01, 0x00, 0x00,
}

func (m *Sharing) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Sharing) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Sharing) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Status) > 0 {
		i -= len(m.Status)
		copy(dAtA[i:], m.Status)
		i = encodeVarintSharing(dAtA, i, uint64(len(m.Status)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.ViewerId) > 0 {
		i -= len(m.ViewerId)
		copy(dAtA[i:], m.ViewerId)
		i = encodeVarintSharing(dAtA, i, uint64(len(m.ViewerId)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.OwnerId) > 0 {
		i -= len(m.OwnerId)
		copy(dAtA[i:], m.OwnerId)
		i = encodeVarintSharing(dAtA, i, uint64(len(m.OwnerId)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintSharing(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintSharing(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintSharing(dAtA []byte, offset int, v uint64) int {
	offset -= sovSharing(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Sharing) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovSharing(uint64(l))
	}
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovSharing(uint64(l))
	}
	l = len(m.OwnerId)
	if l > 0 {
		n += 1 + l + sovSharing(uint64(l))
	}
	l = len(m.ViewerId)
	if l > 0 {
		n += 1 + l + sovSharing(uint64(l))
	}
	l = len(m.Status)
	if l > 0 {
		n += 1 + l + sovSharing(uint64(l))
	}
	return n
}

func sovSharing(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozSharing(x uint64) (n int) {
	return sovSharing(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Sharing) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSharing
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Sharing: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Sharing: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSharing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSharing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSharing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSharing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSharing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSharing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OwnerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSharing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSharing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSharing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OwnerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ViewerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSharing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSharing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSharing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ViewerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSharing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSharing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSharing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Status = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipSharing(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthSharing
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipSharing(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowSharing
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSharing
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSharing
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthSharing
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupSharing
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthSharing
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthSharing        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSharing          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupSharing = fmt.Errorf("proto: unexpected end of group")
)