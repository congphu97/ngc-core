import { ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export interface ScrollEvent {
    scrollingX: boolean;
    scrollingY: boolean;
    scrollingUp: boolean;
    scrollingDown: boolean;
    scrollingLeft: boolean;
    scrollingRight: boolean;
    scrollReachTop: boolean;
    scrollReachBottom: boolean;
    scrollReachLeft: boolean;
    scrollReachRight: boolean;
    scrollTop: number;
    scrollLeft: number;
    scrollWidth: number;
    scrollHeight: number;
    width: number;
    height: number;
}
export declare class DetectScrollDirective implements AfterViewInit {
    private _elementRef;
    delay: number;
    offset: number;
    scrolling: EventEmitter<ScrollEvent>;
    scrollingX: EventEmitter<WheelEvent>;
    scrollingY: EventEmitter<WheelEvent>;
    scrollingUp: EventEmitter<WheelEvent>;
    scrollingDown: EventEmitter<WheelEvent>;
    scrollingLeft: EventEmitter<WheelEvent>;
    scrollingRight: EventEmitter<WheelEvent>;
    scrollReachTop: EventEmitter<WheelEvent>;
    scrollReachBottom: EventEmitter<WheelEvent>;
    scrollReachLeft: EventEmitter<WheelEvent>;
    scrollReachRight: EventEmitter<WheelEvent>;
    scrolling$: Subject<any>;
    private _lastScrollTop;
    private _lastScrollLeft;
    get scrollable(): boolean;
    get scrollableX(): boolean;
    get scrollableY(): boolean;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef: ElementRef);
    triggerScroll(event?: WheelEvent): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @param {HTMLElement} element
     * @param {WheelEvent=} event
     * @return {void}
     */
    private _detectScroll;
    static ɵfac: i0.ɵɵFactoryDeclaration<DetectScrollDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DetectScrollDirective, "[detectScroll]", ["detectScroll"], { "delay": "delay"; "offset": "offset"; }, { "scrolling": "scrolling"; "scrollingX": "scrollingX"; "scrollingY": "scrollingY"; "scrollingUp": "scrollingUp"; "scrollingDown": "scrollingDown"; "scrollingLeft": "scrollingLeft"; "scrollingRight": "scrollingRight"; "scrollReachTop": "scrollReachTop"; "scrollReachBottom": "scrollReachBottom"; "scrollReachLeft": "scrollReachLeft"; "scrollReachRight": "scrollReachRight"; }, never, never, false>;
}
