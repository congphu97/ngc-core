import { SwPush, SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { AppConfig, ServerConfig } from '../injection-token';
import * as i0 from "@angular/core";
export interface ServiceWorkerOption {
    serverPublicKey?: string;
    subscriptionEndpoint?: string;
    onNotificationClicked?: (arg: {
        action: string;
        notification: NotificationOptions & {
            title: string;
        };
    }) => void;
    callback?: () => void;
}
export declare class ServiceWorkerService {
    readonly appConfig: AppConfig;
    readonly serverConfig: ServerConfig;
    private _swPush;
    private _swUpdate;
    private _apiService;
    private _notificationClicks$$;
    private _swPushMessages$$;
    /**
     * @constructor
     * @param {AppConfig} appConfig
     * @param {ServerConfig} serverConfig
     * @param {SwPush} _swPush
     * @param {SwUpdate} _swUpdate
     * @param {ApiService} _apiService
     */
    constructor(appConfig: AppConfig, serverConfig: ServerConfig, _swPush: SwPush, _swUpdate: SwUpdate, _apiService: ApiService);
    /**
     * @return {void}
     */
    updateAvailableVersion(): void;
    /**
     * @param {ServiceWorkerOption} options
     * @param {() => void} callback
     * @return {void}
     */
    requestSubscription(options?: ServiceWorkerOption, callback?: (subscription: PushSubscription) => void): void;
    /**
     * @param {ServiceWorkerOption} options
     * @param {Function} callback
     * @return {void}
     */
    enablePushNotification(options?: ServiceWorkerOption, callback?: (subscription: PushSubscription) => void): void;
    /**
     * @return {void}
     */
    disablePushNotification(): void;
    /**
     * @return {Observable}
     */
    listenPushNotification(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ServiceWorkerService, [{ optional: true; }, { optional: true; }, null, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ServiceWorkerService>;
}
