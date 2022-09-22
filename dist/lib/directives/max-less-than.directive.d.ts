import { Validator, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MaxLessThanDirective implements Validator {
    maxLessThan: number;
    /**
     * @param {FormControl} c
     * @return {any}
     */
    validate(c: FormControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<MaxLessThanDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MaxLessThanDirective, "[maxLessThan][formControlName],[maxLessThan][formControl],[maxLessThan][ngModel]", never, { "maxLessThan": "maxLessThan"; }, {}, never>;
}
