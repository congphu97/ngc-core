import { Observable } from 'rxjs';
import { AppConfig } from '../injection-token';
import * as i0 from "@angular/core";
export declare class WebNotificationService {
    readonly appConfig: AppConfig;
    permission: NotificationPermission;
    /**
     * @constructor
     * @param {AppConfig} appConfig
     */
    constructor(appConfig: AppConfig);
    /**
     * @return {boolean}
     */
    isSupported(): boolean;
    /**
     * @return {void}
     */
    requestPermission(): void;
    /**
     * @param {string} title - Notification title
     * @param {NotificationOptions} options - Notification options
     * @return {Observable}
     */
    create(title: string, options?: NotificationOptions): Observable<any>;
    /**
     * @param {any[]} source
     * @return {Observable}
     */
    generateNotification(source: {
        title: string;
        alertContent: string;
    }[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WebNotificationService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WebNotificationService>;
}
