import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export declare class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
    /**
     * @param {CanComponentDeactivate} component
     * @return {Observable<boolean> | Promise<boolean> | boolean}
     */
    canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CanDeactivateGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CanDeactivateGuardService>;
}
