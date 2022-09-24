import * as i0 from "@angular/core";
export declare class MediaService {
    private _media;
    /**
     * @constructor
     */
    constructor();
    /**
     * @param {number} breakpoint - Breakpoint to check
     * @return {boolean}
     */
    is(breakpoint: string): boolean;
    /**
     * @param {number} width - Width to check
     * @return {boolean}
     */
    gt(width: number): boolean;
    /**
     * @param {number} width - Width to check
     * @return {boolean}
     */
    lt(width: number): boolean;
    /**
     * @param {number} width - Viewport width
     * @return {void}
     */
    setViewPort(width: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MediaService>;
}
