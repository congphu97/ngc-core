import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CanDeactivateGuardService {
    /**
     * @param {CanComponentDeactivate} component
     * @return {Observable<boolean> | Promise<boolean> | boolean}
     */
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanDeactivateGuardService.ɵfac = function CanDeactivateGuardService_Factory(t) { return new (t || CanDeactivateGuardService)(); };
CanDeactivateGuardService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CanDeactivateGuardService, factory: CanDeactivateGuardService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CanDeactivateGuardService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVMzQyxNQUFNLE9BQU8seUJBQXlCO0lBRXJDOzs7T0FHRztJQUNJLGFBQWEsQ0FBRSxTQUFpQztRQUN0RCxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25FLENBQUM7O2tHQVJXLHlCQUF5QjsrRUFBekIseUJBQXlCLFdBQXpCLHlCQUF5Qjt1RkFBekIseUJBQXlCO2NBRHJDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5EZWFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5Db21wb25lbnREZWFjdGl2YXRlIHtcblx0Y2FuRGVhY3RpdmF0ZTogKCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FuRGVhY3RpdmF0ZUd1YXJkU2VydmljZSBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGU8Q2FuQ29tcG9uZW50RGVhY3RpdmF0ZT4ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0NhbkNvbXBvbmVudERlYWN0aXZhdGV9IGNvbXBvbmVudFxuXHQgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW59XG5cdCAqL1xuXHRwdWJsaWMgY2FuRGVhY3RpdmF0ZSggY29tcG9uZW50OiBDYW5Db21wb25lbnREZWFjdGl2YXRlICk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudC5jYW5EZWFjdGl2YXRlID8gY29tcG9uZW50LmNhbkRlYWN0aXZhdGUoKSA6IHRydWU7XG5cdH1cblxufVxuIl19