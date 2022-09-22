import * as i0 from "@angular/core";
export declare class LoopService {
    private _intervals;
    /**
     * @param {() => void)} fn
     * @param {number} time
     * @return {number} index
     */
    set(fn: () => void, time: number): number;
    /**
     * @param {number} index
     * @return {void}
     */
    cancel(index: number): void;
    /**
     * @return {void}
     */
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoopService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoopService>;
}
