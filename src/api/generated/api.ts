/* tslint:disable */
/* eslint-disable */
/**
 * hackathon23 API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof Item
     */
    'score': number;
}
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'user': string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'password': string;
    /**
     * 空文字列 (\'\') またはundefinedの場合: レスポンス形式が text/html で、ログイン成功時は204を返す  それ以外の場合: レスポンス形式が text/plain 形式で、ログイン成功時は200を返す 
     * @type {string}
     * @memberof LoginRequest
     */
    'statusOnly'?: string;
    /**
     * deprecated (statusOnlyを使ってください) 
     * @type {string}
     * @memberof LoginRequest
     */
    'status_only'?: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'uid': string;
    /**
     * 
     * @type {Array<UserListInner>}
     * @memberof User
     */
    'list'?: Array<UserListInner>;
}
/**
 * 
 * @export
 * @interface UserListInner
 */
export interface UserListInner {
    /**
     * 
     * @type {number}
     * @memberof UserListInner
     */
    'score'?: number;
    /**
     * 
     * @type {string}
     * @memberof UserListInner
     */
    'date'?: string;
    /**
     * 
     * @type {Array<Item>}
     * @memberof UserListInner
     */
    'itemList'?: Array<Item>;
}
/**
 * 
 * @export
 * @interface UserPublic
 */
export interface UserPublic {
    /**
     * 
     * @type {string}
     * @memberof UserPublic
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPublic
     */
    'uid': string;
    /**
     * 
     * @type {number}
     * @memberof UserPublic
     */
    'score': number;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ログインを行います。 
         * @param {LoginRequest} [loginRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postLogin: async (loginRequest?: LoginRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * ログインを行います。 
         * @param {LoginRequest} [loginRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postLogin(loginRequest?: LoginRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postLogin(loginRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * ログインを行います。 
         * @param {LoginRequest} [loginRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postLogin(loginRequest?: LoginRequest, options?: any): AxiosPromise<void> {
            return localVarFp.postLogin(loginRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * ログインを行います。 
     * @param {LoginRequest} [loginRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postLogin(loginRequest?: LoginRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postLogin(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * ItemApi - axios parameter creator
 * @export
 */
export const ItemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 全項目の一覧を取得します 
         * @param {boolean} [includeSuspended] 無効にされたアイテムも必要か
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemGet: async (includeSuspended?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/item`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includeSuspended !== undefined) {
                localVarQueryParameter['include-suspended'] = includeSuspended;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 項目を追加
         * @param {ItemPostScoreEnum} score 点数 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemPost: async (score: ItemPostScoreEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'score' is not null or undefined
            assertParamExists('itemPost', 'score', score)
            const localVarPath = `/item`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (score !== undefined) {
                localVarQueryParameter['score'] = score;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ItemApi - functional programming interface
 * @export
 */
export const ItemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ItemApiAxiosParamCreator(configuration)
    return {
        /**
         * 全項目の一覧を取得します 
         * @param {boolean} [includeSuspended] 無効にされたアイテムも必要か
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async itemGet(includeSuspended?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Item>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.itemGet(includeSuspended, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 項目を追加
         * @param {ItemPostScoreEnum} score 点数 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async itemPost(score: ItemPostScoreEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.itemPost(score, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ItemApi - factory interface
 * @export
 */
export const ItemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ItemApiFp(configuration)
    return {
        /**
         * 全項目の一覧を取得します 
         * @param {boolean} [includeSuspended] 無効にされたアイテムも必要か
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemGet(includeSuspended?: boolean, options?: any): AxiosPromise<Array<Item>> {
            return localVarFp.itemGet(includeSuspended, options).then((request) => request(axios, basePath));
        },
        /**
         * 項目を追加
         * @param {ItemPostScoreEnum} score 点数 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemPost(score: ItemPostScoreEnum, options?: any): AxiosPromise<Item> {
            return localVarFp.itemPost(score, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ItemApi - object-oriented interface
 * @export
 * @class ItemApi
 * @extends {BaseAPI}
 */
export class ItemApi extends BaseAPI {
    /**
     * 全項目の一覧を取得します 
     * @param {boolean} [includeSuspended] 無効にされたアイテムも必要か
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public itemGet(includeSuspended?: boolean, options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).itemGet(includeSuspended, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 項目を追加
     * @param {ItemPostScoreEnum} score 点数 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public itemPost(score: ItemPostScoreEnum, options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).itemPost(score, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const ItemPostScoreEnum = {
    Great: 'great',
    Good: 'good',
    Bad: 'bad',
    Terrible: 'terrible'
} as const;
export type ItemPostScoreEnum = typeof ItemPostScoreEnum[keyof typeof ItemPostScoreEnum];


/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ユーザの日ごとの合計点を取得します 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMe: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユーザの日ごとの合計点を取得します 
         * @param {string} uid ユーザーID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (uid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uid' is not null or undefined
            assertParamExists('getUser', 'uid', uid)
            const localVarPath = `/user/{uid}`
                .replace(`{${"uid"}}`, encodeURIComponent(String(uid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 全ユーザーを取得します。 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [number] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userRankingGet: async (number?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/ranking`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (number !== undefined) {
                localVarQueryParameter['number'] = number;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * ユーザの日ごとの合計点を取得します 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMe(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMe(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユーザの日ごとの合計点を取得します 
         * @param {string} uid ユーザーID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(uid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(uid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 全ユーザーを取得します。 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserPublic>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [number] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userRankingGet(number?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserPublic>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userRankingGet(number, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * ユーザの日ごとの合計点を取得します 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMe(options?: any): AxiosPromise<User> {
            return localVarFp.getMe(options).then((request) => request(axios, basePath));
        },
        /**
         * ユーザの日ごとの合計点を取得します 
         * @param {string} uid ユーザーID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(uid: string, options?: any): AxiosPromise<User> {
            return localVarFp.getUser(uid, options).then((request) => request(axios, basePath));
        },
        /**
         * 全ユーザーを取得します。 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(options?: any): AxiosPromise<Array<UserPublic>> {
            return localVarFp.getUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [number] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userRankingGet(number?: number, options?: any): AxiosPromise<Array<UserPublic>> {
            return localVarFp.userRankingGet(number, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * ユーザの日ごとの合計点を取得します 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getMe(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getMe(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユーザの日ごとの合計点を取得します 
     * @param {string} uid ユーザーID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUser(uid: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUser(uid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 全ユーザーを取得します。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUsers(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [number] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userRankingGet(number?: number, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).userRankingGet(number, options).then((request) => request(this.axios, this.basePath));
    }
}


