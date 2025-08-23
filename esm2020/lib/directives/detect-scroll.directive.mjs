import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import _ from 'lodash';
import { DefaultValue, CoerceNumber } from '../decorators';
import * as i0 from "@angular/core";
export class DetectScrollDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.delay = 0;
        this.offset = 0;
        this.scrolling = new EventEmitter();
        this.scrollingX = new EventEmitter();
        this.scrollingY = new EventEmitter();
        this.scrollingUp = new EventEmitter();
        this.scrollingDown = new EventEmitter();
        this.scrollingLeft = new EventEmitter();
        this.scrollingRight = new EventEmitter();
        this.scrollReachTop = new EventEmitter();
        this.scrollReachBottom = new EventEmitter();
        this.scrollReachLeft = new EventEmitter();
        this.scrollReachRight = new EventEmitter();
        this.scrolling$ = new Subject();
        this._lastScrollTop = 0;
        this._lastScrollLeft = 0;
    }
    get scrollable() {
        return this.scrollableX || this.scrollableY;
    }
    get scrollableX() {
        const element = this._elementRef.nativeElement;
        const scrollWidth = element.scrollWidth;
        const { width, height } = element.getBoundingClientRect();
        return !!height && !!width && scrollWidth !== width;
    }
    get scrollableY() {
        const element = this._elementRef.nativeElement;
        const scrollHeight = element.scrollHeight;
        const { width, height } = element.getBoundingClientRect();
        return !!height && !!width && scrollHeight !== height;
    }
    triggerScroll(event) {
        _.isNil(this.delay)
            ? this._detectScroll(this._elementRef.nativeElement, event)
            : setTimeout(() => this._detectScroll(this._elementRef.nativeElement, event), this.delay);
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        setTimeout(() => this._detectScroll(this._elementRef.nativeElement));
    }
    /**
     * @param {HTMLElement} element
     * @param {WheelEvent=} event
     * @return {void}
     */
    _detectScroll(element, event) {
        const scrollTop = Math.abs(element.scrollTop);
        const scrollLeft = Math.abs(element.scrollLeft);
        const scrollWidth = element.scrollWidth;
        const scrollHeight = element.scrollHeight;
        const { width, height } = element.getBoundingClientRect();
        let scrollingX = false;
        let scrollingY = false;
        let scrollingUp = false;
        let scrollingDown = false;
        let scrollingLeft = false;
        let scrollingRight = false;
        let scrollReachTop = false;
        let scrollReachBottom = false;
        let scrollReachLeft = false;
        let scrollReachRight = false;
        // In case scrolling X
        if (scrollLeft !== this._lastScrollLeft) {
            scrollingX = true;
            scrollingLeft = scrollLeft < this._lastScrollLeft;
            scrollingRight = scrollLeft > this._lastScrollLeft;
            this.scrollingX.emit(event);
            scrollingLeft && this.scrollingLeft.emit(event);
            scrollingRight && this.scrollingRight.emit(event);
        }
        // In case scrolling Y
        if (scrollTop !== this._lastScrollTop) {
            scrollingY = true;
            scrollingUp = scrollTop < this._lastScrollTop;
            scrollingDown = scrollTop > this._lastScrollTop;
            this.scrollingY.emit(event);
            scrollingUp && this.scrollingUp.emit(event);
            scrollingDown && this.scrollingDown.emit(event);
        }
        // In case scroll reach top
        if ((!this.scrollableY && !scrollTop && !scrollingX && !scrollingDown)
            || (scrollingUp
                && (Math.ceil(scrollTop) === 0
                    || (Math.ceil(this._lastScrollTop) > this.offset
                        && Math.ceil(scrollTop) <= this.offset)))) {
            scrollReachTop = true;
            this.scrollReachTop.emit(event);
        }
        // In case scroll reach bottom
        if ((!this.scrollableY && !scrollTop && !scrollingX && !scrollingUp)
            || (scrollingDown
                && (Math.ceil(scrollTop) === (scrollHeight - Math.ceil(height))
                    || (Math.ceil(this._lastScrollTop) < (scrollHeight - Math.ceil(height) - this.offset)
                        && Math.ceil(scrollTop) >= (scrollHeight - Math.ceil(height) - this.offset))))) {
            scrollReachBottom = true;
            this.scrollReachBottom.emit(event);
        }
        // In case scroll reach left
        if ((!this.scrollableX && !scrollLeft && !scrollingY && !scrollingRight)
            || (scrollingLeft
                && (Math.ceil(scrollLeft) === 0
                    || (Math.ceil(this._lastScrollLeft) > this.offset
                        && Math.ceil(scrollLeft) <= this.offset)))) {
            scrollReachLeft = true;
            this.scrollReachLeft.emit(event);
        }
        // In case scroll reach right
        if ((!this.scrollableX && !scrollLeft && !scrollingY && !scrollingLeft)
            || (scrollingRight
                && (Math.ceil(scrollLeft) === (scrollWidth - Math.ceil(width))
                    || (Math.ceil(this._lastScrollLeft) < (scrollWidth - Math.ceil(width) - this.offset)
                        && Math.ceil(scrollLeft) >= (scrollWidth - Math.ceil(width) - this.offset))))) {
            scrollReachRight = true;
            this.scrollReachRight.emit(event);
        }
        this._lastScrollTop = scrollTop;
        this._lastScrollLeft = scrollLeft;
        const scrollEvent = {
            scrollingX, scrollingY,
            scrollingUp, scrollingDown,
            scrollingLeft, scrollingRight,
            scrollReachTop, scrollReachBottom,
            scrollReachLeft, scrollReachRight,
            scrollTop, scrollLeft,
            scrollWidth, scrollHeight,
            width, height,
        };
        this.scrolling.emit(scrollEvent);
        this.scrolling$.next(scrollEvent);
    }
}
DetectScrollDirective.ɵfac = function DetectScrollDirective_Factory(t) { return new (t || DetectScrollDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
DetectScrollDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DetectScrollDirective, selectors: [["", "detectScroll", ""]], hostBindings: function DetectScrollDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function DetectScrollDirective_scroll_HostBindingHandler($event) { return ctx.triggerScroll($event); });
    } }, inputs: { delay: "delay", offset: "offset" }, outputs: { scrolling: "scrolling", scrollingX: "scrollingX", scrollingY: "scrollingY", scrollingUp: "scrollingUp", scrollingDown: "scrollingDown", scrollingLeft: "scrollingLeft", scrollingRight: "scrollingRight", scrollReachTop: "scrollReachTop", scrollReachBottom: "scrollReachBottom", scrollReachLeft: "scrollReachLeft", scrollReachRight: "scrollReachRight" }, exportAs: ["detectScroll"] });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], DetectScrollDirective.prototype, "delay", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], DetectScrollDirective.prototype, "offset", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetectScrollDirective, [{
        type: Directive,
        args: [{ selector: '[detectScroll]', exportAs: 'detectScroll' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { delay: [{
            type: Input
        }], offset: [{
            type: Input
        }], scrolling: [{
            type: Output
        }], scrollingX: [{
            type: Output
        }], scrollingY: [{
            type: Output
        }], scrollingUp: [{
            type: Output
        }], scrollingDown: [{
            type: Output
        }], scrollingLeft: [{
            type: Output
        }], scrollingRight: [{
            type: Output
        }], scrollReachTop: [{
            type: Output
        }], scrollReachBottom: [{
            type: Output
        }], scrollReachLeft: [{
            type: Output
        }], scrollReachRight: [{
            type: Output
        }], triggerScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0ZWN0LXNjcm9sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvZGV0ZWN0LXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsVUFBVSxFQUNyQixZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDM0IsWUFBWSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQXNCM0QsTUFBTSxPQUFPLHFCQUFxQjtJQTBDakM7OztPQUdHO0lBQ0gsWUFBcUIsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUE1Q0ksVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRWxELGNBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUN2RSxlQUFVLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdEUsZUFBVSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RFLGdCQUFXLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdkUsa0JBQWEsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN6RSxrQkFBYSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pFLG1CQUFjLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDMUUsbUJBQWMsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMxRSxzQkFBaUIsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM3RSxvQkFBZSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNFLHFCQUFnQixHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBRXRGLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUU3QyxtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixvQkFBZSxHQUFXLENBQUMsQ0FBQztJQTBCWSxDQUFDO0lBeEJqRCxJQUFJLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2QsTUFBTSxPQUFPLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQzVELE1BQU0sV0FBVyxHQUFXLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDaEQsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBWSxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUVuRSxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxXQUFXLEtBQUssS0FBSyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDZCxNQUFNLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDNUQsTUFBTSxZQUFZLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNsRCxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFZLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRW5FLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLFlBQVksS0FBSyxNQUFNLENBQUM7SUFDdkQsQ0FBQztJQVNNLGFBQWEsQ0FBRSxLQUFrQjtRQUN2QyxDQUFDLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUU7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFFO1lBQzdELENBQUMsQ0FBQyxVQUFVLENBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDaEcsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNkLFVBQVUsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFFLENBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGFBQWEsQ0FBRSxPQUFvQixFQUFFLEtBQWtCO1FBQzlELE1BQU0sU0FBUyxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBRSxDQUFDO1FBQ3hELE1BQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBRSxDQUFDO1FBQzFELE1BQU0sV0FBVyxHQUFXLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDaEQsTUFBTSxZQUFZLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNsRCxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFZLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ25FLElBQUksVUFBVSxHQUFZLEtBQUssQ0FBQztRQUNoQyxJQUFJLFVBQVUsR0FBWSxLQUFLLENBQUM7UUFDaEMsSUFBSSxXQUFXLEdBQVksS0FBSyxDQUFDO1FBQ2pDLElBQUksYUFBYSxHQUFZLEtBQUssQ0FBQztRQUNuQyxJQUFJLGFBQWEsR0FBWSxLQUFLLENBQUM7UUFDbkMsSUFBSSxjQUFjLEdBQVksS0FBSyxDQUFDO1FBQ3BDLElBQUksY0FBYyxHQUFZLEtBQUssQ0FBQztRQUNwQyxJQUFJLGlCQUFpQixHQUFZLEtBQUssQ0FBQztRQUN2QyxJQUFJLGVBQWUsR0FBWSxLQUFLLENBQUM7UUFDckMsSUFBSSxnQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFdEMsc0JBQXNCO1FBQ3RCLElBQUssVUFBVSxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUc7WUFDMUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNsQixhQUFhLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDbEQsY0FBYyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRW5ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO1lBQzlCLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztZQUNsRCxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7U0FDcEQ7UUFFRCxzQkFBc0I7UUFDdEIsSUFBSyxTQUFTLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBRztZQUN4QyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLFdBQVcsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM5QyxhQUFhLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7WUFDOUIsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO1lBQzlDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztTQUNsRDtRQUVELDJCQUEyQjtRQUMzQixJQUFLLENBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFFO2VBQ3JFLENBQUUsV0FBVzttQkFDWixDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsU0FBUyxDQUFFLEtBQUssQ0FBQzt1QkFDN0IsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxjQUFjLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTTsyQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBRSxTQUFTLENBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUUsQ0FBRSxFQUFHO1lBQ3BELGNBQWMsR0FBRyxJQUFJLENBQUM7WUFFdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7U0FDbEM7UUFFRCw4QkFBOEI7UUFDOUIsSUFBSyxDQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBRTtlQUNuRSxDQUFFLGFBQWE7bUJBQ2QsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLFNBQVMsQ0FBRSxLQUFLLENBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFFLENBQUU7dUJBQ2xFLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFFLEdBQUcsQ0FBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFOzJCQUN4RixJQUFJLENBQUMsSUFBSSxDQUFFLFNBQVMsQ0FBRSxJQUFJLENBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFFLENBQUUsQ0FBRSxFQUFHO1lBQzdGLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUV6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO1NBQ3JDO1FBRUQsNEJBQTRCO1FBQzVCLElBQUssQ0FBRSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxjQUFjLENBQUU7ZUFDdkUsQ0FBRSxhQUFhO21CQUNkLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxVQUFVLENBQUUsS0FBSyxDQUFDO3VCQUM5QixDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNOzJCQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFFLFVBQVUsQ0FBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBRSxDQUFFLEVBQUc7WUFDckQsZUFBZSxHQUFHLElBQUksQ0FBQztZQUV2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztTQUNuQztRQUVELDZCQUE2QjtRQUM3QixJQUFLLENBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFFO2VBQ3RFLENBQUUsY0FBYzttQkFDZixDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsVUFBVSxDQUFFLEtBQUssQ0FBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBRTt1QkFDakUsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUUsR0FBRyxDQUFFLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUU7MkJBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUUsVUFBVSxDQUFFLElBQUksQ0FBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUUsQ0FBRSxDQUFFLEVBQUc7WUFDNUYsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBRXhCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7U0FDcEM7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztRQUVsQyxNQUFNLFdBQVcsR0FBZ0I7WUFDaEMsVUFBVSxFQUFFLFVBQVU7WUFDdEIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsYUFBYSxFQUFFLGNBQWM7WUFDN0IsY0FBYyxFQUFFLGlCQUFpQjtZQUNqQyxlQUFlLEVBQUUsZ0JBQWdCO1lBQ2pDLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLEtBQUssRUFBRSxNQUFNO1NBQ2IsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLFdBQVcsQ0FBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLFdBQVcsQ0FBRSxDQUFDO0lBQ3JDLENBQUM7OzBGQXRLVyxxQkFBcUI7d0VBQXJCLHFCQUFxQjswR0FBckIseUJBQXFCOzs7SUFFdkIsWUFBWSxFQUFFO0lBQUUsWUFBWSxFQUFFOztvREFBMEI7O0lBQ3hELFlBQVksRUFBRTtJQUFFLFlBQVksRUFBRTs7cURBQTJCO3VGQUh2RCxxQkFBcUI7Y0FEakMsU0FBUztlQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7NkRBR2xCLEtBQUs7a0JBQXBELEtBQUs7WUFDMEMsTUFBTTtrQkFBckQsS0FBSztZQUVXLFNBQVM7a0JBQXpCLE1BQU07WUFDVSxVQUFVO2tCQUExQixNQUFNO1lBQ1UsVUFBVTtrQkFBMUIsTUFBTTtZQUNVLFdBQVc7a0JBQTNCLE1BQU07WUFDVSxhQUFhO2tCQUE3QixNQUFNO1lBQ1UsYUFBYTtrQkFBN0IsTUFBTTtZQUNVLGNBQWM7a0JBQTlCLE1BQU07WUFDVSxjQUFjO2tCQUE5QixNQUFNO1lBQ1UsaUJBQWlCO2tCQUFqQyxNQUFNO1lBQ1UsZUFBZTtrQkFBL0IsTUFBTTtZQUNVLGdCQUFnQjtrQkFBaEMsTUFBTTtZQWtDQSxhQUFhO2tCQURuQixZQUFZO21CQUFFLFFBQVEsRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCxcblx0RXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LFxuXHRIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBEZWZhdWx0VmFsdWUsIENvZXJjZU51bWJlciB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbEV2ZW50IHtcblx0c2Nyb2xsaW5nWDogYm9vbGVhbjtcblx0c2Nyb2xsaW5nWTogYm9vbGVhbjtcblx0c2Nyb2xsaW5nVXA6IGJvb2xlYW47XG5cdHNjcm9sbGluZ0Rvd246IGJvb2xlYW47XG5cdHNjcm9sbGluZ0xlZnQ6IGJvb2xlYW47XG5cdHNjcm9sbGluZ1JpZ2h0OiBib29sZWFuO1xuXHRzY3JvbGxSZWFjaFRvcDogYm9vbGVhbjtcblx0c2Nyb2xsUmVhY2hCb3R0b206IGJvb2xlYW47XG5cdHNjcm9sbFJlYWNoTGVmdDogYm9vbGVhbjtcblx0c2Nyb2xsUmVhY2hSaWdodDogYm9vbGVhbjtcblx0c2Nyb2xsVG9wOiBudW1iZXI7XG5cdHNjcm9sbExlZnQ6IG51bWJlcjtcblx0c2Nyb2xsV2lkdGg6IG51bWJlcjtcblx0c2Nyb2xsSGVpZ2h0OiBudW1iZXI7XG5cdHdpZHRoOiBudW1iZXI7XG5cdGhlaWdodDogbnVtYmVyO1xufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZGV0ZWN0U2Nyb2xsXScsIGV4cG9ydEFzOiAnZGV0ZWN0U2Nyb2xsJyB9KVxuZXhwb3J0IGNsYXNzIERldGVjdFNjcm9sbERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIGRlbGF5OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBvZmZzZXQ6IG51bWJlciA9IDA7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBzY3JvbGxpbmc6IEV2ZW50RW1pdHRlcjxTY3JvbGxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFNjcm9sbEV2ZW50PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNjcm9sbGluZ1g6IEV2ZW50RW1pdHRlcjxXaGVlbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8V2hlZWxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzY3JvbGxpbmdZOiBFdmVudEVtaXR0ZXI8V2hlZWxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFdoZWVsRXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2Nyb2xsaW5nVXA6IEV2ZW50RW1pdHRlcjxXaGVlbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8V2hlZWxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzY3JvbGxpbmdEb3duOiBFdmVudEVtaXR0ZXI8V2hlZWxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFdoZWVsRXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2Nyb2xsaW5nTGVmdDogRXZlbnRFbWl0dGVyPFdoZWVsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxXaGVlbEV2ZW50PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNjcm9sbGluZ1JpZ2h0OiBFdmVudEVtaXR0ZXI8V2hlZWxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFdoZWVsRXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2Nyb2xsUmVhY2hUb3A6IEV2ZW50RW1pdHRlcjxXaGVlbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8V2hlZWxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzY3JvbGxSZWFjaEJvdHRvbTogRXZlbnRFbWl0dGVyPFdoZWVsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxXaGVlbEV2ZW50PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNjcm9sbFJlYWNoTGVmdDogRXZlbnRFbWl0dGVyPFdoZWVsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxXaGVlbEV2ZW50PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNjcm9sbFJlYWNoUmlnaHQ6IEV2ZW50RW1pdHRlcjxXaGVlbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8V2hlZWxFdmVudD4oKTtcblxuXHRwdWJsaWMgc2Nyb2xsaW5nJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG5cdHByaXZhdGUgX2xhc3RTY3JvbGxUb3A6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX2xhc3RTY3JvbGxMZWZ0OiBudW1iZXIgPSAwO1xuXG5cdGdldCBzY3JvbGxhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNjcm9sbGFibGVYIHx8IHRoaXMuc2Nyb2xsYWJsZVk7XG5cdH1cblxuXHRnZXQgc2Nyb2xsYWJsZVgoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0Y29uc3Qgc2Nyb2xsV2lkdGg6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsV2lkdGg7XG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH06IERPTVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0cmV0dXJuICEhaGVpZ2h0ICYmICEhd2lkdGggJiYgc2Nyb2xsV2lkdGggIT09IHdpZHRoO1xuXHR9XG5cblx0Z2V0IHNjcm9sbGFibGVZKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdGNvbnN0IHNjcm9sbEhlaWdodDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH06IERPTVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0cmV0dXJuICEhaGVpZ2h0ICYmICEhd2lkdGggJiYgc2Nyb2xsSGVpZ2h0ICE9PSBoZWlnaHQ7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHRASG9zdExpc3RlbmVyKCAnc2Nyb2xsJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJTY3JvbGwoIGV2ZW50PzogV2hlZWxFdmVudCApIHtcblx0XHRfLmlzTmlsKCB0aGlzLmRlbGF5IClcblx0XHRcdD8gdGhpcy5fZGV0ZWN0U2Nyb2xsKCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50IClcblx0XHRcdDogc2V0VGltZW91dCggKCkgPT4gdGhpcy5fZGV0ZWN0U2Nyb2xsKCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50ICksIHRoaXMuZGVsYXkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLl9kZXRlY3RTY3JvbGwoIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge1doZWVsRXZlbnQ9fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfZGV0ZWN0U2Nyb2xsKCBlbGVtZW50OiBIVE1MRWxlbWVudCwgZXZlbnQ/OiBXaGVlbEV2ZW50ICkge1xuXHRcdGNvbnN0IHNjcm9sbFRvcDogbnVtYmVyID0gTWF0aC5hYnMoIGVsZW1lbnQuc2Nyb2xsVG9wICk7XG5cdFx0Y29uc3Qgc2Nyb2xsTGVmdDogbnVtYmVyID0gTWF0aC5hYnMoIGVsZW1lbnQuc2Nyb2xsTGVmdCApO1xuXHRcdGNvbnN0IHNjcm9sbFdpZHRoOiBudW1iZXIgPSBlbGVtZW50LnNjcm9sbFdpZHRoO1xuXHRcdGNvbnN0IHNjcm9sbEhlaWdodDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH06IERPTVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBzY3JvbGxpbmdYOiBib29sZWFuID0gZmFsc2U7XG5cdFx0bGV0IHNjcm9sbGluZ1k6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHRsZXQgc2Nyb2xsaW5nVXA6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHRsZXQgc2Nyb2xsaW5nRG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdGxldCBzY3JvbGxpbmdMZWZ0OiBib29sZWFuID0gZmFsc2U7XG5cdFx0bGV0IHNjcm9sbGluZ1JpZ2h0OiBib29sZWFuID0gZmFsc2U7XG5cdFx0bGV0IHNjcm9sbFJlYWNoVG9wOiBib29sZWFuID0gZmFsc2U7XG5cdFx0bGV0IHNjcm9sbFJlYWNoQm90dG9tOiBib29sZWFuID0gZmFsc2U7XG5cdFx0bGV0IHNjcm9sbFJlYWNoTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdGxldCBzY3JvbGxSZWFjaFJpZ2h0OiBib29sZWFuID0gZmFsc2U7XG5cblx0XHQvLyBJbiBjYXNlIHNjcm9sbGluZyBYXG5cdFx0aWYgKCBzY3JvbGxMZWZ0ICE9PSB0aGlzLl9sYXN0U2Nyb2xsTGVmdCApIHtcblx0XHRcdHNjcm9sbGluZ1ggPSB0cnVlO1xuXHRcdFx0c2Nyb2xsaW5nTGVmdCA9IHNjcm9sbExlZnQgPCB0aGlzLl9sYXN0U2Nyb2xsTGVmdDtcblx0XHRcdHNjcm9sbGluZ1JpZ2h0ID0gc2Nyb2xsTGVmdCA+IHRoaXMuX2xhc3RTY3JvbGxMZWZ0O1xuXG5cdFx0XHR0aGlzLnNjcm9sbGluZ1guZW1pdCggZXZlbnQgKTtcblx0XHRcdHNjcm9sbGluZ0xlZnQgJiYgdGhpcy5zY3JvbGxpbmdMZWZ0LmVtaXQoIGV2ZW50ICk7XG5cdFx0XHRzY3JvbGxpbmdSaWdodCAmJiB0aGlzLnNjcm9sbGluZ1JpZ2h0LmVtaXQoIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0Ly8gSW4gY2FzZSBzY3JvbGxpbmcgWVxuXHRcdGlmICggc2Nyb2xsVG9wICE9PSB0aGlzLl9sYXN0U2Nyb2xsVG9wICkge1xuXHRcdFx0c2Nyb2xsaW5nWSA9IHRydWU7XG5cdFx0XHRzY3JvbGxpbmdVcCA9IHNjcm9sbFRvcCA8IHRoaXMuX2xhc3RTY3JvbGxUb3A7XG5cdFx0XHRzY3JvbGxpbmdEb3duID0gc2Nyb2xsVG9wID4gdGhpcy5fbGFzdFNjcm9sbFRvcDtcblxuXHRcdFx0dGhpcy5zY3JvbGxpbmdZLmVtaXQoIGV2ZW50ICk7XG5cdFx0XHRzY3JvbGxpbmdVcCAmJiB0aGlzLnNjcm9sbGluZ1VwLmVtaXQoIGV2ZW50ICk7XG5cdFx0XHRzY3JvbGxpbmdEb3duICYmIHRoaXMuc2Nyb2xsaW5nRG93bi5lbWl0KCBldmVudCApO1xuXHRcdH1cblxuXHRcdC8vIEluIGNhc2Ugc2Nyb2xsIHJlYWNoIHRvcFxuXHRcdGlmICggKCAhdGhpcy5zY3JvbGxhYmxlWSAmJiAhc2Nyb2xsVG9wICYmICFzY3JvbGxpbmdYICYmICFzY3JvbGxpbmdEb3duIClcblx0XHRcdHx8ICggc2Nyb2xsaW5nVXBcblx0XHRcdFx0JiYgKCBNYXRoLmNlaWwoIHNjcm9sbFRvcCApID09PSAwXG5cdFx0XHRcdFx0fHwgKCBNYXRoLmNlaWwoIHRoaXMuX2xhc3RTY3JvbGxUb3AgKSA+IHRoaXMub2Zmc2V0XG5cdFx0XHRcdFx0XHQmJiBNYXRoLmNlaWwoIHNjcm9sbFRvcCApIDw9IHRoaXMub2Zmc2V0ICkgKSApICkge1xuXHRcdFx0c2Nyb2xsUmVhY2hUb3AgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLnNjcm9sbFJlYWNoVG9wLmVtaXQoIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0Ly8gSW4gY2FzZSBzY3JvbGwgcmVhY2ggYm90dG9tXG5cdFx0aWYgKCAoICF0aGlzLnNjcm9sbGFibGVZICYmICFzY3JvbGxUb3AgJiYgIXNjcm9sbGluZ1ggJiYgIXNjcm9sbGluZ1VwIClcblx0XHRcdHx8ICggc2Nyb2xsaW5nRG93blxuXHRcdFx0XHQmJiAoIE1hdGguY2VpbCggc2Nyb2xsVG9wICkgPT09ICggc2Nyb2xsSGVpZ2h0IC0gTWF0aC5jZWlsKCBoZWlnaHQgKSApXG5cdFx0XHRcdFx0fHwgKCBNYXRoLmNlaWwoIHRoaXMuX2xhc3RTY3JvbGxUb3AgKSA8ICggc2Nyb2xsSGVpZ2h0IC0gTWF0aC5jZWlsKCBoZWlnaHQgKSAtIHRoaXMub2Zmc2V0IClcblx0XHRcdFx0XHRcdCYmIE1hdGguY2VpbCggc2Nyb2xsVG9wICkgPj0gKCBzY3JvbGxIZWlnaHQgLSBNYXRoLmNlaWwoIGhlaWdodCApIC0gdGhpcy5vZmZzZXQgKSApICkgKSApIHtcblx0XHRcdHNjcm9sbFJlYWNoQm90dG9tID0gdHJ1ZTtcblxuXHRcdFx0dGhpcy5zY3JvbGxSZWFjaEJvdHRvbS5lbWl0KCBldmVudCApO1xuXHRcdH1cblxuXHRcdC8vIEluIGNhc2Ugc2Nyb2xsIHJlYWNoIGxlZnRcblx0XHRpZiAoICggIXRoaXMuc2Nyb2xsYWJsZVggJiYgIXNjcm9sbExlZnQgJiYgIXNjcm9sbGluZ1kgJiYgIXNjcm9sbGluZ1JpZ2h0IClcblx0XHRcdHx8ICggc2Nyb2xsaW5nTGVmdFxuXHRcdFx0XHQmJiAoIE1hdGguY2VpbCggc2Nyb2xsTGVmdCApID09PSAwXG5cdFx0XHRcdFx0fHwgKCBNYXRoLmNlaWwoIHRoaXMuX2xhc3RTY3JvbGxMZWZ0ICkgPiB0aGlzLm9mZnNldFxuXHRcdFx0XHRcdFx0JiYgTWF0aC5jZWlsKCBzY3JvbGxMZWZ0ICkgPD0gdGhpcy5vZmZzZXQgKSApICkgKSB7XG5cdFx0XHRzY3JvbGxSZWFjaExlZnQgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLnNjcm9sbFJlYWNoTGVmdC5lbWl0KCBldmVudCApO1xuXHRcdH1cblxuXHRcdC8vIEluIGNhc2Ugc2Nyb2xsIHJlYWNoIHJpZ2h0XG5cdFx0aWYgKCAoICF0aGlzLnNjcm9sbGFibGVYICYmICFzY3JvbGxMZWZ0ICYmICFzY3JvbGxpbmdZICYmICFzY3JvbGxpbmdMZWZ0IClcblx0XHRcdHx8ICggc2Nyb2xsaW5nUmlnaHRcblx0XHRcdFx0JiYgKCBNYXRoLmNlaWwoIHNjcm9sbExlZnQgKSA9PT0gKCBzY3JvbGxXaWR0aCAtIE1hdGguY2VpbCggd2lkdGggKSApXG5cdFx0XHRcdFx0fHwgKCBNYXRoLmNlaWwoIHRoaXMuX2xhc3RTY3JvbGxMZWZ0ICkgPCAoIHNjcm9sbFdpZHRoIC0gTWF0aC5jZWlsKCB3aWR0aCApIC0gdGhpcy5vZmZzZXQgKVxuXHRcdFx0XHRcdFx0JiYgTWF0aC5jZWlsKCBzY3JvbGxMZWZ0ICkgPj0gKCBzY3JvbGxXaWR0aCAtIE1hdGguY2VpbCggd2lkdGggKSAtIHRoaXMub2Zmc2V0ICkgKSApICkgKSB7XG5cdFx0XHRzY3JvbGxSZWFjaFJpZ2h0ID0gdHJ1ZTtcblxuXHRcdFx0dGhpcy5zY3JvbGxSZWFjaFJpZ2h0LmVtaXQoIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcblx0XHR0aGlzLl9sYXN0U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG5cblx0XHRjb25zdCBzY3JvbGxFdmVudDogU2Nyb2xsRXZlbnQgPSB7XG5cdFx0XHRzY3JvbGxpbmdYLCBzY3JvbGxpbmdZLFxuXHRcdFx0c2Nyb2xsaW5nVXAsIHNjcm9sbGluZ0Rvd24sXG5cdFx0XHRzY3JvbGxpbmdMZWZ0LCBzY3JvbGxpbmdSaWdodCxcblx0XHRcdHNjcm9sbFJlYWNoVG9wLCBzY3JvbGxSZWFjaEJvdHRvbSxcblx0XHRcdHNjcm9sbFJlYWNoTGVmdCwgc2Nyb2xsUmVhY2hSaWdodCxcblx0XHRcdHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCxcblx0XHRcdHNjcm9sbFdpZHRoLCBzY3JvbGxIZWlnaHQsXG5cdFx0XHR3aWR0aCwgaGVpZ2h0LFxuXHRcdH07XG5cblx0XHR0aGlzLnNjcm9sbGluZy5lbWl0KCBzY3JvbGxFdmVudCApO1xuXHRcdHRoaXMuc2Nyb2xsaW5nJC5uZXh0KCBzY3JvbGxFdmVudCApO1xuXHR9XG5cbn1cbiJdfQ==