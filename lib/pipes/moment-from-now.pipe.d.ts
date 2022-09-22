import { PipeTransform } from '@angular/core';
import { EmptyPipe } from './empty.pipe';
import * as i0 from "@angular/core";
export declare class MomentFromNowPipe extends EmptyPipe implements PipeTransform {
    /**
     * @param {any} input
     * @return {string}
     */
    transform(input: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MomentFromNowPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MomentFromNowPipe, "momentFromNow">;
}
