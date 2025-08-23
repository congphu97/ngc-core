import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class OrderByPipe implements PipeTransform {
    /**
     * @param {any} input
     * @return {any}
     */
    transform(input: any, [config]: any): any;
    /**
     * @param {any} a
     * @param {any} b
     * @return {number}
     */
    private _orderByComparator;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderByPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<OrderByPipe, "orderBy", false>;
}
