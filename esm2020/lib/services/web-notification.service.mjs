import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import _ from 'lodash';
import { APP_CONFIG, AppConfig } from '../injection-token';
import * as i0 from "@angular/core";
import * as i1 from "../injection-token";
export class WebNotificationService {
    /**
     * @constructor
     * @param {AppConfig} appConfig
     */
    constructor(appConfig) {
        this.appConfig = appConfig;
        this.permission = this.isSupported() ? 'default' : 'denied';
    }
    /**
     * @return {boolean}
     */
    isSupported() {
        return 'Notification' in window;
    }
    /**
     * @return {void}
     */
    requestPermission() {
        if ('Notification' in window) {
            Notification.requestPermission((status) => this.permission = status);
        }
    }
    /**
     * @param {string} title - Notification title
     * @param {NotificationOptions} options - Notification options
     * @return {Observable}
     */
    create(title, options) {
        return new Observable((observer) => {
            if (!('Notification' in window))
                observer.complete();
            if (this.permission !== 'granted')
                observer.complete();
            const notify = new Notification(title, options);
            notify.onshow = (event) => {
                return observer.next({ notification: notify, event });
            };
            notify.onclick = (event) => {
                return observer.next({ notification: notify, event });
            };
            notify.onerror = (event) => {
                return observer.error({ notification: notify, event });
            };
            notify.onclose = () => observer.complete();
        });
    }
    /**
     * @param {any[]} source
     * @return {Observable}
     */
    generateNotification(source) {
        _.forEach(source, (item) => {
            const options = { body: item.alertContent, icon: this.appConfig.logo };
            this.create(item.title, options)
                .pipe(take(1))
                .subscribe();
        });
    }
}
WebNotificationService.ɵfac = function WebNotificationService_Factory(t) { return new (t || WebNotificationService)(i0.ɵɵinject(APP_CONFIG, 8)); };
WebNotificationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WebNotificationService, factory: WebNotificationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WebNotificationService, [{
        type: Injectable
    }], function () { return [{ type: i1.AppConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [APP_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy93ZWItbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFHM0QsTUFBTSxPQUFPLHNCQUFzQjtJQUlsQzs7O09BR0c7SUFDSCxZQUErRCxTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ2xGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXO1FBQ2pCLE9BQU8sY0FBYyxJQUFJLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQkFBaUI7UUFDdkIsSUFBSyxjQUFjLElBQUksTUFBTSxFQUFHO1lBQy9CLFlBQVksQ0FBQyxpQkFBaUIsQ0FBRSxDQUFFLE1BQThCLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFFLENBQUM7U0FDakc7SUFDRixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBRSxLQUFhLEVBQUUsT0FBNkI7UUFDMUQsT0FBTyxJQUFJLFVBQVUsQ0FBRSxDQUFFLFFBQXVCLEVBQUcsRUFBRTtZQUNwRCxJQUFLLENBQUMsQ0FBRSxjQUFjLElBQUksTUFBTSxDQUFFO2dCQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUV6RCxJQUFLLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUztnQkFBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFekQsTUFBTSxNQUFNLEdBQVEsSUFBSSxZQUFZLENBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBRSxDQUFDO1lBRXZELE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBRSxLQUFZLEVBQUcsRUFBRTtnQkFDbEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBRSxLQUFZLEVBQUcsRUFBRTtnQkFDbkMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBRSxLQUFZLEVBQUcsRUFBRTtnQkFDbkMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9CQUFvQixDQUFFLE1BQWlEO1FBQzdFLENBQUMsQ0FBQyxPQUFPLENBQUUsTUFBTSxFQUFFLENBQUUsSUFBNkMsRUFBRyxFQUFFO1lBQ3RFLE1BQU0sT0FBTyxHQUF3QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTVGLElBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUU7aUJBQ2pDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFFLENBQUU7aUJBQ2pCLFNBQVMsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDOzs0RkFyRVcsc0JBQXNCLGNBUUEsVUFBVTs0RUFSaEMsc0JBQXNCLFdBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBRGxDLFVBQVU7O3NCQVNJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUUsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQVBQX0NPTkZJRywgQXBwQ29uZmlnIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYk5vdGlmaWNhdGlvblNlcnZpY2Uge1xuXG5cdHB1YmxpYyBwZXJtaXNzaW9uOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtBcHBDb25maWd9IGFwcENvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIEFQUF9DT05GSUcgKSBwdWJsaWMgcmVhZG9ubHkgYXBwQ29uZmlnOiBBcHBDb25maWcgKSB7XG5cdFx0dGhpcy5wZXJtaXNzaW9uID0gdGhpcy5pc1N1cHBvcnRlZCgpID8gJ2RlZmF1bHQnIDogJ2RlbmllZCc7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHB1YmxpYyBpc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gJ05vdGlmaWNhdGlvbicgaW4gd2luZG93O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgcmVxdWVzdFBlcm1pc3Npb24oKSB7XG5cdFx0aWYgKCAnTm90aWZpY2F0aW9uJyBpbiB3aW5kb3cgKSB7XG5cdFx0XHROb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oICggc3RhdHVzOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uICkgPT4gdGhpcy5wZXJtaXNzaW9uID0gc3RhdHVzICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIE5vdGlmaWNhdGlvbiB0aXRsZVxuXHQgKiBAcGFyYW0ge05vdGlmaWNhdGlvbk9wdGlvbnN9IG9wdGlvbnMgLSBOb3RpZmljYXRpb24gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0cHVibGljIGNyZWF0ZSggdGl0bGU6IHN0cmluZywgb3B0aW9ucz86IE5vdGlmaWNhdGlvbk9wdGlvbnMgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoICggb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4gKSA9PiB7XG5cdFx0XHRpZiAoICEoICdOb3RpZmljYXRpb24nIGluIHdpbmRvdyApICkgb2JzZXJ2ZXIuY29tcGxldGUoKTtcblxuXHRcdFx0aWYgKCB0aGlzLnBlcm1pc3Npb24gIT09ICdncmFudGVkJyApIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cblx0XHRcdGNvbnN0IG5vdGlmeTogYW55ID0gbmV3IE5vdGlmaWNhdGlvbiggdGl0bGUsIG9wdGlvbnMgKTtcblxuXHRcdFx0bm90aWZ5Lm9uc2hvdyA9ICggZXZlbnQ6IEV2ZW50ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gb2JzZXJ2ZXIubmV4dCh7IG5vdGlmaWNhdGlvbjogbm90aWZ5LCBldmVudCB9KTtcblx0XHRcdH07XG5cblx0XHRcdG5vdGlmeS5vbmNsaWNrID0gKCBldmVudDogRXZlbnQgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBvYnNlcnZlci5uZXh0KHsgbm90aWZpY2F0aW9uOiBub3RpZnksIGV2ZW50IH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0bm90aWZ5Lm9uZXJyb3IgPSAoIGV2ZW50OiBFdmVudCApID0+IHtcblx0XHRcdFx0cmV0dXJuIG9ic2VydmVyLmVycm9yKHsgbm90aWZpY2F0aW9uOiBub3RpZnksIGV2ZW50IH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0bm90aWZ5Lm9uY2xvc2UgPSAoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2FueVtdfSBzb3VyY2Vcblx0ICogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHB1YmxpYyBnZW5lcmF0ZU5vdGlmaWNhdGlvbiggc291cmNlOiB7IHRpdGxlOiBzdHJpbmc7IGFsZXJ0Q29udGVudDogc3RyaW5nIH1bXSApIHtcblx0XHRfLmZvckVhY2goIHNvdXJjZSwgKCBpdGVtOiB7IHRpdGxlOiBzdHJpbmc7IGFsZXJ0Q29udGVudDogc3RyaW5nIH0gKSA9PiB7XG5cdFx0XHRjb25zdCBvcHRpb25zOiBOb3RpZmljYXRpb25PcHRpb25zID0geyBib2R5OiBpdGVtLmFsZXJ0Q29udGVudCwgaWNvbjogdGhpcy5hcHBDb25maWcubG9nbyB9O1xuXG5cdFx0XHR0aGlzLmNyZWF0ZSggaXRlbS50aXRsZSwgb3B0aW9ucyApXG5cdFx0XHQucGlwZSggdGFrZSggMSApIClcblx0XHRcdC5zdWJzY3JpYmUoKTtcblx0XHR9ICk7XG5cdH1cblxufVxuIl19