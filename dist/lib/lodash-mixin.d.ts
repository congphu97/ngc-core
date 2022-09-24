import { Observable } from 'rxjs';
declare module 'lodash' {
    interface LoDashStatic {
        aesEncrypt(data: any, key?: string, opts?: any): string;
        aesDecrypt(code: string, key?: string, opts?: any): any;
        arrayInsert(arr: any[], item: any, index: number): any[];
        arrayJoin(arr: any[], joinSymbol?: string): string;
        arrayUpdate(arr: any[], item: any, index?: number): any[];
        arrayResert(arr: any[], item: any, index?: number, type?: string): any[];
        coerce(value: any, defaultValue?: any): any;
        escapeRegExp(str: string): string;
        isStrictEmpty(value: any): boolean;
        matchAll(regex: RegExp, value: string): any[];
        search(str: string, match: string): boolean;
        staticObservable(value?: any): Observable<any>;
        stripAccentedCharacters(str: string): string;
        stripHtml(html: string): string;
        toCommas(num: number, isAddZero?: boolean): string;
        toFileSize(fileSize: number, isAddZero?: boolean): string;
        toFixed(num: number, digits?: number): number;
        toKUnit(num: number, isAddZero?: boolean): string;
        toPadNumber(num: number, size: number): string;
        toPercent(num: number, max?: number, digits?: number): number;
        toRegExp(str: string, flags?: string): RegExp;
        toRgb(hex: string): RGB;
        toSearchRegExp(str: string, flags?: string): RegExp;
        toSearchString(str: string, ignoreWhitespace?: boolean): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        aesEncrypt(key?: string, opts?: any): LoDashExplicitWrapper<string>;
        aesDecrypt(key?: string, opts?: any): LoDashExplicitWrapper<any>;
        arrayInsert(item: any, index: number): LoDashExplicitWrapper<any[]>;
        arrayJoin(joinSymbol?: string): LoDashExplicitWrapper<string>;
        arrayUpdate(item: any, index?: number): LoDashExplicitWrapper<any[]>;
        arrayResert(item: any, index?: number, type?: string): LoDashExplicitWrapper<any[]>;
        coerce(defaultValue?: any): LoDashExplicitWrapper<any>;
        escapeRegExp(): LoDashExplicitWrapper<string>;
        isStrictEmpty(): LoDashExplicitWrapper<boolean>;
        matchAll(value: string): LoDashExplicitWrapper<any[]>;
        search(match: string): LoDashExplicitWrapper<boolean>;
        staticObservable(): LoDashExplicitWrapper<Observable<any>>;
        stripAccentedCharacters(): LoDashExplicitWrapper<string>;
        stripHtml(): LoDashExplicitWrapper<string>;
        toCommas(isAddZero?: boolean): LoDashExplicitWrapper<string>;
        toFileSize(fileSize: number, isAddZero?: boolean): LoDashExplicitWrapper<string>;
        toFixed(digits?: number): LoDashExplicitWrapper<number>;
        toKUnit(isAddZero?: boolean): LoDashExplicitWrapper<string>;
        toPadNumber(size: number): LoDashExplicitWrapper<string>;
        toPercent(max?: number, digits?: number): LoDashExplicitWrapper<number>;
        toRegExp(flags?: string): LoDashExplicitWrapper<RegExp>;
        toRgb(): LoDashExplicitWrapper<RGB>;
        toSearchRegExp(flags?: string): LoDashExplicitWrapper<RegExp>;
        toSearchString(ignoreWhitespace?: boolean): LoDashExplicitWrapper<string>;
    }
}
export interface RGB {
    r: number;
    g: number;
    b: number;
}
export declare const LODASH_MIXIN: {
    readonly aesEncrypt: (data: any, key?: string, opts?: any) => string;
    readonly aesDecrypt: (code: string, key?: string, opts?: any) => any;
    readonly arrayInsert: (arr: any[], item: any, index: number) => any[];
    readonly arrayJoin: (arr: any[], joinSymbol?: string) => string;
    readonly arrayUpdate: (arr: any[], item: any, index?: number) => any[];
    readonly arrayUpsert: (arr: any[], item: any, index?: number, type?: string) => any[];
    readonly arrayResert: (arr: any[], item: any, index?: number, type?: string) => any[];
    readonly coerce: (value: any, defaultValue?: any) => any;
    readonly escapeRegExp: (str: string) => string;
    readonly isStrictEmpty: (value: any) => boolean;
    readonly matchAll: (regex: RegExp, value: string) => any[];
    readonly search: (str: string, match: string) => boolean;
    readonly staticObservable: (value?: any) => Observable<any>;
    readonly stripAccentedCharacters: (str: string) => string;
    readonly stripHtml: (html: string) => string;
    readonly toCommas: (num: number, isAddZero?: boolean) => string;
    readonly toFileSize: (fileSize: number, isAddZero?: boolean) => string;
    readonly toFixed: (num: number, digits?: number) => number;
    readonly toKUnit: (num: number, isAddZero?: boolean) => string;
    readonly toPadNumber: (num: number, size: number) => string;
    readonly toPercent: (num: number, max?: number, digits?: number) => number;
    readonly toRegExp: (str: string, flags?: string) => RegExp;
    readonly toRgb: (hex: string) => RGB;
    readonly toSearchRegExp: (str: string, flags?: string) => RegExp;
    readonly toSearchString: (str: string, ignoreWhitespace?: boolean) => string;
};
