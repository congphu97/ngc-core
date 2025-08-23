import { Observable, Subject, ReplaySubject, merge, fromEvent, interval, Subscription, BehaviorSubject, forkJoin } from 'rxjs';
import CryptoJS from 'crypto-js';
import moment from 'moment-timezone';
import _ from 'lodash';
import * as i1$4 from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import * as i0 from '@angular/core';
import { Directive, Input, HostListener, EventEmitter, Output, InjectionToken, Pipe, Optional, Inject, Injectable, APP_INITIALIZER, Injector, NgModule, isDevMode } from '@angular/core';
import * as i1$2 from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import * as i1$6 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1$5 from '@ngx-translate/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import * as i1$3 from 'ngx-cookie-service';
import { CookieService } from 'ngx-cookie-service';
import { __decorate, __metadata } from 'tslib';
import { coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty } from '@angular/cdk/coercion';
import { takeUntil, takeWhile, take, finalize, map, filter, single } from 'rxjs/operators';
import * as i1$1 from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import * as i1 from '@angular/common';
import { LOCATION_INITIALIZED, PercentPipe } from '@angular/common';
import vi from 'moment/locale/vi';
import * as i1$7 from '@angular/service-worker';
import io from 'socket.io-client';

const AES_IV = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
const AES_HASH_KEY = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
const ACCENTED_CHARACTER_MAP = {
    a: '[aàảãáạăằẳẵắặâầẩẫấậ]',
    d: '[dđ]',
    e: '[eèẻẽéẹêềểễếệ]',
    i: '[iìỉĩíị]',
    o: '[oòỏõóọôồổỗốộơờởỡớợ]',
    u: '[uùủũúụưừửữứự]',
    y: '[yỳỷỹýỵ]',
};
// eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
const LODASH_MIXIN = {
    aesEncrypt: (data, key = AES_HASH_KEY, opts) => {
        let exp;
        if (opts && _.isString(opts.exp)) {
            const matched = opts.exp.match(/([0-9]+)([a-z]+)/);
            const expNum = Number(_.get(matched, 1));
            const expUnit = _.get(matched, 2);
            exp = expNum ? +moment().add(expNum, expUnit) : undefined;
        }
        data = JSON.stringify({ data, exp, salt: _.get(opts, 'salt') });
        return CryptoJS.AES.encrypt(data, key, { iv: AES_IV }).toString();
    },
    aesDecrypt: (code, key = AES_HASH_KEY, opts) => {
        try {
            const bytes = CryptoJS.AES.decrypt(code, key, { iv: AES_IV });
            let decoded = bytes.toString(CryptoJS.enc.Utf8);
            if (!decoded)
                throw new Error();
            decoded = JSON.parse(decoded);
            if ((decoded.salt && decoded.salt !== _.get(opts, 'salt'))
                || (decoded.exp && moment(decoded.exp).isBefore(moment())))
                throw new Error();
            return decoded.data;
        }
        catch { }
    },
    arrayInsert: (arr, item, index) => {
        arr = _.isArray(arr) ? arr : [];
        index === -1 || _.isNil(index) ? arr.push(item) : arr.splice(index, 0, item);
        return arr;
    },
    arrayJoin: (arr, joinSymbol = ', ') => {
        return _(arr).chain().filter((item) => !_.isNil(item) && item !== '').join(joinSymbol).value();
    },
    arrayUpdate: (arr, item, index) => {
        arr = _.isArray(arr) ? arr : [];
        index = _.isNil(index) ? _.indexOf(arr, item) : index;
        if (index !== -1)
            arr[index] = item;
        return arr;
    },
    arrayUpsert: (arr, item, index, type = 'push') => {
        arr = _.isArray(arr) ? arr : [];
        index = _.isNil(index) ? _.indexOf(arr, item) : index;
        if (index === -1) {
            type === 'push' ? arr.push(item) : arr.unshift(item);
        }
        else {
            arr[index] = item;
        }
        return arr;
    },
    arrayResert: (arr, item, index, type = 'push') => {
        arr = _.isArray(arr) ? arr : [];
        index = _.isNil(index) ? _.indexOf(arr, item) : index;
        if (index === -1) {
            type === 'push' ? arr.push(item) : arr.unshift(item);
        }
        else {
            arr.splice(index, 1);
        }
        return arr;
    },
    coerce: (value, defaultValue) => {
        return value === '' || _.isUndefined(value) ? defaultValue : (_.isNumber(value) ? Number(value) : value);
    },
    escapeRegExp: (str) => {
        return _(str).chain().replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d').value();
    },
    isStrictEmpty: (value) => {
        return _.isNil(value)
            || _.isEqual(value, {})
            || _.isEqual(value, [])
            || _.isEqual(_.trim(value), '');
    },
    matchAll: (regex, value) => {
        if (!regex || !value)
            return [];
        const matches = value.match(new RegExp(regex));
        return _.map(matches, (match) => new RegExp(regex).exec(match));
    },
    search: (str, match) => {
        if (!_.isString(str))
            return false;
        const searchRegExp = _.toSearchRegExp(match);
        return str.search(searchRegExp) >= 0
            || _(str)
                .chain()
                .split(' ')
                .map(0)
                .join('')
                .value()
                .search(searchRegExp) >= 0;
    },
    staticObservable: (value) => {
        return new Observable((observer) => { observer.next(value); observer.complete(); });
    },
    stripAccentedCharacters: (str) => {
        return str?.length
            ? _(str.normalize('NFD'))
                .chain()
                .replace(/\p{Diacritic}/gu, '')
                .replace(/đ/g, 'd')
                .replace(/Đ/g, 'D')
                .value()
            : '';
    },
    stripHtml: (html) => {
        return _.replace(html, /<[^>]*>?/gm, '');
    },
    toCommas: (num, isAddZero = false) => {
        if (!_.isFinite(num))
            return num;
        let n = String(isAddZero ? _.toPadNumber(num, 2) : num);
        n += '';
        const x = _.split(n, '.');
        const x2 = x.length > 1 ? '.' + x[1] : '';
        const rgx = /(\d+)(\d{3})/;
        let x1 = x[0];
        while (rgx.test(x1)) {
            x1 = _.replace(x1, rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    },
    toFileSize: (fileSize, isAddZero = false) => {
        if (!fileSize || _.isNaN(fileSize))
            fileSize = 0;
        let n = fileSize;
        let unit = 'B';
        if (fileSize >= 1073741824) {
            n = fileSize / 1024 / 1024 / 1024;
            unit = 'GB';
        }
        else if (fileSize >= 1048576) {
            n = fileSize / 1024 / 1024;
            unit = 'MB';
        }
        else if (fileSize >= 1024) {
            n = fileSize / 1024;
            unit = 'KB';
        }
        return _(n).chain().toFixed().toCommas(isAddZero).value() + unit;
    },
    toFixed: (num, digits = 2) => {
        if (!_.isFinite(num) || num % 1 === 0)
            return num;
        const numArr = String(num).split('.');
        const first = numArr[0];
        const last = numArr[1].slice(0, digits);
        return Number([first, last].join('.'));
    },
    toKUnit: (num, isAddZero = false) => {
        let n = num;
        let unit = '';
        if (Math.abs(num) >= 1000000000) {
            n = num / 1000000000;
            unit = 'B';
        }
        else if (Math.abs(num) >= 1000000) {
            n = num / 1000000;
            unit = 'M';
        }
        else if (Math.abs(num) >= 1000) {
            n = num / 1000;
            unit = 'K';
        }
        return _(n).chain().toFixed().toCommas(isAddZero).value() + unit;
    },
    toPadNumber: (num, size) => {
        return _.padStart(String(num), size, '0');
    },
    toPercent: (num, max = 100, digits = 2) => {
        return Number((num * max).toFixed(digits));
    },
    toRegExp: (str, flags = 'g') => {
        return new RegExp(_.escapeRegExp(str), flags);
    },
    toRgb: (hex) => {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = _.replace(hex, shorthandRegex, (_m, r, g, b) => {
            return r + r + g + g + b + b;
        });
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
            }
            : undefined;
    },
    toSearchRegExp: (str, flags = 'gi') => {
        if (_.isEmpty(str))
            return;
        const arr = _.split(str, '');
        _.forEach(arr, (char, index) => {
            arr[index] = ACCENTED_CHARACTER_MAP[_.toLower(char)] || _.escapeRegExp(char);
        });
        return new RegExp(arr.join(''), flags);
    },
    toSearchString: (str, ignoreWhitespace) => {
        str = _(str).chain().stripAccentedCharacters().toLower().value();
        ignoreWhitespace && _.replace(str, / /g, '');
        return str;
    },
};
_.mixin(LODASH_MIXIN);

class AdjustFontsizeDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    /**
     * @constructor
     */
    ngAfterContentChecked() {
        const element = this._elementRef.nativeElement;
        const elementWidth = element.clientWidth || 0;
        const parentWidth = (element.parentElement.clientWidth || 0)
            - (element.nextElementSibling.clientWidth || 0)
            - (element.previousElementSibling.clientWidth || 0);
        if (elementWidth <= 0 || parentWidth <= 0 || elementWidth <= parentWidth)
            return;
        const newFontsize = parseFloat(element.style.fontSize)
            * (parentWidth / elementWidth);
        element.style.fontSize = `${newFontsize}px`;
        element.style.lineHeight = `${newFontsize}px`;
    }
}
AdjustFontsizeDirective.ɵfac = function AdjustFontsizeDirective_Factory(t) { return new (t || AdjustFontsizeDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AdjustFontsizeDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AdjustFontsizeDirective, selectors: [["", "adjustFontsize", ""]], exportAs: ["adjustFontsize"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdjustFontsizeDirective, [{
        type: Directive,
        args: [{ selector: '[adjustFontsize]', exportAs: 'adjustFontsize' }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();

class AspectRatioDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    /**
     * @constructor
     */
    ngAfterContentChecked() {
        if (!this.aspectRatio)
            return;
        const element = this._elementRef.nativeElement;
        const elementWidth = element.clientWidth || 0;
        const aspectRatio = _.split(this.aspectRatio, ':');
        if (!aspectRatio[1] || !elementWidth)
            return;
        const height = elementWidth * (+aspectRatio[0] / +aspectRatio[1]);
        element.style.height = `${height}px`;
    }
}
AspectRatioDirective.ɵfac = function AspectRatioDirective_Factory(t) { return new (t || AspectRatioDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AspectRatioDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AspectRatioDirective, selectors: [["", "aspectRatio", ""]], inputs: { aspectRatio: "aspectRatio" }, exportAs: ["aspectRatio"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AspectRatioDirective, [{
        type: Directive,
        args: [{ selector: '[aspectRatio]', exportAs: 'aspectRatio' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { aspectRatio: [{
            type: Input
        }] }); })();

function AliasOf(alias) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() {
                return this['ɵɵmetadata'] ? this['ɵɵmetadata'][key] : undefined;
            },
            set(v) {
                const metadata = this['ɵɵmetadata'] || {};
                this[alias] = metadata[key] = v;
                this['ɵɵmetadata'] = metadata;
            },
            enumerable: true,
            configurable: true,
        });
    };
}

function CoerceArray() {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() {
                return this['ɵɵmetadata'] ? this['ɵɵmetadata'][key] : undefined;
            },
            set(v) {
                const metadata = this['ɵɵmetadata'] || {};
                metadata[key] = v !== undefined ? coerceArray(v) : undefined;
                this['ɵɵmetadata'] = metadata;
            },
            enumerable: true,
            configurable: true,
        });
    };
}

function CoerceBoolean() {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() {
                return this['ɵɵmetadata'] ? this['ɵɵmetadata'][key] : undefined;
            },
            set(v) {
                const metadata = this['ɵɵmetadata'] || {};
                metadata[key] = coerceBooleanProperty(v);
                this['ɵɵmetadata'] = metadata;
            },
            enumerable: true,
            configurable: true,
        });
    };
}

function CoerceCssPixel() {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() {
                return this['ɵɵmetadata'] ? this['ɵɵmetadata'][key] : undefined;
            },
            set(v) {
                const metadata = this['ɵɵmetadata'] || {};
                metadata[key] = coerceCssPixelValue(v);
                this['ɵɵmetadata'] = metadata;
            },
            enumerable: true,
            configurable: true,
        });
    };
}

function CoerceElement() {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() {
                return this['ɵɵmetadata'] ? this['ɵɵmetadata'][key] : undefined;
            },
            set(v) {
                const metadata = this['ɵɵmetadata'] || {};
                metadata[key] = coerceElement(v);
                this['ɵɵmetadata'] = metadata;
            },
            enumerable: true,
            configurable: true,
        });
    };
}

function CoerceNumber() {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() {
                return this['ɵɵmetadata'] ? this['ɵɵmetadata'][key] : undefined;
            },
            set(v) {
                const metadata = this['ɵɵmetadata'] || {};
                metadata[key] = !_.isNil(v) ? coerceNumberProperty(v) : v;
                this['ɵɵmetadata'] = metadata;
            },
            enumerable: true,
            configurable: true,
        });
    };
}

function Constants(constants) {
    return (cmpType) => {
        _.forEach(constants, (constant, key) => {
            Object.defineProperty(cmpType.prototype, key, {
                get() { return constant; },
            });
        });
    };
}

function DefaultValue() {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() {
                return this['ɵɵdefaultvalue'] ? this['ɵɵdefaultvalue'][key] : undefined;
            },
            set(v) {
                let defaultValue = this['ɵɵdefaultvalue']
                    ? this['ɵɵdefaultvalue'][key]
                    : undefined;
                if (defaultValue === undefined)
                    defaultValue = v;
                const metadata = this['ɵɵdefaultvalue'] || {};
                metadata[key] = _.coerce(v, defaultValue);
                this['ɵɵdefaultvalue'] = metadata;
            },
            enumerable: true,
            configurable: true,
        });
    };
}

function Memoize(hasher, validator) {
    return function (_target, _key, descriptor) {
        hasher = _.isFunction(hasher) ? hasher : function () {
            return JSON.stringify(arguments);
        };
        validator = _.isFunction(validator) ? validator : function () {
            const allowTypes = ['number', 'string', 'boolean'];
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < arguments.length; i++) {
                const type = typeof arguments[i];
                if (!_.includes(allowTypes, type))
                    throw new Error();
            }
        };
        const oldFunction = descriptor.value;
        const newFunction = _.memoize(oldFunction, hasher);
        descriptor.value = function () {
            try {
                validator.apply(this, arguments);
                return newFunction.apply(this, arguments);
            }
            catch {
                return oldFunction.apply(this, arguments);
            }
        };
    };
}

const DESTROY_CMP_SUBJECT_NAME = 'destroyed$';
function destroyCmp(instance, destroyMethodName) {
    const destroyed$ = instance[destroyMethodName || DESTROY_CMP_SUBJECT_NAME];
    destroyed$?.next();
}
function untilCmpDestroyed(instance, destroyMethodName) {
    // eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
    return (source) => {
        const destroyed$ = instance[destroyMethodName || DESTROY_CMP_SUBJECT_NAME] || new Subject();
        if (!destroyMethodName)
            instance[DESTROY_CMP_SUBJECT_NAME] = destroyed$;
        return source.pipe(takeUntil(destroyed$));
    };
}
function Unsubscriber() {
    return (target) => {
        const cmpOnDestroy = target.prototype.ngOnDestroy;
        target.prototype.ngOnDestroy = function () {
            this[DESTROY_CMP_SUBJECT_NAME]?.next();
            _.isFunction(cmpOnDestroy) && cmpOnDestroy.apply(this);
        };
    };
}

class AutoFocusDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.delay = 0;
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        if (this.disabled || this.disableControl || !this.autoFocusOn)
            return;
        setTimeout(() => {
            if (document.activeElement instanceof HTMLInputElement
                || document.activeElement instanceof HTMLTextAreaElement
                || document.activeElement instanceof HTMLSelectElement) {
                return;
            }
            const input = this._elementRef.nativeElement;
            input.focus();
            input instanceof HTMLTextAreaElement && input.setSelectionRange(0, input.value.length);
            if (!input.hasAttribute('contenteditable'))
                return;
            const range = document.createRange();
            range.selectNodeContents(input);
            range.collapse(false);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }, this.delay);
    }
}
AutoFocusDirective.ɵfac = function AutoFocusDirective_Factory(t) { return new (t || AutoFocusDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AutoFocusDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AutoFocusDirective, selectors: [["", "autoFocusOn", ""]], inputs: { delay: "delay", disableControl: "disableControl", disabled: "disabled", autoFocusOn: "autoFocusOn" }, exportAs: ["autoFocusOn"] });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], AutoFocusDirective.prototype, "delay", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], AutoFocusDirective.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], AutoFocusDirective.prototype, "autoFocusOn", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutoFocusDirective, [{
        type: Directive,
        args: [{ selector: '[autoFocusOn]', exportAs: 'autoFocusOn' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { delay: [{
            type: Input
        }], disableControl: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoFocusOn: [{
            type: Input
        }] }); })();

class AutoResetDirective {
    constructor() {
        this.delay = 0;
        this.autoReset = 'init';
    }
    /**
     * @constructor
     */
    ngOnInit() {
        if (this.autoReset !== 'init' || !this.formControl)
            return;
        setTimeout(() => {
            this.formControl.setErrors(null);
            this.formControl.markAsPristine();
            this.formControl.markAsUntouched();
        }, this.delay);
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        if (this.autoReset !== 'destroy' || !this.formControl)
            return;
        setTimeout(() => {
            this.formControl.setErrors(null);
            this.formControl.markAsPristine();
            this.formControl.markAsUntouched();
        }, this.delay);
    }
}
AutoResetDirective.ɵfac = function AutoResetDirective_Factory(t) { return new (t || AutoResetDirective)(); };
AutoResetDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AutoResetDirective, selectors: [["", "autoReset", ""]], inputs: { formControl: "formControl", delay: "delay", autoReset: "autoReset" }, exportAs: ["autoReset"] });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], AutoResetDirective.prototype, "delay", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], AutoResetDirective.prototype, "autoReset", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutoResetDirective, [{
        type: Directive,
        args: [{ selector: '[autoReset]', exportAs: 'autoReset' }]
    }], null, { formControl: [{
            type: Input
        }], delay: [{
            type: Input
        }], autoReset: [{
            type: Input
        }] }); })();

class BackButtonDirective {
    /**
     * @constructor
     * @param {Location} _location
     */
    constructor(_location) {
        this._location = _location;
    }
    triggerClick() {
        this._location.back();
    }
}
BackButtonDirective.ɵfac = function BackButtonDirective_Factory(t) { return new (t || BackButtonDirective)(i0.ɵɵdirectiveInject(i1.Location)); };
BackButtonDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BackButtonDirective, selectors: [["", "backButton", ""]], hostBindings: function BackButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BackButtonDirective_click_HostBindingHandler() { return ctx.triggerClick(); });
    } }, exportAs: ["backButton"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BackButtonDirective, [{
        type: Directive,
        args: [{ selector: '[backButton]', exportAs: 'backButton' }]
    }], function () { return [{ type: i1.Location }]; }, { triggerClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

class DetectScrollDirective {
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

class DisableControlDirective {
    /**
     * @constructor
     * @param {NgControl} _ngControl
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_ngControl, _cdRef) {
        this._ngControl = _ngControl;
        this._cdRef = _cdRef;
    }
    set disableControl(condition) {
        setTimeout(() => {
            this._ngControl.control[condition ? 'disable' : 'enable']();
            this._cdRef.detectChanges();
        });
    }
}
DisableControlDirective.ɵfac = function DisableControlDirective_Factory(t) { return new (t || DisableControlDirective)(i0.ɵɵdirectiveInject(i1$1.NgControl), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
DisableControlDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DisableControlDirective, selectors: [["", "disableControl", ""]], inputs: { disableControl: "disableControl" }, exportAs: ["disableControl"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DisableControlDirective, [{
        type: Directive,
        args: [{ selector: '[disableControl]', exportAs: 'disableControl' }]
    }], function () { return [{ type: i1$1.NgControl }, { type: i0.ChangeDetectorRef }]; }, { disableControl: [{
            type: Input
        }] }); })();

const doc = document;
class FullscreenDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._fullscreenEnabled = doc.fullscreenEnabled
            || doc.documentElement.webkitRequestFullScreen
            || doc.mozFullScreenEnabled
            || doc.msFullscreenEnable;
    }
    /**
     * @return {void}
     */
    toggle() {
        this.isFullscreen ? this.off() : this.on();
    }
    /**
     * @return {void}
     */
    on() {
        if (!this._fullscreenEnabled)
            return;
        const element = this._elementRef.nativeElement;
        this.isFullscreen = true;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    /**
     * @return {void}
     */
    off() {
        if (!this._fullscreenEnabled)
            return;
        this.isFullscreen = false;
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        }
        else if (doc.webkitExitFullscreen) {
            doc.webkitExitFullscreen();
        }
        else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen();
        }
        else if (doc.msExitFullscreen) {
            doc.msExitFullscreen();
        }
    }
}
FullscreenDirective.ɵfac = function FullscreenDirective_Factory(t) { return new (t || FullscreenDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
FullscreenDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FullscreenDirective, selectors: [["", "fullscreen", ""]], exportAs: ["fullscreen"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullscreenDirective, [{
        type: Directive,
        args: [{ selector: '[fullscreen]', exportAs: 'fullscreen' }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();

class MaxLessThanDirective {
    /**
     * @param {FormControl} c
     * @return {any}
     */
    validate(c) {
        const v = c.value;
        return v >= this.maxLessThan
            ? { maxLessThan: { max: this.maxLessThan, actual: v } }
            : null;
    }
}
MaxLessThanDirective.ɵfac = function MaxLessThanDirective_Factory(t) { return new (t || MaxLessThanDirective)(); };
MaxLessThanDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MaxLessThanDirective, selectors: [["", "maxLessThan", "", "formControlName", ""], ["", "maxLessThan", "", "formControl", ""], ["", "maxLessThan", "", "ngModel", ""]], inputs: { maxLessThan: "maxLessThan" }, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALIDATORS, useExisting: MaxLessThanDirective, multi: true }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaxLessThanDirective, [{
        type: Directive,
        args: [{
                selector: '[maxLessThan][formControlName],[maxLessThan][formControl],[maxLessThan][ngModel]',
                providers: [{ provide: NG_VALIDATORS, useExisting: MaxLessThanDirective, multi: true }],
            }]
    }], null, { maxLessThan: [{
            type: Input
        }] }); })();

class MinGreaterThanDirective {
    /**
     * @param {FormControl} c
     * @return {any}
     */
    validate(c) {
        const v = c.value;
        return v <= this.minGreaterThan
            ? { minGreaterThan: { min: this.minGreaterThan, actual: v } }
            : null;
    }
}
MinGreaterThanDirective.ɵfac = function MinGreaterThanDirective_Factory(t) { return new (t || MinGreaterThanDirective)(); };
MinGreaterThanDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MinGreaterThanDirective, selectors: [["", "minGreaterThan", "", "formControlName", ""], ["", "minGreaterThan", "", "formControl", ""], ["", "minGreaterThan", "", "ngModel", ""]], inputs: { minGreaterThan: "minGreaterThan" }, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALIDATORS, useExisting: MinGreaterThanDirective, multi: true }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MinGreaterThanDirective, [{
        type: Directive,
        args: [{
                selector: '[minGreaterThan][formControlName],[minGreaterThan][formControl],[minGreaterThan][ngModel]',
                providers: [{ provide: NG_VALIDATORS, useExisting: MinGreaterThanDirective, multi: true }],
            }]
    }], null, { minGreaterThan: [{
            type: Input
        }] }); })();

class NgInitDirective {
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

class NgVarDirective {
    /**
     * @constructor
     * @param {ViewContainerRef} _vcRef
     * @param {TemplateRef} _templateRef
     */
    constructor(_vcRef, _templateRef) {
        this._vcRef = _vcRef;
        this._templateRef = _templateRef;
        this._context = {};
    }
    set ngVar(context) {
        this._context.$implicit = this._context.ngVar = context;
        this._updateView();
    }
    /**
     * @return {void}
     */
    _updateView() {
        this._vcRef.clear();
        this._vcRef.createEmbeddedView(this._templateRef, this._context);
    }
}
NgVarDirective.ɵfac = function NgVarDirective_Factory(t) { return new (t || NgVarDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
NgVarDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NgVarDirective, selectors: [["", "ngVar", ""]], inputs: { ngVar: "ngVar" }, exportAs: ["ngVar"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgVarDirective, [{
        type: Directive,
        args: [{ selector: '[ngVar]', exportAs: 'ngVar' }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ngVar: [{
            type: Input
        }] }); })();

class AppConfig {
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get logo() { return this._logo; }
    set logo(value) { this._logo = value; }
    get url() { return this._url; }
    set url(value) { this._url = value; }
    get locale() { return this._locale; }
    set locale(value) { this._locale = value; }
    get mainPath() { return this._mainPath; }
    set mainPath(value) { this._mainPath = value; }
}
class ServerConfig {
    get apiURL() { return this._apiURL; }
    set apiURL(value) { this._apiURL = value; }
    get wsURL() { return this._wsURL; }
    set wsURL(value) { this._wsURL = value; }
    get fcmPublicKey() { return this._fcmPublicKey; }
    set fcmPublicKey(value) { this._fcmPublicKey = value; }
    get fcmSubscriptionEndpoint() { return this._fcmSubscriptionEndpoint; }
    set fcmSubscriptionEndpoint(value) { this._fcmSubscriptionEndpoint = value; }
}
class DateTimeConfig {
    get timezone() { return this._timezone; }
    set timezone(value) { this._timezone = value; }
    get dateFormat() { return this._dateFormat; }
    set dateFormat(value) { this._dateFormat = value; }
    get timeFormat() { return this._timeFormat; }
    set timeFormat(value) { this._timeFormat = value; }
    get weekStart() { return this._weekStart; }
    set weekStart(value) { this._weekStart = value; }
}
class StorageConfig {
    get authorizedKey() { return this._authorizedKey; }
    set authorizedKey(value) { this._authorizedKey = value; }
    get hashKey() { return this._hashKey; }
    set hashKey(value) { this._hashKey = value; }
    get expireDays() { return this._expireDays; }
    set expireDays(value) { this._expireDays = value; }
}
const APP_CONFIG = new InjectionToken('APP_CONFIG');
const SERVER_CONFIG = new InjectionToken('SERVER_CONFIG');
const DATE_TIME_CONFIG = new InjectionToken('DATE_TIME_CONFIG');
const STORAGE_CONFIG = new InjectionToken('STORAGE_CONFIG');

function appInitializerFactory(translateService, localeService, injector) {
    return () => new Promise((resolve) => {
        const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
        const dateTimeConfig = injector.get(DATE_TIME_CONFIG);
        const locale = localeService.locale;
        locationInitialized.then(() => {
            // Set moment timezone
            moment.tz.setDefault(dateTimeConfig.timezone);
            // Set moment language
            moment.locale(locale);
            // This language will be used as a fallback when a translation isn't found in the current language
            const langToSet = _.toLower(locale.substring(0, 2));
            translateService.setDefaultLang(langToSet);
            translateService.use(langToSet).subscribe(() => console.info(`Successfully initialized '${langToSet}' language.'`), () => console.error(`Problem with '${langToSet}' language initialization.'`), resolve);
        });
    });
}

class EmptyPipe {
    /**
     * @param {any} value
     * @param {string=} emptyStr
     * @return {any}
     */
    transform(value, emptyStr = '––') {
        return !_.isNil(value) ? value : emptyStr;
    }
}
EmptyPipe.ɵfac = function EmptyPipe_Factory(t) { return new (t || EmptyPipe)(); };
EmptyPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "empty", type: EmptyPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], EmptyPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptyPipe, [{
        type: Pipe,
        args: [{ name: 'empty' }]
    }], null, { transform: [] }); })();

class CapitalizeFirstPipe extends EmptyPipe {
    /**
     * @param {string} value
     * @return {string}
     */
    transform(value) {
        return !_.isNil(value)
            ? _.toUpper(value.charAt(0)) + _.toLower(value.substring(1))
            : super.transform();
    }
}
CapitalizeFirstPipe.ɵfac = /*@__PURE__*/ function () { let ɵCapitalizeFirstPipe_BaseFactory; return function CapitalizeFirstPipe_Factory(t) { return (ɵCapitalizeFirstPipe_BaseFactory || (ɵCapitalizeFirstPipe_BaseFactory = i0.ɵɵgetInheritedFactory(CapitalizeFirstPipe)))(t || CapitalizeFirstPipe); }; }();
CapitalizeFirstPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "capitalizeFirst", type: CapitalizeFirstPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CapitalizeFirstPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CapitalizeFirstPipe, [{
        type: Pipe,
        args: [{ name: 'capitalizeFirst' }]
    }], null, { transform: [] }); })();

class ClonePipe {
    /**
     * @param {any} data
     * @param {boolean=} isDeep
     * @return {any}
     */
    transform(data, isDeep) {
        return isDeep ? _.cloneDeep(data) : _.clone(data);
    }
}
ClonePipe.ɵfac = function ClonePipe_Factory(t) { return new (t || ClonePipe)(); };
ClonePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "clone", type: ClonePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClonePipe, [{
        type: Pipe,
        args: [{ name: 'clone' }]
    }], null, null); })();

class CommasPipe {
    /**
     * @param {number} input
     * @param {boolean=} isAddZero
     * @return {string}
     */
    transform(input, isAddZero = false) {
        return _.toCommas(input, isAddZero);
    }
}
CommasPipe.ɵfac = function CommasPipe_Factory(t) { return new (t || CommasPipe)(); };
CommasPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "commas", type: CommasPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", String)
], CommasPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommasPipe, [{
        type: Pipe,
        args: [{ name: 'commas' }]
    }], null, { transform: [] }); })();

class ConvertPercentPipe {
    /**
     * @param {number} input
     * @param {number=} max
     * @param {number=} digits
     * @return {number}
     */
    transform(input, max = 100, digits = 2) {
        return _.toPercent(input, max, digits);
    }
}
ConvertPercentPipe.ɵfac = function ConvertPercentPipe_Factory(t) { return new (t || ConvertPercentPipe)(); };
ConvertPercentPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "convertPercent", type: ConvertPercentPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Number)
], ConvertPercentPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConvertPercentPipe, [{
        type: Pipe,
        args: [{ name: 'convertPercent' }]
    }], null, { transform: [] }); })();

// eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
const REGEX = {
    NUMBER: /-?(?=.*[0-9])[0-9]*(?:\.[0-9]{1,})?$/,
    EMAIL: /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,4})$/,
    WEBSITE: /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}(\/.*)?/,
    CHARACTER: /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9ưƯơƠ ]*$/,
    PHONE: /^[0-9\(\)\-\+ ]*$/,
    EMOJI: /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])+/,
};

// eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
const CONSTANT = {
    LOCALE: 'en-gb',
    TIMEZONE: 'Asia/Ho_Chi_Minh',
    DATE_FORMAT: 'L',
    TIME_FORMAT: 'HH:mm',
    WEEK_START: 1,
    ALLOW_FILE_SIZE: 52428800,
    ALLOW_IMAGE_FILES: ['image/jpg', 'image/jpeg', 'image/png'],
    ALLOW_VIDEO_FILES: [
        'video/mp4', 'video/mov', 'video/avi',
        'video/wmv', 'video/flv', 'video/webm',
    ],
    ALLOW_DATE_FORMATS: [
        'DD/MM/YYYY', 'DD-MM-YYYY', 'DD/MM/YY', 'DD-MM-YY',
        'MM/DD/YYYY', 'MM-DD-YYYY', 'MM/DD/YY', 'MM-DD-YY',
        'YYYY/MM/DD', 'YYYY-MM-DD', 'YY/MM/DD', 'YY-MM-DD',
        'MMMM DD, YYYY', 'DD MMMM, YYYY', 'MMM DD, YYYY', 'DD MMM, YYYY',
    ],
    ALLOW_DOCUMENT_FILES: [
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/msword',
        'application/csv',
        'application/pdf',
        'text/csv', // csv
    ],
};

class EmojiPipe {
    /**
     * @param {string} unified
     * @return {string}
     */
    transform(unified) {
        if (new RegExp(REGEX.EMOJI).test(unified))
            return unified;
        return unified ? String.fromCodePoint(parseInt(unified, 16)) : '';
    }
}
EmojiPipe.ɵfac = function EmojiPipe_Factory(t) { return new (t || EmojiPipe)(); };
EmojiPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "emoji", type: EmojiPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], EmojiPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmojiPipe, [{
        type: Pipe,
        args: [{ name: 'emoji' }]
    }], null, { transform: [] }); })();

class FileSizePipe {
    /**
     * @param {number} input
     * @param {boolean=} isAddZero
     * @return {string}
     */
    transform(input, isAddZero = false) {
        return _.toFileSize(input, isAddZero);
    }
}
FileSizePipe.ɵfac = function FileSizePipe_Factory(t) { return new (t || FileSizePipe)(); };
FileSizePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "fileSize", type: FileSizePipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", String)
], FileSizePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileSizePipe, [{
        type: Pipe,
        args: [{ name: 'fileSize' }]
    }], null, { transform: [] }); })();

class FilterPipe {
    /**
     * @param {any[]} items
     * @param {any} key
     * @param {any} matchValue
     * @param {boolean} diffComparison
     * @return {any[]}
     */
    transform(items, key, matchValue, diffComparison = false) {
        if (!items)
            return [];
        const hasMatchValue = arguments.length >= 3;
        return _.filter(items, (item) => {
            const value = key ? _.get(item, key) : item;
            if (hasMatchValue) {
                const matched = _.isArray(matchValue)
                    ? _.includes(matchValue, value)
                    : matchValue === value;
                return diffComparison ? !matched : matched;
            }
            return _.isNil(value);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{ name: 'filter', pure: false }]
    }], null, null); })();

class Filter2Pipe {
    /**
     * @param {any[]} items
     * @param {any} key
     * @param {any} matchValue
     * @param {boolean=} diffComparison
     * @return {any[]}
     */
    transform(items, key, matchValue, diffComparison = false) {
        if (!items)
            return [];
        const hasMatchValue = arguments.length >= 3;
        const filteredItems = _.filter(items, (item) => {
            const value = key ? _.get(item, key) : item;
            if (hasMatchValue) {
                const matched = _.isArray(matchValue)
                    ? _.includes(matchValue, value)
                    : matchValue === value;
                return diffComparison ? !matched : matched;
            }
            return _.isNil(value);
        });
        const isDiff = !!_.difference(filteredItems, this._previous).length;
        if (isDiff) {
            this._previous = filteredItems;
            return filteredItems;
        }
        return this._previous;
    }
}
Filter2Pipe.ɵfac = function Filter2Pipe_Factory(t) { return new (t || Filter2Pipe)(); };
Filter2Pipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "filter2", type: Filter2Pipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Filter2Pipe, [{
        type: Pipe,
        args: [{ name: 'filter2', pure: false }]
    }], null, null); })();

class FindPipe {
    /**
     * @param {any[]} items
     * @param {any} key
     * @param {any} matchValue
     * @return {any}
     */
    transform(items, key, matchValue) {
        if (!items)
            return;
        const hasMatchValue = arguments.length === 3;
        return _.find(items, (item) => {
            const value = key ? _.get(item, key) : item;
            if (hasMatchValue) {
                return _.isArray(matchValue)
                    ? _.includes(matchValue, value)
                    : matchValue === value;
            }
            return _.isNil(value);
        });
    }
}
FindPipe.ɵfac = function FindPipe_Factory(t) { return new (t || FindPipe)(); };
FindPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "find", type: FindPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FindPipe, [{
        type: Pipe,
        args: [{ name: 'find', pure: false }]
    }], null, null); })();

class FixedPipe {
    /**
     * @param {number} input
     * @param {number=} digits
     * @return {number}
     */
    transform(input, digits = 2) {
        return _.toFixed(input, digits);
    }
}
FixedPipe.ɵfac = function FixedPipe_Factory(t) { return new (t || FixedPipe)(); };
FixedPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "fixed", type: FixedPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], FixedPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FixedPipe, [{
        type: Pipe,
        args: [{ name: 'fixed' }]
    }], null, { transform: [] }); })();

const CC_REGEX = /^[a-z]{2}$/i;
const OFFSET = 127397;
class FlagIconPipe {
    /**
     * @param {string} countryCode
     * @return {string}
     */
    transform(countryCode) {
        if (!countryCode)
            return;
        if (!CC_REGEX.test(countryCode))
            throw new TypeError('cc argument must be an ISO 3166-1 alpha-2 string');
        const codePoints = _(countryCode)
            .chain()
            .toUpper()
            .split('')
            .map((c) => c.codePointAt() + OFFSET)
            .value();
        return String.fromCodePoint(...codePoints);
    }
}
FlagIconPipe.ɵfac = function FlagIconPipe_Factory(t) { return new (t || FlagIconPipe)(); };
FlagIconPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "flagIcon", type: FlagIconPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], FlagIconPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlagIconPipe, [{
        type: Pipe,
        args: [{ name: 'flagIcon' }]
    }], null, { transform: [] }); })();

class HourMeridiemPipe {
    /**
     * @param {number} hour
     * @return {string}
     */
    transform(hour) {
        return !_.isNil(hour) ? moment().hour(hour).format('hh A') : undefined;
    }
}
HourMeridiemPipe.ɵfac = function HourMeridiemPipe_Factory(t) { return new (t || HourMeridiemPipe)(); };
HourMeridiemPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "hourMeridiem", type: HourMeridiemPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], HourMeridiemPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HourMeridiemPipe, [{
        type: Pipe,
        args: [{ name: 'hourMeridiem' }]
    }], null, { transform: [] }); })();

class ImagePipe {
    /**
     * @param {string} url
     * @param {string} defaultImage
     * @return {number}
     */
    transform(url, defaultImage) {
        return new Observable((observer) => {
            if (!url) {
                observer.next(defaultImage);
                observer.complete();
                return;
            }
            const img = new Image();
            img.onload = () => { observer.next(url); observer.complete(); };
            img.onerror = () => { observer.next(defaultImage); observer.complete(); };
            img.src = url;
        });
    }
}
ImagePipe.ɵfac = function ImagePipe_Factory(t) { return new (t || ImagePipe)(); };
ImagePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "image", type: ImagePipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Observable)
], ImagePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImagePipe, [{
        type: Pipe,
        args: [{ name: 'image' }]
    }], null, { transform: [] }); })();

class IncludesPipe {
    /**
     * @param {any[]} arr
     * @param {any} item
     * @return {boolean}
     */
    transform(arr, item) {
        return _.includes(arr, item);
    }
}
IncludesPipe.ɵfac = function IncludesPipe_Factory(t) { return new (t || IncludesPipe)(); };
IncludesPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "includes", type: IncludesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IncludesPipe, [{
        type: Pipe,
        args: [{ name: 'includes' }]
    }], null, null); })();

class IsContrastPipe {
    /**
     * @param {string} hex
     * @param {string} textColor
     * @return {boolean}
     */
    transform(hex) {
        if (!hex)
            return false;
        const rgb = _.toRgb(hex);
        if (!rgb)
            return false;
        const contrast = (Math.round(rgb.r * 299) + Math.round(rgb.g * 587) + Math.round(rgb.b * 114)) / 1000;
        return contrast < 180;
    }
}
IsContrastPipe.ɵfac = function IsContrastPipe_Factory(t) { return new (t || IsContrastPipe)(); };
IsContrastPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "isContrast", type: IsContrastPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], IsContrastPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IsContrastPipe, [{
        type: Pipe,
        args: [{ name: 'isContrast' }]
    }], null, { transform: [] }); })();

class IsFinitePipe {
    /**
     * @param {number} num
     * @return {boolean}
     */
    transform(num) {
        return _.isFinite(num);
    }
}
IsFinitePipe.ɵfac = function IsFinitePipe_Factory(t) { return new (t || IsFinitePipe)(); };
IsFinitePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "isFinite", type: IsFinitePipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Boolean)
], IsFinitePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IsFinitePipe, [{
        type: Pipe,
        args: [{ name: 'isFinite' }]
    }], null, { transform: [] }); })();

class KUnitPipe {
    /**
     * @param {number} input
     * @param {boolean=} isAddZero
     * @return {string}
     */
    transform(input, isAddZero = false) {
        return _.toKUnit(input, isAddZero);
    }
}
KUnitPipe.ɵfac = function KUnitPipe_Factory(t) { return new (t || KUnitPipe)(); };
KUnitPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "kUnit", type: KUnitPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", String)
], KUnitPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KUnitPipe, [{
        type: Pipe,
        args: [{ name: 'kUnit' }]
    }], null, { transform: [] }); })();

class LinkPipe {
    /**
     * @param {string} link
     * @return {string}
     */
    transform(link) {
        if (!link)
            return;
        return /^http(s)?/.test(link) ? link : `//${link}`;
    }
}
LinkPipe.ɵfac = function LinkPipe_Factory(t) { return new (t || LinkPipe)(); };
LinkPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "link", type: LinkPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], LinkPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LinkPipe, [{
        type: Pipe,
        args: [{ name: 'link' }]
    }], null, { transform: [] }); })();

class MarkTextPipe {
    /**
     * @param {string} html
     * @param {string} markText
     * @param {boolean=} isSearchMode
     * @param {boolean=} isEscapeHtmlTags
     * @return {string}
     */
    transform(html, markText, isSearchMode, isEscapeHtmlTags = true) {
        if (isEscapeHtmlTags) {
            html = _.escape(html);
            markText = _.escape(markText);
        }
        if (html?.length && markText?.length) {
            html = _.stripHtml(html);
            markText = _.stripHtml(markText);
            const allMatched = _(markText)
                .chain()
                .toSearchRegExp('gi')
                .matchAll(html)
                // @ts-ignore
                .map(0)
                .uniq()
                .value();
            if (allMatched.length) {
                html = html.replace(new RegExp(_.map(allMatched, _.escapeRegExp).join('|'), 'g'), (matched) => `<mark>${matched}</mark>`);
            }
            else if (isSearchMode && _.search(html, markText)) {
                html = _(html)
                    .chain()
                    .split(' ')
                    .map((s, i) => i < markText.length ? `<mark>${s.charAt(0)}</mark>` + s.slice(1) : s)
                    .join(' ')
                    .value();
            }
        }
        return html;
    }
}
MarkTextPipe.ɵfac = function MarkTextPipe_Factory(t) { return new (t || MarkTextPipe)(); };
MarkTextPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "markText", type: MarkTextPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean, Boolean]),
    __metadata("design:returntype", String)
], MarkTextPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarkTextPipe, [{
        type: Pipe,
        args: [{ name: 'markText' }]
    }], null, { transform: [] }); })();

class MaxPipe {
    /**
     * @param {any[]} items
     * @param {string} field
     * @return {number}
     */
    transform(items, field) {
        const max = _.maxBy(items, field);
        return max && max[field] ? max[field] : 0;
    }
}
MaxPipe.ɵfac = function MaxPipe_Factory(t) { return new (t || MaxPipe)(); };
MaxPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "max", type: MaxPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaxPipe, [{
        type: Pipe,
        args: [{ name: 'max' }]
    }], null, null); })();

class MinPipe {
    /**
     * @param {any[]} items
     * @param {string} field
     * @return {number}
     */
    transform(items, field) {
        const min = _.minBy(items, field);
        return min && min[field] ? min[field] : 0;
    }
}
MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
MinPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "min", type: MinPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MinPipe, [{
        type: Pipe,
        args: [{ name: 'min' }]
    }], null, null); })();

class MomentDatePipe extends EmptyPipe {
    /**
     * @constructor
     * @param {DateTimeConfig} _dateTimeConfig
     */
    constructor(_dateTimeConfig) {
        super();
        this._dateTimeConfig = _dateTimeConfig;
    }
    /**
     * @param {any} input
     * @param {string=} format
     * @param {boolean=} showTime
     * @return {string}
     */
    transform(input, format, showTime) {
        if (_.isNil(input))
            return super.transform();
        const output = moment(input);
        if (!output.isValid())
            return super.transform();
        if (format !== undefined)
            return output.format(format);
        const dateFormat = this._dateTimeConfig.dateFormat || CONSTANT.DATE_FORMAT;
        const timeFormat = this._dateTimeConfig.timeFormat || CONSTANT.TIME_FORMAT;
        let sameDay = `[Today], ${dateFormat}`;
        let nextDay = `[Tomorrow], ${dateFormat}`;
        let lastDay = `[Yesterday], ${dateFormat}`;
        let nextWeek = dateFormat;
        let lastWeek = dateFormat;
        let sameElse = dateFormat;
        if (showTime) {
            sameDay = _.join([sameDay, timeFormat], ' ');
            nextDay = _.join([nextDay, timeFormat], ' ');
            lastDay = _.join([lastDay, timeFormat], ' ');
            nextWeek = lastWeek = sameElse = _.join([dateFormat, timeFormat], ' ');
        }
        return output.calendar(undefined, {
            sameDay, nextDay, lastDay,
            nextWeek, lastWeek, sameElse,
        });
    }
}
MomentDatePipe.ɵfac = function MomentDatePipe_Factory(t) { return new (t || MomentDatePipe)(i0.ɵɵdirectiveInject(DATE_TIME_CONFIG, 24)); };
MomentDatePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "momentDate", type: MomentDatePipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Boolean]),
    __metadata("design:returntype", String)
], MomentDatePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MomentDatePipe, [{
        type: Pipe,
        args: [{ name: 'momentDate' }]
    }], function () { return [{ type: DateTimeConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DATE_TIME_CONFIG]
            }] }]; }, { transform: [] }); })();

class MomentFromNowPipe extends EmptyPipe {
    /**
     * @param {any} input
     * @return {string}
     */
    transform(input) {
        if (_.isNil(input))
            return super.transform();
        const output = moment(input);
        return output.isValid() ? output.fromNow() : super.transform();
    }
}
MomentFromNowPipe.ɵfac = /*@__PURE__*/ function () { let ɵMomentFromNowPipe_BaseFactory; return function MomentFromNowPipe_Factory(t) { return (ɵMomentFromNowPipe_BaseFactory || (ɵMomentFromNowPipe_BaseFactory = i0.ɵɵgetInheritedFactory(MomentFromNowPipe)))(t || MomentFromNowPipe); }; }();
MomentFromNowPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "momentFromNow", type: MomentFromNowPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MomentFromNowPipe, [{
        type: Pipe,
        args: [{ name: 'momentFromNow' }]
    }], null, null); })();

class OrderByPipe {
    /**
     * @param {any} input
     * @return {any}
     */
    transform(input, [config = '+']) {
        if (!_.isArray(input))
            return input;
        if (!_.isArray(config)
            || (_.isArray(config) && config.length === 1)) {
            const propertyToCheck = !_.isArray(config) ? config : config[0];
            const symbol = propertyToCheck.substring(0, 1);
            const desc = symbol === '-';
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            const property = symbol === '+' || symbol === '-'
                ? propertyToCheck.substring(1)
                : propertyToCheck;
            return input.sort((a, b) => {
                const comparison = this._orderByComparator(_.get(a, property), _.get(b, property));
                return desc ? -comparison : comparison;
            });
        }
        return input.sort((a, b) => {
            for (const c of config) {
                const symbol = c.substring(0, 1);
                const desc = symbol === '-';
                const property = symbol === '+' || symbol === '-'
                    ? c.substring(1)
                    : c;
                const comparison = this._orderByComparator(_.get(a, property), _.get(b, property));
                if (comparison !== 0)
                    return desc ? -comparison : comparison;
            }
            return 0;
        });
    }
    /**
     * @param {any} a
     * @param {any} b
     * @return {number}
     */
    _orderByComparator(a, b) {
        if (_.isNil(a) && _.isNil(b))
            return 0;
        if (_.isNil(a))
            return -1;
        if (_.isNil(b))
            return 1;
        if ((_.isNaN(parseFloat(a)) || !_.isFinite(a))
            || (_.isNaN(parseFloat(b)) || !_.isFinite(b))) {
            // Isn't a number so lowercase the string to properly compare
            if (_.toLower(a) < _.toLower(b))
                return -1;
            if (_.toLower(a) > _.toLower(b))
                return 1;
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; // equal each other
    }
}
OrderByPipe.ɵfac = function OrderByPipe_Factory(t) { return new (t || OrderByPipe)(); };
OrderByPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "orderBy", type: OrderByPipe, pure: false });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Number)
], OrderByPipe.prototype, "_orderByComparator", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderByPipe, [{
        type: Pipe,
        args: [{ name: 'orderBy', pure: false }]
    }], null, { _orderByComparator: [] }); })();

class PadNumberPipe {
    /**
     * @param {number} input
     * @param {boolean} size
     * @return {string}
     */
    transform(input, size) {
        return _.toPadNumber(input, size);
    }
}
PadNumberPipe.ɵfac = function PadNumberPipe_Factory(t) { return new (t || PadNumberPipe)(); };
PadNumberPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "padNumber", type: PadNumberPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", String)
], PadNumberPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PadNumberPipe, [{
        type: Pipe,
        args: [{ name: 'padNumber' }]
    }], null, { transform: [] }); })();

class Percent2Pipe extends PercentPipe {
    /**
     * @param {string | number} value
     * @param {string=} digitsInfo
     * @param {string=} locale
     * @return {any}
     */
    transform(value, digitsInfo = '1.0-2', locale) {
        return super.transform(value, digitsInfo, locale);
    }
}
Percent2Pipe.ɵfac = /*@__PURE__*/ function () { let ɵPercent2Pipe_BaseFactory; return function Percent2Pipe_Factory(t) { return (ɵPercent2Pipe_BaseFactory || (ɵPercent2Pipe_BaseFactory = i0.ɵɵgetInheritedFactory(Percent2Pipe)))(t || Percent2Pipe); }; }();
Percent2Pipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "percent2", type: Percent2Pipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Object)
], Percent2Pipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Percent2Pipe, [{
        type: Pipe,
        args: [{ name: 'percent2' }]
    }], null, { transform: [] }); })();

class SafeHtmlPipe {
    /**
     * @constructor
     * @param {DomSanitizer} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {string} value
     * @return {SafeHtml}
     */
    transform(value) {
        return value ? this._sanitizer.bypassSecurityTrustHtml(value) : '';
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(i0.ɵɵdirectiveInject(i1$2.DomSanitizer, 16)); };
SafeHtmlPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], SafeHtmlPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{ name: 'safeHtml' }]
    }], function () { return [{ type: i1$2.DomSanitizer }]; }, { transform: [] }); })();

class TimeStringPipe {
    /**
     * @param {number} miliseconds
     * @return {string}
     */
    transform(miliseconds) {
        const seconds = miliseconds / 1000;
        const s = Math.floor(seconds % 60);
        const m = Math.floor((seconds / 60) % 60);
        const h = Math.floor((seconds / (60 * 60)));
        const arr = [];
        h && arr.push(`${h}h`);
        m && arr.push(`${m}m`);
        s && arr.push(`${s}s`);
        return _.join(arr, ' ');
    }
}
TimeStringPipe.ɵfac = function TimeStringPipe_Factory(t) { return new (t || TimeStringPipe)(); };
TimeStringPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "timeString", type: TimeStringPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], TimeStringPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeStringPipe, [{
        type: Pipe,
        args: [{ name: 'timeString' }]
    }], null, { transform: [] }); })();

class TimerPipe {
    /**
     * @param {number} miliseconds
     * @return {string}
     */
    transform(miliseconds) {
        const seconds = miliseconds / 1000;
        const s = seconds % 60;
        const m = (seconds / 60) % 60;
        const h = (seconds / (60 * 60));
        return _.join([
            _.toPadNumber(Math.floor(h), 2),
            _.toPadNumber(Math.floor(m), 2),
            _.toPadNumber(Math.floor(s), 2),
        ], ':');
    }
}
TimerPipe.ɵfac = function TimerPipe_Factory(t) { return new (t || TimerPipe)(); };
TimerPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "timer", type: TimerPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], TimerPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimerPipe, [{
        type: Pipe,
        args: [{ name: 'timer' }]
    }], null, { transform: [] }); })();

class TrackByFnPipe {
    /**
     * @param {string} property
     * @return {() => any}
     */
    transform(property) {
        return (_idx, item) => property ? _.get(item, property) : item;
    }
}
TrackByFnPipe.ɵfac = function TrackByFnPipe_Factory(t) { return new (t || TrackByFnPipe)(); };
TrackByFnPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "trackByFn", type: TrackByFnPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Function)
], TrackByFnPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackByFnPipe, [{
        type: Pipe,
        args: [{ name: 'trackByFn' }]
    }], null, { transform: [] }); })();

class UnitPipe {
    /**
     * @param {number} num
     * @param {string=} unit
     * @return {string}
     */
    transform(num, unit = 'px') {
        if (_.isNaN(num))
            return;
        return `${num}${unit}`;
    }
}
UnitPipe.ɵfac = function UnitPipe_Factory(t) { return new (t || UnitPipe)(); };
UnitPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "unit", type: UnitPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", String)
], UnitPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnitPipe, [{
        type: Pipe,
        args: [{ name: 'unit' }]
    }], null, { transform: [] }); })();

class StorageService {
    /**
     * @constructor
     * @param {StorageConfig} storageConfig
     * @param {CookieService} _cookieService
     */
    constructor(storageConfig, _cookieService) {
        this.storageConfig = storageConfig;
        this._cookieService = _cookieService;
        this._cookieOptions = { path: '/', sameSite: 'None', secure: true };
    }
    /**
     * @param {CookieOptions} options
     * @return {void}
     */
    setCookieOptions(options) {
        this._cookieOptions = _.assign(this._cookieOptions, options);
    }
    /**
     * @param {string} key
     * @param {any} data
     * @param {(number | Date)=} expires
     * @return {void}
     */
    setCookie(key, data, expires = this.storageConfig.expireDays) {
        const hashKey = this.storageConfig.hashKey;
        if (!hashKey)
            return;
        const hashValue = _.aesEncrypt(data, hashKey);
        const options = this._mergeCookieOptions(expires);
        this._cookieService.set(key, hashValue, options.expires, options.path, options.domain, options.secure, options.sameSite);
    }
    /**
     * @param {string} key
     * @return {any}
     */
    getCookie(key) {
        const hashKey = this.storageConfig.hashKey;
        const hashValue = this._cookieService.get(key);
        if (!hashKey || !hashValue)
            return;
        return _.aesDecrypt(hashValue, hashKey);
    }
    /**
     * @param {string} key
     * @param {any} updateData
     * @return {void}
     */
    updateCookie(key, updateData) {
        const data = this.getCookie(key);
        this.setCookie(key, { ...data, ...updateData });
    }
    /**
     * @param {string} key
     * @return {void}
     */
    removeCookie(key) {
        this._cookieService.delete(key, this._cookieOptions.path, this._cookieOptions.domain, this._cookieOptions.secure, this._cookieOptions.sameSite);
    }
    /**
     * @return {void}
     */
    clearAllCookies() {
        this._cookieService.deleteAll(this._cookieOptions.path, this._cookieOptions.domain, this._cookieOptions.secure, this._cookieOptions.sameSite);
    }
    /**
     * @param {string} key
     * @param {any} data
     * @return {void}
     */
    setLocal(key, data) {
        const hashKey = this.storageConfig.hashKey;
        if (!hashKey)
            return;
        const hashValue = _.aesEncrypt(data, hashKey);
        localStorage.setItem(key, hashValue);
    }
    /**
     * @param {string} key
     * @return {any}
     */
    getLocal(key) {
        const hashKey = this.storageConfig.hashKey;
        const hashValue = localStorage.getItem(key);
        if (!hashKey || !hashValue)
            return;
        return _.aesDecrypt(hashValue, hashKey);
    }
    /**
     * @param {string} key
     * @param {any} updateData
     * @return {void}
     */
    updateLocal(key, updateData) {
        const data = this.getLocal(key);
        this.setLocal(key, { ...data, ...updateData });
    }
    /**
     * @param {string} key
     * @return {void}
     */
    removeLocal(key) {
        localStorage.removeItem(key);
    }
    /**
     * @return {void}
     */
    clearAllLocals() {
        localStorage.clear();
    }
    /**
     * @param {number | Date} expires
     * @return {CookieOptions} options
     */
    _mergeCookieOptions(expires) {
        const options = {};
        if (expires) {
            options.expires = expires instanceof Date
                ? expires
                : moment(+moment() + 24 * 60 * 60 * 1000 * expires).toDate();
        }
        return _.assign(options, this._cookieOptions);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(i0.ɵɵinject(STORAGE_CONFIG, 8), i0.ɵɵinject(i1$3.CookieService)); };
StorageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorageService, [{
        type: Injectable
    }], function () { return [{ type: StorageConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STORAGE_CONFIG]
            }] }, { type: i1$3.CookieService }]; }, null); })();

class ApiService {
    /**
     * @constructor
     * @param {ServerConfig} serverConfig
     * @param {StorageConfig} storageConfig
     * @param {HttpClient} _http
     * @param {StorageService} _storageService
     */
    constructor(serverConfig, storageConfig, _http, _storageService) {
        this.serverConfig = serverConfig;
        this.storageConfig = storageConfig;
        this._http = _http;
        this._storageService = _storageService;
        this.errorCatcher$ = new Subject();
        this._baseURL = this.serverConfig.apiURL;
        this._caching = {};
        this._forceReloadDelayTime = 60000;
        this._forceReloadDebounce = _.debounce(this.clearCache.bind(this), this._forceReloadDelayTime);
    }
    /**
     * @param {string} url
     * @return {void}
     */
    setBaseURL(url) {
        this._baseURL = url;
    }
    /**
     * @param {string} accessToken
     * @return {void}
     */
    setAccessToken(accessToken) {
        this._accessToken = accessToken;
    }
    /**
     * @param {number} forceReloadDelayTime
     * @return {void}
     */
    setForceReloadDelayTime(forceReloadDelayTime) {
        this._forceReloadDebounce?.cancel();
        this._forceReloadDelayTime = forceReloadDelayTime;
        this._forceReloadDebounce = _.debounce(() => this._caching = {}, this._forceReloadDelayTime);
    }
    /**
     * @return {void}
     */
    clearCache() {
        this._caching = {};
    }
    /**
     * @param {string} url
     * @param {string=} method
     * @param {ApiParams=} params
     * @param {ApiHeaders=} headers
     * @param {any=} options
     * @return {Observable}
     */
    call(url, method = 'get', params = {}, headers = {}, options) {
        return new Observable((observer) => {
            method = _.toLower(method);
            /* eslint-disable @typescript-eslint/naming-convention */
            const defaultHttpHeaders = {
                'Content-Type': 'application/json;charset=UTF-8',
                'Force-Reload': String(!this._caching[url]),
            };
            /* eslint-enable @typescript-eslint/naming-convention */
            const httpHeaders = headers === null
                ? new HttpHeaders(defaultHttpHeaders)
                : this._setHeaders({ ...defaultHttpHeaders, ...headers });
            const queryParams = params.queryParams || params;
            const bodyParams = params.bodyParams || params;
            const isGetOrDeleteMethod = method === 'delete' || method === 'get';
            const hasQueryParams = isGetOrDeleteMethod || _.has(params, 'queryParams');
            let newURL = _.arrayJoin([this._baseURL, url], '');
            let newOptions = { ...options, headers: httpHeaders };
            let newParams;
            if (hasQueryParams) {
                const searchParams = new URLSearchParams();
                _.forEach(queryParams, (value, key) => { searchParams.set(key, value); });
                newURL = _.arrayJoin([newURL, searchParams.toString()], '?');
            }
            if (isGetOrDeleteMethod) {
                newParams = newOptions;
                newOptions = undefined;
            }
            else {
                newParams = bodyParams;
            }
            this._http[method](newURL, newParams, newOptions)
                .pipe(options?.reportProgress ? takeWhile((res) => res.type <= 4) : take(1), finalize(() => { this._caching[url] = true; this._forceReloadDebounce(); }))
                .subscribe((response) => observer.next(response), (error) => observer.error(this._failCallback(error)), () => observer.complete());
        });
    }
    /**
     * @param {string} url
     * @param {FileList | Array<File>} files
     * @param {ApiHeaders=} headers
     * @param {any=} options
     * @return {Observable}
     */
    upload(url, files, headers = {}, options) {
        return new Observable((observer) => {
            const httpHeaders = this._setHeaders(headers);
            const formData = new FormData();
            const newOptions = { ...options, headers: httpHeaders };
            const fullURL = _.arrayJoin([this._baseURL, url], '');
            // In case files is file list or array files
            if (files instanceof FileList || files instanceof Array) {
                _.forEach(files, (file) => { formData.append('files[]', file, file.name); });
            }
            else {
                formData.append('file', files);
            }
            this._http.post(fullURL, formData, newOptions)
                .pipe(options?.reportProgress ? takeWhile((res) => res.type <= 4) : take(1))
                .subscribe((response) => observer.next(response), (error) => observer.error(this._failCallback(error)), () => observer.complete());
        });
    }
    /**
     * @param {ApiHeaders} headers
     * @return {HttpHeaders}
     */
    _setHeaders(headers) {
        const authorized = this._storageService.getCookie(this.storageConfig.authorizedKey);
        const accessToken = this._accessToken || authorized?.accessToken;
        // eslint-disable-next-line dot-notation, @typescript-eslint/dot-notation
        if (!_.has(headers, 'Authorization'))
            headers['Authorization'] = `Bearer ${accessToken}`;
        return new HttpHeaders(headers);
    }
    /**
     * @param {any} error
     * @return {any}
     */
    _failCallback(error) {
        this.errorCatcher$.next(error);
        return error;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(i0.ɵɵinject(SERVER_CONFIG, 8), i0.ɵɵinject(STORAGE_CONFIG, 8), i0.ɵɵinject(i1$4.HttpClient), i0.ɵɵinject(StorageService)); };
ApiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable
    }], function () { return [{ type: ServerConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SERVER_CONFIG]
            }] }, { type: StorageConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STORAGE_CONFIG]
            }] }, { type: i1$4.HttpClient }, { type: StorageService }]; }, null); })();

class CanDeactivateGuardService {
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

moment.updateLocale('vi', {
    ...vi,
    months: _.split('Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12', '_'),
    weekdays: _.split('Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy', '_'),
});
class LocaleService {
    /**
     * @constructor
     * @param {AppConfig} appConfig
     * @param {TranslateService} _translateService
     */
    constructor(appConfig, _translateService) {
        this.appConfig = appConfig;
        this._translateService = _translateService;
        this.localeChange$ = new ReplaySubject();
    }
    /**
     * @param {string} locale
     * @return {void}
     */
    set locale(locale) {
        if (!locale)
            return;
        this._locale = locale;
        // Store locale
        localStorage.setItem('locale', locale.toString());
        // Set moment language
        moment.locale(locale);
        // The lang to use, if the lang isn't available, it will use the current loader to get them
        this._translateService.use(_.toLower(locale.substring(0, 2)))
            .pipe(take(1))
            .subscribe();
        // Trigger locale changed
        this.localeChange$.next(locale);
    }
    /**
     * @return {string}
     */
    get locale() {
        return this._locale || localStorage.getItem('locale') || this.appConfig.locale;
    }
}
LocaleService.ɵfac = function LocaleService_Factory(t) { return new (t || LocaleService)(i0.ɵɵinject(APP_CONFIG, 8), i0.ɵɵinject(i1$5.TranslateService)); };
LocaleService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocaleService, factory: LocaleService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocaleService, [{
        type: Injectable
    }], function () { return [{ type: AppConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i1$5.TranslateService }]; }, null); })();

class LoopService {
    constructor() {
        this._intervals = [];
    }
    /**
     * @param {() => void)} fn
     * @param {number} time
     * @return {number} index
     */
    set(fn, time) {
        const index = this._intervals.length ? this._intervals.length + 1 : 0;
        this._intervals[index] = setInterval(fn, time);
        return index;
    }
    /**
     * @param {number} index
     * @return {void}
     */
    cancel(index) {
        clearInterval(this._intervals[index]);
    }
    /**
     * @return {void}
     */
    destroy() {
        _.forEach(this._intervals, (_o, i) => {
            clearInterval(this._intervals[i]);
        });
        this._intervals = [];
    }
}
LoopService.ɵfac = function LoopService_Factory(t) { return new (t || LoopService)(); };
LoopService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoopService, factory: LoopService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoopService, [{
        type: Injectable
    }], null, null); })();

const BREAKPOINTS = {
    xs: 600,
    sm: 960,
    md: 1280,
    lg: 1920,
};
class MediaService {
    /**
     * @constructor
     */
    constructor() {
        this._media = window.innerWidth;
    }
    /**
     * @param {number} breakpoint - Breakpoint to check
     * @return {boolean}
     */
    is(breakpoint) {
        this._media = window.innerWidth;
        return ((breakpoint === 'xs' && this._media < BREAKPOINTS.xs)
            || (breakpoint === 'gt-xs' && this._media >= BREAKPOINTS.xs)
            || (breakpoint === 'sm' && this._media >= BREAKPOINTS.xs && this._media < BREAKPOINTS.sm)
            || (breakpoint === 'gt-sm' && this._media >= BREAKPOINTS.sm)
            || (breakpoint === 'md' && this._media >= BREAKPOINTS.sm && this._media < BREAKPOINTS.md)
            || (breakpoint === 'gt-md' && this._media >= BREAKPOINTS.md)
            || (breakpoint === 'lg' && this._media >= BREAKPOINTS.md && this._media < BREAKPOINTS.lg)
            || (breakpoint === 'gt-lg' && this._media >= BREAKPOINTS.lg));
    }
    /**
     * @param {number} width - Width to check
     * @return {boolean}
     */
    gt(width) {
        this._media = window.innerWidth;
        return this._media >= width;
    }
    /**
     * @param {number} width - Width to check
     * @return {boolean}
     */
    lt(width) {
        this._media = window.innerWidth;
        return this._media < width;
    }
    /**
     * @param {number} width - Viewport width
     * @return {void}
     */
    setViewPort(width) {
        // In case browser resizing
        if (window.innerWidth < screen.width) {
            document.body.classList.add('resizing');
            return;
        }
        // In case real devices
        const meta = document.head.querySelector('meta[name=viewport]');
        let viewPort = 'width=device-width, initial-scale=1.0, user-scalable=0';
        if (width) {
            const scale = window.innerWidth / width;
            viewPort = 'width='
                + width
                + ', minimum-scale='
                + scale
                + ', initial-scale='
                + scale
                + ', maximum-scale=1.0';
        }
        meta.setAttribute('content', viewPort);
    }
}
MediaService.ɵfac = function MediaService_Factory(t) { return new (t || MediaService)(); };
MediaService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MediaService, factory: MediaService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class NetworkService {
    get online$() {
        return merge(fromEvent(window, 'offline').pipe(map(() => false)), fromEvent(window, 'online').pipe(map(() => true)), new Observable((ob) => {
            ob.next(navigator.onLine);
            ob.complete();
        }));
    }
    /**
     * @param {number=} intervalMs
     * @return {void}
     */
    detectOnline(intervalMs = 5000) {
        return new Observable((observer) => {
            interval(intervalMs).subscribe(() => this.online$.subscribe(observer.next.bind(observer)));
        });
    }
}
NetworkService.ɵfac = function NetworkService_Factory(t) { return new (t || NetworkService)(); };
NetworkService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NetworkService, factory: NetworkService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NetworkService, [{
        type: Injectable
    }], null, null); })();

class PageService {
    /**
     * @constructor
     * @param {AppConfig} appConfig
     * @param {Router} _router
     * @param {Title} _titleService
     * @param {StorageService} _storageService
     */
    constructor(appConfig, _router, _titleService, _storageService) {
        this.appConfig = appConfig;
        this._router = _router;
        this._titleService = _titleService;
        this._storageService = _storageService;
        this.cacheKey = '__curl';
        this._titleChange$ = new ReplaySubject();
        this._processChange$ = new ReplaySubject();
    }
    /**
     * @return {ReplaySubject}
     */
    get title() {
        return this._titleChange$;
    }
    /**
     * @return {ReplaySubject}
     */
    get processing() {
        return this._processChange$;
    }
    /**
     * @param {string} title
     * @param {string=} prefix
     * @return {void}
     */
    setTitle(title, prefix = this.appConfig.name) {
        this._titleService.setTitle(prefix + ' - ' + title);
        this._titleChange$.next(title);
    }
    /**
     * @return {string}
     */
    getTitle() {
        return this._titleService.getTitle();
    }
    /**
     * @param {string} path
     * @param {NavigationExtras} extras
     * @return {void}
     */
    setCurrentURL(path, extras) {
        path
            ? this._storageService.setLocal(this.cacheKey, { path, extras })
            : this._storageService.removeLocal(this.cacheKey);
    }
    /**
     * @return {PageURL}
     */
    getCurrentURL() {
        return this._storageService.getLocal(this.cacheKey) || { path: this.appConfig.mainPath };
    }
    /**
     * @return {void}
     */
    navigateToCurrentURL() {
        const url = this.getCurrentURL();
        this._router.navigate([url.path], url.extras);
    }
    /**
     * @param {boolean} isProcessing
     * @return {void}
     */
    setProcessing(isProcessing) {
        isProcessing
            ? this._processChange$.next(true)
            : setTimeout(() => this._processChange$.next(false), 1000);
    }
}
PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(i0.ɵɵinject(APP_CONFIG, 8), i0.ɵɵinject(i1$6.Router), i0.ɵɵinject(i1$2.Title), i0.ɵɵinject(StorageService)); };
PageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PageService, factory: PageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageService, [{
        type: Injectable
    }], function () { return [{ type: AppConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i1$6.Router }, { type: i1$2.Title }, { type: StorageService }]; }, null); })();

class ServiceWorkerService {
    /**
     * @constructor
     * @param {AppConfig} appConfig
     * @param {ServerConfig} serverConfig
     * @param {SwPush} _swPush
     * @param {SwUpdate} _swUpdate
     * @param {ApiService} _apiService
     */
    constructor(appConfig, serverConfig, _swPush, _swUpdate, _apiService) {
        this.appConfig = appConfig;
        this.serverConfig = serverConfig;
        this._swPush = _swPush;
        this._swUpdate = _swUpdate;
        this._apiService = _apiService;
        this._notificationClicks$$ = new Subscription();
        this._swPushMessages$$ = new Subscription();
    }
    /**
     * @return {void}
     */
    updateAvailableVersion() {
        this._swUpdate.versionUpdates
            .pipe(filter((event) => event.type === 'VERSION_READY'))
            .subscribe(() => {
            this._swUpdate.activateUpdate().then(() => document.location.reload());
        });
    }
    /**
     * @param {ServiceWorkerOption} options
     * @param {() => void} callback
     * @return {void}
     */
    requestSubscription(options, callback) {
        if (!this._swPush.isEnabled || 'safari' in window)
            return;
        const serverPublicKey = options?.serverPublicKey || this.serverConfig.fcmPublicKey;
        if (!serverPublicKey)
            return;
        // Get current subscription
        this._swPush.subscription
            .pipe(take(1))
            .pipe(single())
            .subscribe((subscription) => {
            if (subscription) {
                // Send subscription to callback
                _.isFunction(callback) && callback(subscription);
                return;
            }
            // Request new subscription
            this._swPush
                .requestSubscription({ serverPublicKey })
                .then((newSubscription) => {
                // Send subscription to callback
                _.isFunction(callback) && callback(newSubscription);
            });
        });
    }
    /**
     * @param {ServiceWorkerOption} options
     * @param {Function} callback
     * @return {void}
     */
    enablePushNotification(options, callback) {
        if (!this._swPush.isEnabled || 'safari' in window)
            return;
        // Request subscription
        this.requestSubscription(options, (subscription) => {
            const subscriptionEndpoint = options?.subscriptionEndpoint || this.serverConfig.fcmSubscriptionEndpoint;
            // Send subscription to the server
            subscriptionEndpoint && this._apiService
                .call(subscriptionEndpoint, 'POST', { subscription })
                .subscribe();
            // Send subscription to callback
            _.isFunction(callback) && callback(subscription);
        });
        // Handle click notification event
        this._notificationClicks$$.unsubscribe();
        this._notificationClicks$$ = this._swPush.notificationClicks
            .subscribe(options.onNotificationClicked.bind(this));
    }
    /**
     * @return {void}
     */
    disablePushNotification() {
        if (!this._swPush.isEnabled || 'safari' in window)
            return;
        // Unsubscribe all subscriptions
        this._swPush.subscription
            .pipe(take(1))
            .forEach((subscription) => subscription?.unsubscribe());
    }
    /**
     * @return {Observable}
     */
    listenPushNotification() {
        return new Observable((observer) => {
            if (!this._swPush.isEnabled || 'safari' in window) {
                observer.next(undefined);
                observer.complete();
                return;
            }
            this._swPushMessages$$.unsubscribe();
            this._swPushMessages$$ = this._swPush.messages
                .subscribe((payload) => observer.next(payload), (error) => observer.error(error), () => observer.complete());
        });
    }
}
ServiceWorkerService.ɵfac = function ServiceWorkerService_Factory(t) { return new (t || ServiceWorkerService)(i0.ɵɵinject(APP_CONFIG, 8), i0.ɵɵinject(SERVER_CONFIG, 8), i0.ɵɵinject(i1$7.SwPush), i0.ɵɵinject(i1$7.SwUpdate), i0.ɵɵinject(ApiService)); };
ServiceWorkerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ServiceWorkerService, factory: ServiceWorkerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ServiceWorkerService, [{
        type: Injectable
    }], function () { return [{ type: AppConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: ServerConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SERVER_CONFIG]
            }] }, { type: i1$7.SwPush }, { type: i1$7.SwUpdate }, { type: ApiService }]; }, null); })();

class SharedService {
    constructor() {
        this.dataChange$ = new BehaviorSubject(undefined);
        this.namespaceDataChange$ = {};
        this._data = {};
    }
    /**
     * @param {string} name
     * @param {any} data
     * @return {void}
     */
    setData(name, data) {
        this._data[name] = data;
        if (!this.namespaceDataChange$[name])
            this.namespaceDataChange$[name] = new BehaviorSubject(undefined);
        this.dataChange$.next(this._data);
        this.namespaceDataChange$[name].next(this._data[name]);
    }
    /**
     * @param {string} name
     * @return {any}
     */
    getData(name) {
        return this._data[name];
    }
    /**
     * @param {string} name
     * @return {void}
     */
    removeData(name) {
        delete this._data[name];
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SharedService, factory: SharedService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedService, [{
        type: Injectable
    }], null, null); })();

class WebNotificationService {
    /**
     * @constructor
     * @param {AppConfig} appConfig
     */
    constructor(appConfig) {
        this.appConfig = appConfig;
        this.permission = this.isSupported() ? 'default' : 'denied';
    }
    /**
     * @return {boolean}
     */
    isSupported() {
        return 'Notification' in window;
    }
    /**
     * @return {void}
     */
    requestPermission() {
        if ('Notification' in window) {
            Notification.requestPermission((status) => this.permission = status);
        }
    }
    /**
     * @param {string} title - Notification title
     * @param {NotificationOptions} options - Notification options
     * @return {Observable}
     */
    create(title, options) {
        return new Observable((observer) => {
            if (!('Notification' in window))
                observer.complete();
            if (this.permission !== 'granted')
                observer.complete();
            const notify = new Notification(title, options);
            notify.onshow = (event) => {
                return observer.next({ notification: notify, event });
            };
            notify.onclick = (event) => {
                return observer.next({ notification: notify, event });
            };
            notify.onerror = (event) => {
                return observer.error({ notification: notify, event });
            };
            notify.onclose = () => observer.complete();
        });
    }
    /**
     * @param {any[]} source
     * @return {Observable}
     */
    generateNotification(source) {
        _.forEach(source, (item) => {
            const options = { body: item.alertContent, icon: this.appConfig.logo };
            this.create(item.title, options)
                .pipe(take(1))
                .subscribe();
        });
    }
}
WebNotificationService.ɵfac = function WebNotificationService_Factory(t) { return new (t || WebNotificationService)(i0.ɵɵinject(APP_CONFIG, 8)); };
WebNotificationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WebNotificationService, factory: WebNotificationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WebNotificationService, [{
        type: Injectable
    }], function () { return [{ type: AppConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [APP_CONFIG]
            }] }]; }, null); })();

class WebSocketService {
    /**
     * @constructor
     * @param {ServerConfig} serverConfig
     * @param {ServerConfig} storageConfig
     * @param {StorageService} _storageService
     */
    constructor(serverConfig, storageConfig, _storageService) {
        this.serverConfig = serverConfig;
        this.storageConfig = storageConfig;
        this._storageService = _storageService;
        this._socketChange$ = new ReplaySubject();
    }
    get socketChange$() { return this._socketChange$; }
    /**
     * @param {string} accessToken
     * @return {void}
     */
    setAccessToken(accessToken) {
        this._accessToken = accessToken;
    }
    /**
     * @param {WebSocketConfig} config
     * @return {Observable}
     */
    connect(config) {
        return new Observable((observer) => {
            const url = config?.url || this.serverConfig.wsURL;
            const namespace = config?.namespace;
            const authorized = this._storageService.getCookie(this.storageConfig.authorizedKey);
            const token = this._accessToken || authorized?.accessToken;
            const uri = _.join([url, namespace], '/');
            const options = { auth: { token }, ...config?.options };
            this._socket = io(uri, options);
            this._socket.on('connect', () => {
                this._socketChange$.next(this._socket);
                observer.next(this._socket);
            });
        });
    }
    /**
     * @param {string} event
     * @param {any} data
     * @return {void}
     */
    emit(event, data) {
        this._socket?.emit(event, data);
    }
    /**
     * @param {string} event
     * @return {Observable}
     */
    on(event) {
        return new Observable((observer) => {
            this._socket?.on(event, (data) => observer.next(data));
        });
    }
    /**
     * @return {void}
     */
    disconnect() {
        this._socket?.disconnect();
    }
}
WebSocketService.ɵfac = function WebSocketService_Factory(t) { return new (t || WebSocketService)(i0.ɵɵinject(SERVER_CONFIG, 8), i0.ɵɵinject(STORAGE_CONFIG, 8), i0.ɵɵinject(StorageService)); };
WebSocketService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WebSocketService, factory: WebSocketService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WebSocketService, [{
        type: Injectable
    }], function () { return [{ type: ServerConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SERVER_CONFIG]
            }] }, { type: StorageConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STORAGE_CONFIG]
            }] }, { type: StorageService }]; }, null); })();

class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [TranslateService, LocaleService, Injector],
            multi: true,
        },
        CookieService,
        /* Service Inject (Do not remove) */
        // ApiService, CanDeactivateGuardService, LocaleService,
        // LoopService, MediaService, NetworkService,
        // PageService, ServiceWorkerService, SharedService,
        // StorageService, WebNotificationService, WebSocketService,
        /* End Service Inject (Do not remove) */
    ], imports: [HttpClientModule, RouterModule, BrowserModule, TranslateModule, BrowserModule, TranslateModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                imports: [HttpClientModule, RouterModule, BrowserModule, TranslateModule],
                exports: [
                    BrowserModule, TranslateModule,
                    /* Component Inject (Do not remove) */
                    /* End Component Inject (Do not remove) */
                    /* Directive Inject (Do not remove) */
                    AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective,
                    AutoResetDirective, BackButtonDirective, DetectScrollDirective,
                    DisableControlDirective, FullscreenDirective, MaxLessThanDirective,
                    MinGreaterThanDirective, NgInitDirective, NgVarDirective,
                    /* End Directive Inject (Do not remove) */
                    /* Pipe Inject (Do not remove) */
                    CapitalizeFirstPipe, ClonePipe, CommasPipe,
                    ConvertPercentPipe, EmojiPipe, EmptyPipe,
                    FileSizePipe, FilterPipe, Filter2Pipe,
                    FindPipe, FixedPipe, FlagIconPipe,
                    HourMeridiemPipe, ImagePipe, IncludesPipe,
                    IsContrastPipe, IsFinitePipe, KUnitPipe,
                    LinkPipe, MarkTextPipe, MaxPipe,
                    MinPipe, MomentDatePipe, MomentFromNowPipe,
                    OrderByPipe, PadNumberPipe, Percent2Pipe,
                    SafeHtmlPipe, TimeStringPipe, TimerPipe,
                    TrackByFnPipe, UnitPipe,
                    /* End Pipe Inject (Do not remove) */
                ],
                declarations: [
                    /* Component Inject (Do not remove) */
                    /* End Component Inject (Do not remove) */
                    /* Directive Inject (Do not remove) */
                    AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective,
                    AutoResetDirective, BackButtonDirective, DetectScrollDirective,
                    DisableControlDirective, FullscreenDirective, MaxLessThanDirective,
                    MinGreaterThanDirective, NgInitDirective, NgVarDirective,
                    /* End Directive Inject (Do not remove) */
                    /* Pipe Inject (Do not remove) */
                    CapitalizeFirstPipe, ClonePipe, CommasPipe,
                    ConvertPercentPipe, EmojiPipe, EmptyPipe,
                    FileSizePipe, FilterPipe, Filter2Pipe,
                    FindPipe, FixedPipe, FlagIconPipe,
                    HourMeridiemPipe, ImagePipe, IncludesPipe,
                    IsContrastPipe, IsFinitePipe, KUnitPipe,
                    LinkPipe, MarkTextPipe, MaxPipe,
                    MinPipe, MomentDatePipe, MomentFromNowPipe,
                    OrderByPipe, PadNumberPipe, Percent2Pipe,
                    SafeHtmlPipe, TimeStringPipe, TimerPipe,
                    TrackByFnPipe, UnitPipe,
                    /* End Pipe Inject (Do not remove) */
                ],
                providers: [
                    {
                        provide: APP_INITIALIZER,
                        useFactory: appInitializerFactory,
                        deps: [TranslateService, LocaleService, Injector],
                        multi: true,
                    },
                    CookieService,
                    /* Service Inject (Do not remove) */
                    // ApiService, CanDeactivateGuardService, LocaleService,
                    // LoopService, MediaService, NetworkService,
                    // PageService, ServiceWorkerService, SharedService,
                    // StorageService, WebNotificationService, WebSocketService,
                    /* End Service Inject (Do not remove) */
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { declarations: [
        /* Component Inject (Do not remove) */
        /* End Component Inject (Do not remove) */
        /* Directive Inject (Do not remove) */
        AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective,
        AutoResetDirective, BackButtonDirective, DetectScrollDirective,
        DisableControlDirective, FullscreenDirective, MaxLessThanDirective,
        MinGreaterThanDirective, NgInitDirective, NgVarDirective,
        /* End Directive Inject (Do not remove) */
        /* Pipe Inject (Do not remove) */
        CapitalizeFirstPipe, ClonePipe, CommasPipe,
        ConvertPercentPipe, EmojiPipe, EmptyPipe,
        FileSizePipe, FilterPipe, Filter2Pipe,
        FindPipe, FixedPipe, FlagIconPipe,
        HourMeridiemPipe, ImagePipe, IncludesPipe,
        IsContrastPipe, IsFinitePipe, KUnitPipe,
        LinkPipe, MarkTextPipe, MaxPipe,
        MinPipe, MomentDatePipe, MomentFromNowPipe,
        OrderByPipe, PadNumberPipe, Percent2Pipe,
        SafeHtmlPipe, TimeStringPipe, TimerPipe,
        TrackByFnPipe, UnitPipe], imports: [HttpClientModule, RouterModule, BrowserModule, TranslateModule], exports: [BrowserModule, TranslateModule,
        /* Component Inject (Do not remove) */
        /* End Component Inject (Do not remove) */
        /* Directive Inject (Do not remove) */
        AdjustFontsizeDirective, AspectRatioDirective, AutoFocusDirective,
        AutoResetDirective, BackButtonDirective, DetectScrollDirective,
        DisableControlDirective, FullscreenDirective, MaxLessThanDirective,
        MinGreaterThanDirective, NgInitDirective, NgVarDirective,
        /* End Directive Inject (Do not remove) */
        /* Pipe Inject (Do not remove) */
        CapitalizeFirstPipe, ClonePipe, CommasPipe,
        ConvertPercentPipe, EmojiPipe, EmptyPipe,
        FileSizePipe, FilterPipe, Filter2Pipe,
        FindPipe, FixedPipe, FlagIconPipe,
        HourMeridiemPipe, ImagePipe, IncludesPipe,
        IsContrastPipe, IsFinitePipe, KUnitPipe,
        LinkPipe, MarkTextPipe, MaxPipe,
        MinPipe, MomentDatePipe, MomentFromNowPipe,
        OrderByPipe, PadNumberPipe, Percent2Pipe,
        SafeHtmlPipe, TimeStringPipe, TimerPipe,
        TrackByFnPipe, UnitPipe] }); })();

class CustomMissingTranslationHandler {
    /**
     * @param {MissingTranslationHandlerParams} params
     * @return {string}
     */
    handle(params) {
        isDevMode() && console.error(params);
        return '';
    }
}

class MultiTranslateHttpLoader {
    /**
     * @constructor
     * @param {{prefix: string, suffix: string }[]} resources
     * @param {HttpClient} _http
     */
    constructor(resources = [{ prefix: 'assets/i18n/', suffix: '.json' }], _http) {
        this.resources = resources;
        this._http = _http;
    }
    /**
     * @param {string} lang
     * @return {Observable<Record<string, unknown>>}
     */
    getTranslation(lang) {
        return forkJoin(_.map(this.resources, (config) => this._http.get(`${config.prefix}${lang}${config.suffix}`)))
            .pipe(take(1), map((response) => _.reduce(response, (a, b) => _.assign(a, b))));
    }
}
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], MultiTranslateHttpLoader.prototype, "getTranslation", null);

// @dynamic
class FormHelper {
    /**
     * @static
     * @param {any} value
     * @return {any}
     */
    static copyField(value) {
        let v;
        switch (typeof value) {
            case 'object':
                v = _.assign({}, value);
                break;
            case 'number':
                v = Number(value);
                break;
            default:
                v = _.slice(value, 0, value?.length);
                break;
        }
        return v;
    }
    /**
     * @static
     * @param {FormGroup} form
     * @param {boolean=} resetValue - Flag to reset value
     * @return {void}
     */
    static resetForm(form, resetValue = false) {
        resetValue && form.reset();
        form.markAsPristine();
        form.markAsUntouched();
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { APP_CONFIG, AdjustFontsizeDirective, AliasOf, ApiService, AppConfig, AspectRatioDirective, AutoFocusDirective, AutoResetDirective, BackButtonDirective, CONSTANT, CanDeactivateGuardService, CapitalizeFirstPipe, ClonePipe, CoerceArray, CoerceBoolean, CoerceCssPixel, CoerceElement, CoerceNumber, CommasPipe, Constants, ConvertPercentPipe, CoreModule, CustomMissingTranslationHandler, DATE_TIME_CONFIG, DESTROY_CMP_SUBJECT_NAME, DateTimeConfig, DefaultValue, DetectScrollDirective, DisableControlDirective, EmojiPipe, EmptyPipe, FileSizePipe, Filter2Pipe, FilterPipe, FindPipe, FixedPipe, FlagIconPipe, FormHelper, FullscreenDirective, HourMeridiemPipe, ImagePipe, IncludesPipe, IsContrastPipe, IsFinitePipe, KUnitPipe, LODASH_MIXIN, LinkPipe, LocaleService, LoopService, MarkTextPipe, MaxLessThanDirective, MaxPipe, MediaService, Memoize, MinGreaterThanDirective, MinPipe, MomentDatePipe, MomentFromNowPipe, MultiTranslateHttpLoader, NetworkService, NgInitDirective, NgVarDirective, OrderByPipe, PadNumberPipe, PageService, Percent2Pipe, REGEX, SERVER_CONFIG, STORAGE_CONFIG, SafeHtmlPipe, ServerConfig, ServiceWorkerService, SharedService, StorageConfig, StorageService, TimeStringPipe, TimerPipe, TrackByFnPipe, UnitPipe, Unsubscriber, WebNotificationService, WebSocketService, appInitializerFactory, destroyCmp, untilCmpDestroyed };
//# sourceMappingURL=angular-core.mjs.map
