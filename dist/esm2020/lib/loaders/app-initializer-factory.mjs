import { LOCATION_INITIALIZED } from '@angular/common';
import moment from 'moment-timezone';
import _ from 'lodash';
import { DATE_TIME_CONFIG } from '../injection-token';
export function appInitializerFactory(translateService, localeService, injector) {
    return () => new Promise((resolve) => {
        const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
        const dateTimeConfig = injector.get(DATE_TIME_CONFIG);
        const locale = localeService.locale;
        locationInitialized.then(() => {
            // Set moment timezone
            moment.tz.setDefault(dateTimeConfig.timezone);
            // Set moment language
            moment.locale(locale);
            // This language will be used as a fallback when a translation isn't found in the current language
            const langToSet = _.toLower(locale.substring(0, 2));
            translateService.setDefaultLang(langToSet);
            translateService.use(langToSet).subscribe(() => console.info(`Successfully initialized '${langToSet}' language.'`), () => console.error(`Problem with '${langToSet}' language initialization.'`), resolve);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWluaXRpYWxpemVyLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xvYWRlcnMvYXBwLWluaXRpYWxpemVyLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBa0IsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RSxNQUFNLFVBQVUscUJBQXFCLENBQUUsZ0JBQWtDLEVBQUUsYUFBNEIsRUFBRSxRQUFrQjtJQUMxSCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFPLENBQUUsT0FBWSxFQUFHLEVBQUU7UUFDakQsTUFBTSxtQkFBbUIsR0FBaUIsUUFBUSxDQUFDLEdBQUcsQ0FBRSxvQkFBb0IsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUUsQ0FBQztRQUNsRyxNQUFNLGNBQWMsR0FBbUIsUUFBUSxDQUFDLEdBQUcsQ0FBRSxnQkFBZ0IsQ0FBRSxDQUFDO1FBQ3hFLE1BQU0sTUFBTSxHQUFXLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFFNUMsbUJBQW1CLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRTtZQUM5QixzQkFBc0I7WUFDdEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUUsY0FBYyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1lBRWhELHNCQUFzQjtZQUN0QixNQUFNLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBRSxDQUFDO1lBRXhCLGtHQUFrRztZQUNsRyxNQUFNLFNBQVMsR0FBVyxDQUFDLENBQUMsT0FBTyxDQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7WUFFaEUsZ0JBQWdCLENBQUMsY0FBYyxDQUFFLFNBQVMsQ0FBRSxDQUFDO1lBQzdDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUUsQ0FBQyxTQUFTLENBQzFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsNkJBQTZCLFNBQVMsY0FBYyxDQUFFLEVBQzFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUUsaUJBQWlCLFNBQVMsNkJBQTZCLENBQUUsRUFDOUUsT0FBTyxDQUNQLENBQUM7UUFDSCxDQUFDLENBQUUsQ0FBQztJQUNMLENBQUMsQ0FBRSxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMT0NBVElPTl9JTklUSUFMSVpFRCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBEQVRFX1RJTUVfQ09ORklHLCBEYXRlVGltZUNvbmZpZyB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwSW5pdGlhbGl6ZXJGYWN0b3J5KCB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBsb2NhbGVTZXJ2aWNlOiBMb2NhbGVTZXJ2aWNlLCBpbmplY3RvcjogSW5qZWN0b3IgKSB7XG5cdHJldHVybiAoKSA9PiBuZXcgUHJvbWlzZTxhbnk+KCAoIHJlc29sdmU6IGFueSApID0+IHtcblx0XHRjb25zdCBsb2NhdGlvbkluaXRpYWxpemVkOiBQcm9taXNlPGFueT4gPSBpbmplY3Rvci5nZXQoIExPQ0FUSU9OX0lOSVRJQUxJWkVELCBQcm9taXNlLnJlc29sdmUoKSApO1xuXHRcdGNvbnN0IGRhdGVUaW1lQ29uZmlnOiBEYXRlVGltZUNvbmZpZyA9IGluamVjdG9yLmdldCggREFURV9USU1FX0NPTkZJRyApO1xuXHRcdGNvbnN0IGxvY2FsZTogc3RyaW5nID0gbG9jYWxlU2VydmljZS5sb2NhbGU7XG5cblx0XHRsb2NhdGlvbkluaXRpYWxpemVkLnRoZW4oICgpID0+IHtcblx0XHRcdC8vIFNldCBtb21lbnQgdGltZXpvbmVcblx0XHRcdG1vbWVudC50ei5zZXREZWZhdWx0KCBkYXRlVGltZUNvbmZpZy50aW1lem9uZSApO1xuXG5cdFx0XHQvLyBTZXQgbW9tZW50IGxhbmd1YWdlXG5cdFx0XHRtb21lbnQubG9jYWxlKCBsb2NhbGUgKTtcblxuXHRcdFx0Ly8gVGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2Vcblx0XHRcdGNvbnN0IGxhbmdUb1NldDogc3RyaW5nID0gXy50b0xvd2VyKCBsb2NhbGUuc3Vic3RyaW5nKCAwLCAyICkgKTtcblxuXHRcdFx0dHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyggbGFuZ1RvU2V0ICk7XG5cdFx0XHR0cmFuc2xhdGVTZXJ2aWNlLnVzZSggbGFuZ1RvU2V0ICkuc3Vic2NyaWJlKFxuXHRcdFx0XHQoKSA9PiBjb25zb2xlLmluZm8oIGBTdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQgJyR7bGFuZ1RvU2V0fScgbGFuZ3VhZ2UuJ2AgKSxcblx0XHRcdFx0KCkgPT4gY29uc29sZS5lcnJvciggYFByb2JsZW0gd2l0aCAnJHtsYW5nVG9TZXR9JyBsYW5ndWFnZSBpbml0aWFsaXphdGlvbi4nYCApLFxuXHRcdFx0XHRyZXNvbHZlXG5cdFx0XHQpO1xuXHRcdH0gKTtcblx0fSApO1xufVxuIl19