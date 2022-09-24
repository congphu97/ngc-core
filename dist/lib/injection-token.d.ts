import { InjectionToken } from '@angular/core';
export declare type WeekStart = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export declare type TimeFormat = 'hh:mm a' | 'HH:mm';
export declare class AppConfig {
    private _name;
    private _logo;
    private _url;
    private _locale;
    private _mainPath;
    get name(): string;
    set name(value: string);
    get logo(): string;
    set logo(value: string);
    get url(): string;
    set url(value: string);
    get locale(): string;
    set locale(value: string);
    get mainPath(): string;
    set mainPath(value: string);
}
export declare class ServerConfig {
    private _apiURL;
    private _wsURL;
    private _fcmPublicKey;
    private _fcmSubscriptionEndpoint;
    get apiURL(): string;
    set apiURL(value: string);
    get wsURL(): string;
    set wsURL(value: string);
    get fcmPublicKey(): string;
    set fcmPublicKey(value: string);
    get fcmSubscriptionEndpoint(): string;
    set fcmSubscriptionEndpoint(value: string);
}
export declare class DateTimeConfig {
    private _timezone;
    private _dateFormat;
    private _timeFormat;
    private _weekStart;
    get timezone(): string;
    set timezone(value: string);
    get dateFormat(): string;
    set dateFormat(value: string);
    get timeFormat(): TimeFormat;
    set timeFormat(value: TimeFormat);
    get weekStart(): WeekStart;
    set weekStart(value: WeekStart);
}
export declare class StorageConfig {
    private _authorizedKey;
    private _hashKey;
    private _expireDays;
    get authorizedKey(): string;
    set authorizedKey(value: string);
    get hashKey(): string;
    set hashKey(value: string);
    get expireDays(): number;
    set expireDays(value: number);
}
export declare const APP_CONFIG: InjectionToken<AppConfig>;
export declare const SERVER_CONFIG: InjectionToken<AppConfig>;
export declare const DATE_TIME_CONFIG: InjectionToken<DateTimeConfig>;
export declare const STORAGE_CONFIG: InjectionToken<StorageConfig>;
