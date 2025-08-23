import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FilterPipe implements PipeTransform {
    /**
     * @param {any[]} items
     * @param {any} key
     * @param {any} matchValue
     * @param {boolean} diffComparison
     * @return {any[]}
     */
    transform(items: any[], key: any, matchValue: any, diffComparison?: boolean): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FilterPipe, "filter", false>;
}
