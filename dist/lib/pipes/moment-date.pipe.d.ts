import { PipeTransform } from '@angular/core';
import { DateTimeConfig } from '../injection-token';
import { EmptyPipe } from './empty.pipe';
import * as i0 from "@angular/core";
export declare class MomentDatePipe extends EmptyPipe implements PipeTransform {
    private _dateTimeConfig;
    /**
     * @constructor
     * @param {DateTimeConfig} _dateTimeConfig
     */
    constructor(_dateTimeConfig: DateTimeConfig);
    /**
     * @param {any} input
     * @param {string=} format
     * @param {boolean=} showTime
     * @return {string}
     */
    transform(input: any, format?: string, showTime?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MomentDatePipe, [{ optional: true; }]>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MomentDatePipe, "momentDate", false>;
}
