import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class Filter2Pipe implements PipeTransform {
    private _previous;
    /**
     * @param {any[]} items
     * @param {any} key
     * @param {any} matchValue
     * @param {boolean=} diffComparison
     * @return {any[]}
     */
    transform(items: any[], key: any, matchValue: any, diffComparison?: boolean): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<Filter2Pipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Filter2Pipe, "filter2">;
}
