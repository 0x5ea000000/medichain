export declare type MedichainMsgAcceptSharingResponse = object;
export declare type MedichainMsgCreateServiceResponse = object;
export declare type MedichainMsgCreateServiceUserResponse = object;
export declare type MedichainMsgCreateSharingResponse = object;
export declare type MedichainMsgCreateUserResponse = object;
export declare type MedichainMsgDeleteServiceResponse = object;
export declare type MedichainMsgDeleteServiceUserResponse = object;
export declare type MedichainMsgDeleteSharingResponse = object;
export declare type MedichainMsgDeleteUserResponse = object;
export declare type MedichainMsgRejectSharingResponse = object;
export declare type MedichainMsgUpdateServiceResponse = object;
export declare type MedichainMsgUpdateServiceUserResponse = object;
export declare type MedichainMsgUpdateSharingResponse = object;
export declare type MedichainMsgUpdateUserResponse = object;
export interface MedichainQueryAllServiceResponse {
    Service?: MedichainService[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MedichainQueryAllServiceUserResponse {
    ServiceUser?: MedichainServiceUser[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MedichainQueryAllSharingResponse {
    Sharing?: MedichainSharing[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MedichainQueryAllUserResponse {
    User?: MedichainUser[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MedichainQueryCheckSharingResponse {
    Sharing?: MedichainSharing;
    Owner?: MedichainServiceUser;
}
export interface MedichainQueryGetServiceResponse {
    Service?: MedichainService;
}
export interface MedichainQueryGetServiceUserResponse {
    ServiceUser?: MedichainServiceUser;
}
export interface MedichainQueryGetSharingResponse {
    Sharing?: MedichainSharing;
}
export interface MedichainQueryGetUserResponse {
    User?: MedichainUser;
}
export interface MedichainService {
    creator?: string;
    index?: string;
    name?: string;
    url?: string;
    class?: string;
    isActive?: boolean;
}
export interface MedichainServiceUser {
    creator?: string;
    index?: string;
    serviceId?: string;
    userId?: string;
    serviceUserId?: string;
    isActive?: boolean;
}
export interface MedichainSharing {
    creator?: string;
    index?: string;
    ownerId?: string;
    viewerId?: string;
    status?: string;
}
export interface MedichainUser {
    creator?: string;
    index?: string;
    pubKey?: string;
    isActive?: boolean;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title medichain/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryCheckSharing
     * @summary Queries a list of checkSharing items.
     * @request GET:/sota/medichain/medichain/checkSharing
     */
    queryCheckSharing: (query?: {
        ownerId?: string;
        viewerId?: string;
    }, params?: RequestParams) => Promise<HttpResponse<MedichainQueryCheckSharingResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryServiceAll
     * @summary Queries a list of service items.
     * @request GET:/sota/medichain/medichain/service
     */
    queryServiceAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MedichainQueryAllServiceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryService
     * @summary Queries a service by index.
     * @request GET:/sota/medichain/medichain/service/{index}
     */
    queryService: (index: string, params?: RequestParams) => Promise<HttpResponse<MedichainQueryGetServiceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryServiceUserAll
     * @summary Queries a list of serviceUser items.
     * @request GET:/sota/medichain/medichain/serviceUser
     */
    queryServiceUserAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MedichainQueryAllServiceUserResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryServiceUser
     * @summary Queries a serviceUser by index.
     * @request GET:/sota/medichain/medichain/serviceUser/{index}
     */
    queryServiceUser: (index: string, params?: RequestParams) => Promise<HttpResponse<MedichainQueryGetServiceUserResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySharingAll
     * @summary Queries a list of sharing items.
     * @request GET:/sota/medichain/medichain/sharing
     */
    querySharingAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MedichainQueryAllSharingResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySharing
     * @summary Queries a sharing by index.
     * @request GET:/sota/medichain/medichain/sharing/{index}
     */
    querySharing: (index: string, params?: RequestParams) => Promise<HttpResponse<MedichainQueryGetSharingResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUserAll
     * @summary Queries a list of user items.
     * @request GET:/sota/medichain/medichain/user
     */
    queryUserAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MedichainQueryAllUserResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUser
     * @summary Queries a user by index.
     * @request GET:/sota/medichain/medichain/user/{index}
     */
    queryUser: (index: string, params?: RequestParams) => Promise<HttpResponse<MedichainQueryGetUserResponse, RpcStatus>>;
}
export {};
