import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FindPipe implements PipeTransform {
    /**
     * @param {any[]} items
     * @param {any} key
     * @param {any} matchValue
     * @return {any}
     */
    transform(items: any[], key: any, matchValue: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FindPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FindPipe, "find", false>;
}
