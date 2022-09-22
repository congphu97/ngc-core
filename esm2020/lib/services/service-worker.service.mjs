import { Injectable, Inject, Optional } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { Observable, Subscription } from 'rxjs';
import { take, single, filter } from 'rxjs/operators';
import _ from 'lodash';
import { ApiService } from './api.service';
import { APP_CONFIG, AppConfig, SERVER_CONFIG, ServerConfig } from '../injection-token';
import * as i0 from "@angular/core";
import * as i1 from "@angular/service-worker";
import * as i2 from "./api.service";
import * as i3 from "../injection-token";
export class ServiceWorkerService {
    /**
     * @constructor
     * @param {AppConfig} appConfig
     * @param {ServerConfig} serverConfig
     * @param {SwPush} _swPush
     * @param {SwUpdate} _swUpdate
     * @param {ApiService} _apiService
     */
    constructor(appConfig, serverConfig, _swPush, _swUpdate, _apiService) {
        this.appConfig = appConfig;
        this.serverConfig = serverConfig;
        this._swPush = _swPush;
        this._swUpdate = _swUpdate;
        this._apiService = _apiService;
        this._notificationClicks$$ = new Subscription();
        this._swPushMessages$$ = new Subscription();
    }
    /**
     * @return {void}
     */
    updateAvailableVersion() {
        this._swUpdate.versionUpdates
            .pipe(filter((event) => event.type === 'VERSION_READY'))
            .subscribe(() => {
            this._swUpdate.activateUpdate().then(() => document.location.reload());
        });
    }
    /**
     * @param {ServiceWorkerOption} options
     * @param {() => void} callback
     * @return {void}
     */
    requestSubscription(options, callback) {
        if (!this._swPush.isEnabled || 'safari' in window)
            return;
        const serverPublicKey = options?.serverPublicKey || this.serverConfig.fcmPublicKey;
        if (!serverPublicKey)
            return;
        // Get current subscription
        this._swPush.subscription
            .pipe(take(1))
            .pipe(single())
            .subscribe((subscription) => {
            if (subscription) {
                // Send subscription to callback
                _.isFunction(callback) && callback(subscription);
                return;
            }
            // Request new subscription
            this._swPush
                .requestSubscription({ serverPublicKey })
                .then((newSubscription) => {
                // Send subscription to callback
                _.isFunction(callback) && callback(newSubscription);
            });
        });
    }
    /**
     * @param {ServiceWorkerOption} options
     * @param {Function} callback
     * @return {void}
     */
    enablePushNotification(options, callback) {
        if (!this._swPush.isEnabled || 'safari' in window)
            return;
        // Request subscription
        this.requestSubscription(options, (subscription) => {
            const subscriptionEndpoint = options?.subscriptionEndpoint || this.serverConfig.fcmSubscriptionEndpoint;
            // Send subscription to the server
            subscriptionEndpoint && this._apiService
                .call(subscriptionEndpoint, 'POST', { subscription })
                .subscribe();
            // Send subscription to callback
            _.isFunction(callback) && callback(subscription);
        });
        // Handle click notification event
        this._notificationClicks$$.unsubscribe();
        this._notificationClicks$$ = this._swPush.notificationClicks
            .subscribe(options.onNotificationClicked.bind(this));
    }
    /**
     * @return {void}
     */
    disablePushNotification() {
        if (!this._swPush.isEnabled || 'safari' in window)
            return;
        // Unsubscribe all subscriptions
        this._swPush.subscription
            .pipe(take(1))
            .forEach((subscription) => subscription?.unsubscribe());
    }
    /**
     * @return {Observable}
     */
    listenPushNotification() {
        return new Observable((observer) => {
            if (!this._swPush.isEnabled || 'safari' in window) {
                observer.next(undefined);
                observer.complete();
                return;
            }
            this._swPushMessages$$.unsubscribe();
            this._swPushMessages$$ = this._swPush.messages
                .subscribe((payload) => observer.next(payload), (error) => observer.error(error), () => observer.complete());
        });
    }
}
ServiceWorkerService.ɵfac = function ServiceWorkerService_Factory(t) { return new (t || ServiceWorkerService)(i0.ɵɵinject(APP_CONFIG, 8), i0.ɵɵinject(SERVER_CONFIG, 8), i0.ɵɵinject(i1.SwPush), i0.ɵɵinject(i1.SwUpdate), i0.ɵɵinject(i2.ApiService)); };
ServiceWorkerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ServiceWorkerService, factory: ServiceWorkerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ServiceWorkerService, [{
        type: Injectable
    }], function () { return [{ type: i3.AppConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i3.ServerConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SERVER_CONFIG]
            }] }, { type: i1.SwPush }, { type: i1.SwUpdate }, { type: i2.ApiService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvc2VydmljZS13b3JrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQWdCLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBWSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQWV4RixNQUFNLE9BQU8sb0JBQW9CO0lBS2hDOzs7Ozs7O09BT0c7SUFDSCxZQUNtRCxTQUFvQixFQUNqQixZQUEwQixFQUN2RSxPQUFlLEVBQ2YsU0FBbUIsRUFDbkIsV0FBdUI7UUFKbUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN2RSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWhCeEIsMEJBQXFCLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsc0JBQWlCLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFnQjFELENBQUM7SUFFSjs7T0FFRztJQUNJLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsU0FB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ICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3UHVzaCwgU3dVcGRhdGUsIFZlcnNpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UsIHNpbmdsZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQVBQX0NPTkZJRywgQXBwQ29uZmlnLCBTRVJWRVJfQ09ORklHLCBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW4nO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogV2luZG93O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VXb3JrZXJPcHRpb24ge1xuXHRzZXJ2ZXJQdWJsaWNLZXk/OiBzdHJpbmc7XG5cdHN1YnNjcmlwdGlvbkVuZHBvaW50Pzogc3RyaW5nO1xuXHRvbk5vdGlmaWNhdGlvbkNsaWNrZWQ/OiAoIGFyZzoge1xuXHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uT3B0aW9ucyAmIHsgdGl0bGU6IHN0cmluZyB9O1xuXHR9KSA9PiB2b2lkO1xuXHRjYWxsYmFjaz86ICgpID0+IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlV29ya2VyU2VydmljZSB7XG5cblx0cHJpdmF0ZSBfbm90aWZpY2F0aW9uQ2xpY2tzJCQ6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblx0cHJpdmF0ZSBfc3dQdXNoTWVzc2FnZXMkJDogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtBcHBDb25maWd9IGFwcENvbmZpZ1xuXHQgKiBAcGFyYW0ge1NlcnZlckNvbmZpZ30gc2VydmVyQ29uZmlnXG5cdCAqIEBwYXJhbSB7U3dQdXNofSBfc3dQdXNoXG5cdCAqIEBwYXJhbSB7U3dVcGRhdGV9IF9zd1VwZGF0ZVxuXHQgKiBAcGFyYW0ge0FwaVNlcnZpY2V9IF9hcGlTZXJ2aWNlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBBUFBfQ09ORklHICkgcHVibGljIHJlYWRvbmx5IGFwcENvbmZpZzogQXBwQ29uZmlnLFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIFNFUlZFUl9DT05GSUcgKSBwdWJsaWMgcmVhZG9ubHkgc2VydmVyQ29uZmlnOiBTZXJ2ZXJDb25maWcsXG5cdFx0cHJpdmF0ZSBfc3dQdXNoOiBTd1B1c2gsXG5cdFx0cHJpdmF0ZSBfc3dVcGRhdGU6IFN3VXBkYXRlLFxuXHRcdHByaXZhdGUgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHVwZGF0ZUF2YWlsYWJsZVZlcnNpb24oKSB7XG5cdFx0dGhpcy5fc3dVcGRhdGUudmVyc2lvblVwZGF0ZXNcblx0XHQucGlwZSggZmlsdGVyKCAoIGV2ZW50OiBWZXJzaW9uRXZlbnQgKSA9PiBldmVudC50eXBlID09PSAnVkVSU0lPTl9SRUFEWScgKSApXG5cdFx0LnN1YnNjcmliZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3dVcGRhdGUuYWN0aXZhdGVVcGRhdGUoKS50aGVuKCAoKSA9PiBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1NlcnZpY2VXb3JrZXJPcHRpb259IG9wdGlvbnNcblx0ICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHJlcXVlc3RTdWJzY3JpcHRpb24oIG9wdGlvbnM/OiBTZXJ2aWNlV29ya2VyT3B0aW9uLCBjYWxsYmFjaz86ICggc3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uICkgPT4gdm9pZCApIHtcblx0XHRpZiAoICF0aGlzLl9zd1B1c2guaXNFbmFibGVkIHx8ICdzYWZhcmknIGluIHdpbmRvdyApIHJldHVybjtcblxuXHRcdGNvbnN0IHNlcnZlclB1YmxpY0tleTogc3RyaW5nID0gb3B0aW9ucz8uc2VydmVyUHVibGljS2V5IHx8IHRoaXMuc2VydmVyQ29uZmlnLmZjbVB1YmxpY0tleTtcblxuXHRcdGlmICggIXNlcnZlclB1YmxpY0tleSApIHJldHVybjtcblxuXHRcdC8vIEdldCBjdXJyZW50IHN1YnNjcmlwdGlvblxuXHRcdHRoaXMuX3N3UHVzaC5zdWJzY3JpcHRpb25cblx0XHQucGlwZSggdGFrZSggMSApIClcblx0XHQucGlwZSggc2luZ2xlKCkgKVxuXHRcdC5zdWJzY3JpYmUoICggc3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uICkgPT4ge1xuXHRcdFx0aWYgKCBzdWJzY3JpcHRpb24gKSB7XG5cdFx0XHRcdC8vIFNlbmQgc3Vic2NyaXB0aW9uIHRvIGNhbGxiYWNrXG5cdFx0XHRcdF8uaXNGdW5jdGlvbiggY2FsbGJhY2sgKSAmJiBjYWxsYmFjayggc3Vic2NyaXB0aW9uICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVxdWVzdCBuZXcgc3Vic2NyaXB0aW9uXG5cdFx0XHR0aGlzLl9zd1B1c2hcblx0XHRcdC5yZXF1ZXN0U3Vic2NyaXB0aW9uKHsgc2VydmVyUHVibGljS2V5IH0pXG5cdFx0XHQudGhlbiggKCBuZXdTdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24gKSA9PiB7XG5cdFx0XHRcdC8vIFNlbmQgc3Vic2NyaXB0aW9uIHRvIGNhbGxiYWNrXG5cdFx0XHRcdF8uaXNGdW5jdGlvbiggY2FsbGJhY2sgKSAmJiBjYWxsYmFjayggbmV3U3Vic2NyaXB0aW9uICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7U2VydmljZVdvcmtlck9wdGlvbn0gb3B0aW9uc1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGVuYWJsZVB1c2hOb3RpZmljYXRpb24oIG9wdGlvbnM/OiBTZXJ2aWNlV29ya2VyT3B0aW9uLCBjYWxsYmFjaz86ICggc3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uICkgPT4gdm9pZCApIHtcblx0XHRpZiAoICF0aGlzLl9zd1B1c2guaXNFbmFibGVkIHx8ICdzYWZhcmknIGluIHdpbmRvdyApIHJldHVybjtcblxuXHRcdC8vIFJlcXVlc3Qgc3Vic2NyaXB0aW9uXG5cdFx0dGhpcy5yZXF1ZXN0U3Vic2NyaXB0aW9uKCBvcHRpb25zLCAoIHN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbiApID0+IHtcblx0XHRcdGNvbnN0IHN1YnNjcmlwdGlvbkVuZHBvaW50OiBzdHJpbmcgPVxuXHRcdFx0XHRvcHRpb25zPy5zdWJzY3JpcHRpb25FbmRwb2ludCB8fCB0aGlzLnNlcnZlckNvbmZpZy5mY21TdWJzY3JpcHRpb25FbmRwb2ludDtcblxuXHRcdFx0Ly8gU2VuZCBzdWJzY3JpcHRpb24gdG8gdGhlIHNlcnZlclxuXHRcdFx0c3Vic2NyaXB0aW9uRW5kcG9pbnQgJiYgdGhpcy5fYXBpU2VydmljZVxuXHRcdFx0LmNhbGwoIHN1YnNjcmlwdGlvbkVuZHBvaW50LCAnUE9TVCcsIHsgc3Vic2NyaXB0aW9uIH0gKVxuXHRcdFx0LnN1YnNjcmliZSgpO1xuXG5cdFx0XHQvLyBTZW5kIHN1YnNjcmlwdGlvbiB0byBjYWxsYmFja1xuXHRcdFx0Xy5pc0Z1bmN0aW9uKCBjYWxsYmFjayApICYmIGNhbGxiYWNrKCBzdWJzY3JpcHRpb24gKTtcblx0XHR9ICk7XG5cblx0XHQvLyBIYW5kbGUgY2xpY2sgbm90aWZpY2F0aW9uIGV2ZW50XG5cdFx0dGhpcy5fbm90aWZpY2F0aW9uQ2xpY2tzJCQudW5zdWJzY3JpYmUoKTtcblx0XHR0aGlzLl9ub3RpZmljYXRpb25DbGlja3MkJCA9IHRoaXMuX3N3UHVzaC5ub3RpZmljYXRpb25DbGlja3Ncblx0XHQuc3Vic2NyaWJlKCBvcHRpb25zLm9uTm90aWZpY2F0aW9uQ2xpY2tlZC5iaW5kKCB0aGlzICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGRpc2FibGVQdXNoTm90aWZpY2F0aW9uKCkge1xuXHRcdGlmICggIXRoaXMuX3N3UHVzaC5pc0VuYWJsZWQgfHwgJ3NhZmFyaScgaW4gd2luZG93ICkgcmV0dXJuO1xuXG5cdFx0Ly8gVW5zdWJzY3JpYmUgYWxsIHN1YnNjcmlwdGlvbnNcblx0XHR0aGlzLl9zd1B1c2guc3Vic2NyaXB0aW9uXG5cdFx0LnBpcGUoIHRha2UoIDEgKSApXG5cdFx0LmZvckVhY2goICggc3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uICkgPT4gc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHB1YmxpYyBsaXN0ZW5QdXNoTm90aWZpY2F0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCAoIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+ICkgPT4ge1xuXHRcdFx0aWYgKCAhdGhpcy5fc3dQdXNoLmlzRW5hYmxlZCB8fCAnc2FmYXJpJyBpbiB3aW5kb3cgKSB7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoIHVuZGVmaW5lZCApO1xuXHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3N3UHVzaE1lc3NhZ2VzJCQudW5zdWJzY3JpYmUoKTtcblx0XHRcdHRoaXMuX3N3UHVzaE1lc3NhZ2VzJCQgPSB0aGlzLl9zd1B1c2gubWVzc2FnZXNcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCggcGF5bG9hZDogYW55ICkgPT4gb2JzZXJ2ZXIubmV4dCggcGF5bG9hZCApLFxuXHRcdFx0XHQoIGVycm9yOiBhbnkgKSA9PiBvYnNlcnZlci5lcnJvciggZXJyb3IgKSxcblx0XHRcdFx0KCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH1cblxufVxuIl19