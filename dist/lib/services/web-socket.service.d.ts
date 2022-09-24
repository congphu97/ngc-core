import { Observable, ReplaySubject } from 'rxjs';
import { Socket, SocketOptions, ManagerOptions } from 'socket.io-client';
import { StorageService } from './storage.service';
import { ServerConfig, StorageConfig } from '../injection-token';
import * as i0 from "@angular/core";
export declare type WebSocketOptions = SocketOptions | ManagerOptions;
export interface WebSocketConfig {
    url?: string;
    namespace?: string;
    options?: WebSocketOptions;
}
export declare class WebSocketService {
    readonly serverConfig: ServerConfig;
    readonly storageConfig: StorageConfig;
    private _storageService;
    private _accessToken;
    private _socket;
    private _socketChange$;
    get socketChange$(): ReplaySubject<Socket>;
    /**
     * @constructor
     * @param {ServerConfig} serverConfig
     * @param {ServerConfig} storageConfig
     * @param {StorageService} _storageService
     */
    constructor(serverConfig: ServerConfig, storageConfig: StorageConfig, _storageService: StorageService);
    /**
     * @param {string} accessToken
     * @return {void}
     */
    setAccessToken(accessToken: string): void;
    /**
     * @param {WebSocketConfig} config
     * @return {Observable}
     */
    connect(config?: WebSocketConfig): Observable<Socket>;
    /**
     * @param {string} event
     * @param {any} data
     * @return {void}
     */
    emit(event: string, data: any): void;
    /**
     * @param {string} event
     * @return {Observable}
     */
    on(event: string): Observable<any>;
    /**
     * @return {void}
     */
    disconnect(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WebSocketService, [{ optional: true; }, { optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WebSocketService>;
}
