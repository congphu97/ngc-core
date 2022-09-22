import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ClonePipe implements PipeTransform {
    /**
     * @param {any} data
     * @param {boolean=} isDeep
     * @return {any}
     */
    transform(data: any, isDeep?: boolean): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClonePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ClonePipe, "clone">;
}
