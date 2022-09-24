import { Directive, Input, Output, EventEmitter } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class NgInitDirective {
    constructor() {
        this._resultChange = new EventEmitter();
    }
    /**
     * @constructor
     */
    ngOnInit() {
        if (!_.isFunction(this._ngInit))
            return;
        this._resultChange.emit(this._ngInit());
    }
}
NgInitDirective.ɵfac = function NgInitDirective_Factory(t) { return new (t || NgInitDirective)(); };
NgInitDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NgInitDirective, selectors: [["", "ngInit", ""]], inputs: { _ngInit: "_ngInit" }, outputs: { _resultChange: "_resultChange" }, exportAs: ["ngInit"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgInitDirective, [{
        type: Directive,
        args: [{ selector: '[ngInit]', exportAs: 'ngInit' }]
    }], null, { _ngInit: [{
            type: Input
        }], _resultChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvbmctaW5pdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUNoQixZQUFZLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7QUFHdkIsTUFBTSxPQUFPLGVBQWU7SUFENUI7UUFLbUIsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQVc3RTtJQVRBOztPQUVHO0lBQ0gsUUFBUTtRQUNQLElBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUU7WUFBRyxPQUFPO1FBRTVDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO0lBQzNDLENBQUM7OzhFQWJXLGVBQWU7a0VBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtnQkFHckMsT0FBTztrQkFBdkIsS0FBSztZQUVZLGFBQWE7a0JBQTlCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsXG5cdE9uSW5pdCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nSW5pdF0nLCBleHBvcnRBczogJ25nSW5pdCcgfSlcbmV4cG9ydCBjbGFzcyBOZ0luaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIHByaXZhdGUgX25nSW5pdDogKCkgPT4gYW55O1xuXG5cdEBPdXRwdXQoKSBwcml2YXRlIF9yZXN1bHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKCAhXy5pc0Z1bmN0aW9uKCB0aGlzLl9uZ0luaXQgKSApIHJldHVybjtcblxuXHRcdHRoaXMuX3Jlc3VsdENoYW5nZS5lbWl0KCB0aGlzLl9uZ0luaXQoKSApO1xuXHR9XG5cbn1cbiJdfQ==