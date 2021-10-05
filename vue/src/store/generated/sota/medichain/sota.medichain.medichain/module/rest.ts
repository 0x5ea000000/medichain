/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MedichainAdmin {
  creator?: string;

  /** @format uint64 */
  id?: string;
  pubKey?: string;
}

export type MedichainMsgAcceptSharingResponse = object;

export interface MedichainMsgCreateAdminResponse {
  /** @format uint64 */
  id?: string;
}

export interface MedichainMsgCreateServiceResponse {
  Service?: MedichainService;
}

export interface MedichainMsgCreateServiceUserResponse {
  ServiceUser?: MedichainServiceUser;
}

export type MedichainMsgCreateSharingBatchResponse = object;

export interface MedichainMsgCreateSharingResponse {
  Sharing?: MedichainSharing;
}

export interface MedichainMsgCreateUserResponse {
  User?: MedichainUser;
}

export type MedichainMsgDeleteAdminResponse = object;

export type MedichainMsgDeleteServiceResponse = object;

export type MedichainMsgDeleteServiceUserResponse = object;

export type MedichainMsgDeleteSharingResponse = object;

export type MedichainMsgDeleteUserResponse = object;

export type MedichainMsgRejectSharingResponse = object;

export type MedichainMsgUpdateAdminResponse = object;

export interface MedichainMsgUpdateServiceResponse {
  Service?: MedichainService;
}

export interface MedichainMsgUpdateServiceUserResponse {
  ServiceUser?: MedichainServiceUser;
}

export interface MedichainMsgUpdateSharingResponse {
  Sharing?: MedichainSharing;
}

export interface MedichainMsgUpdateUserResponse {
  User?: MedichainUser;
}

export interface MedichainQueryAllAdminResponse {
  Admin?: MedichainAdmin[];

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

export interface MedichainQueryCheckServiceUserResponse {
  ServiceUser?: MedichainServiceUser;
}

export interface MedichainQueryCheckSharingResponse {
  Sharing?: MedichainSharing;
  Owner?: MedichainServiceUser;
}

export interface MedichainQueryGetAdminResponse {
  Admin?: MedichainAdmin;
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

export interface MedichainQueryUserServiceResponse {
  ServiceUser?: MedichainServiceUser[];
}

export interface MedichainService {
  creator?: string;
  index?: string;
  name?: string;
  url?: string;
  pubKey?: string;
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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title medichain/admin.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAdminAll
   * @summary Queries a list of admin items.
   * @request GET:/sota/medichain/medichain/admin
   */
  queryAdminAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MedichainQueryAllAdminResponse, RpcStatus>({
      path: `/sota/medichain/medichain/admin`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAdmin
   * @summary Queries a admin by id.
   * @request GET:/sota/medichain/medichain/admin/{id}
   */
  queryAdmin = (id: string, params: RequestParams = {}) =>
    this.request<MedichainQueryGetAdminResponse, RpcStatus>({
      path: `/sota/medichain/medichain/admin/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCheckServiceUser
   * @summary Queries a list of checkServiceUser items.
   * @request GET:/sota/medichain/medichain/checkServiceUser
   */
  queryCheckServiceUser = (query?: { serviceId?: string; userId?: string }, params: RequestParams = {}) =>
    this.request<MedichainQueryCheckServiceUserResponse, RpcStatus>({
      path: `/sota/medichain/medichain/checkServiceUser`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCheckSharing
   * @summary Queries a list of checkSharing items.
   * @request GET:/sota/medichain/medichain/checkSharing
   */
  queryCheckSharing = (query?: { ownerId?: string; viewerId?: string }, params: RequestParams = {}) =>
    this.request<MedichainQueryCheckSharingResponse, RpcStatus>({
      path: `/sota/medichain/medichain/checkSharing`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryServiceAll
   * @summary Queries a list of service items.
   * @request GET:/sota/medichain/medichain/service
   */
  queryServiceAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MedichainQueryAllServiceResponse, RpcStatus>({
      path: `/sota/medichain/medichain/service`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryService
   * @summary Queries a service by index.
   * @request GET:/sota/medichain/medichain/service/{index}
   */
  queryService = (index: string, params: RequestParams = {}) =>
    this.request<MedichainQueryGetServiceResponse, RpcStatus>({
      path: `/sota/medichain/medichain/service/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryServiceUserAll
   * @summary Queries a list of serviceUser items.
   * @request GET:/sota/medichain/medichain/serviceUser
   */
  queryServiceUserAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MedichainQueryAllServiceUserResponse, RpcStatus>({
      path: `/sota/medichain/medichain/serviceUser`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryServiceUser
   * @summary Queries a serviceUser by index.
   * @request GET:/sota/medichain/medichain/serviceUser/{index}
   */
  queryServiceUser = (index: string, params: RequestParams = {}) =>
    this.request<MedichainQueryGetServiceUserResponse, RpcStatus>({
      path: `/sota/medichain/medichain/serviceUser/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySharingAll
   * @summary Queries a list of sharing items.
   * @request GET:/sota/medichain/medichain/sharing
   */
  querySharingAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MedichainQueryAllSharingResponse, RpcStatus>({
      path: `/sota/medichain/medichain/sharing`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySharing
   * @summary Queries a sharing by index.
   * @request GET:/sota/medichain/medichain/sharing/{index}
   */
  querySharing = (index: string, params: RequestParams = {}) =>
    this.request<MedichainQueryGetSharingResponse, RpcStatus>({
      path: `/sota/medichain/medichain/sharing/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUserAll
   * @summary Queries a list of user items.
   * @request GET:/sota/medichain/medichain/user
   */
  queryUserAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MedichainQueryAllUserResponse, RpcStatus>({
      path: `/sota/medichain/medichain/user`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUser
   * @summary Queries a user by index.
   * @request GET:/sota/medichain/medichain/user/{index}
   */
  queryUser = (index: string, params: RequestParams = {}) =>
    this.request<MedichainQueryGetUserResponse, RpcStatus>({
      path: `/sota/medichain/medichain/user/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUserService
   * @summary Queries a list of userService items.
   * @request GET:/sota/medichain/medichain/userService
   */
  queryUserService = (query?: { userId?: string }, params: RequestParams = {}) =>
    this.request<MedichainQueryUserServiceResponse, RpcStatus>({
      path: `/sota/medichain/medichain/userService`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
