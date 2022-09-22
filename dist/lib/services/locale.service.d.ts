import { TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { AppConfig } from '../injection-token';
import * as i0 from "@angular/core";
export declare class LocaleService {
    readonly appConfig: AppConfig;
    private _translateService;
    localeChange$: ReplaySubject<string>;
    private _locale;
    /**
     * @param {string} locale
     * @return {void}
     */
    set locale(locale: string);
    /**
     * @return {string}
     */
    get locale(): string;
    /**
     * @constructor
     * @param {AppConfig} appConfig
     * @param {TranslateService} _translateService
     */
    constructor(appConfig: AppConfig, _translateService: TranslateService);
    static ɵfac: i0.ɵɵFactoryDeclaration<LocaleService, [{ optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocaleService>;
}
