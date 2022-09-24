import { Validator, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MinGreaterThanDirective implements Validator {
    minGreaterThan: number;
    /**
     * @param {FormControl} c
     * @return {any}
     */
    validate(c: FormControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<MinGreaterThanDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MinGreaterThanDirective, "[minGreaterThan][formControlName],[minGreaterThan][formControl],[minGreaterThan][ngModel]", never, { "minGreaterThan": "minGreaterThan"; }, {}, never>;
}
