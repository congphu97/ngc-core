import { Title } from '@angular/platform-browser';
import { Router, NavigationExtras } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AppConfig } from '../injection-token';
import { StorageService } from './storage.service';
import * as i0 from "@angular/core";
export interface PageURL {
    path: string;
    extras?: NavigationExtras;
}
export declare class PageService {
    readonly appConfig: AppConfig;
    private _router;
    private _titleService;
    private _storageService;
    cacheKey: string;
    private _titleChange$;
    private _processChange$;
    /**
     * @return {ReplaySubject}
     */
    get title(): ReplaySubject<string>;
    /**
     * @return {ReplaySubject}
     */
    get processing(): ReplaySubject<boolean>;
    /**
     * @constructor
     * @param {AppConfig} appConfig
     * @param {Router} _router
     * @param {Title} _titleService
     * @param {StorageService} _storageService
     */
    constructor(appConfig: AppConfig, _router: Router, _titleService: Title, _storageService: StorageService);
    /**
     * @param {string} title
     * @param {string=} prefix
     * @return {void}
     */
    setTitle(title: string, prefix?: string): void;
    /**
     * @return {string}
     */
    getTitle(): string;
    /**
     * @param {string} path
     * @param {NavigationExtras} extras
     * @return {void}
     */
    setCurrentURL(path: string, extras?: NavigationExtras): void;
    /**
     * @return {PageURL}
     */
    getCurrentURL(): PageURL;
    /**
     * @return {void}
     */
    navigateToCurrentURL(): void;
    /**
     * @param {boolean} isProcessing
     * @return {void}
     */
    setProcessing(isProcessing: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageService, [{ optional: true; }, null, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PageService>;
}
