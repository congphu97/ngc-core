import { __decorate, __metadata } from "tslib";
import { Pipe, Optional, Inject } from '@angular/core';
import moment from 'moment-timezone';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import { CONSTANT } from '../resources';
import { DateTimeConfig, DATE_TIME_CONFIG } from '../injection-token';
import { EmptyPipe } from './empty.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../injection-token";
export class MomentDatePipe extends EmptyPipe {
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
    }], function () { return [{ type: i1.DateTimeConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DATE_TIME_CONFIG]
            }] }]; }, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvbW9tZW50LWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLE1BQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHekMsTUFBTSxPQUFPLGNBQWUsU0FBUSxTQUFTO0lBRTVDOzs7T0FHRztJQUNILFlBQTZELGVBQStCO1FBQzNGLEtBQUssRUFBRSxDQUFDO1FBRG9ELG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUU1RixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFFSSxTQUFTLENBQUUsS0FBVSxFQUFFLE1BQWUsRUFBRSxRQUFrQjtRQUNoRSxJQUFLLENBQUMsQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFO1lBQUcsT0FBTyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakQsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRXZDLElBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQUcsT0FBTyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEQsSUFBSyxNQUFNLEtBQUssU0FBUztZQUFHLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUUzRCxNQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ25GLE1BQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDbkYsSUFBSSxPQUFPLEdBQVcsWUFBWSxVQUFVLEVBQUUsQ0FBQztRQUMvQyxJQUFJLE9BQU8sR0FBVyxlQUFlLFVBQVUsRUFBRSxDQUFDO1FBQ2xELElBQUksT0FBTyxHQUFXLGdCQUFnQixVQUFVLEVBQUUsQ0FBQztRQUNuRCxJQUFJLFFBQVEsR0FBVyxVQUFVLENBQUM7UUFDbEMsSUFBSSxRQUFRLEdBQVcsVUFBVSxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFXLFVBQVUsQ0FBQztRQUVsQyxJQUFLLFFBQVEsRUFBRztZQUNmLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRSxFQUFFLEdBQUcsQ0FBRSxDQUFDO1lBQ2pELE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRSxFQUFFLEdBQUcsQ0FBRSxDQUFDO1lBQ2pELE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRSxFQUFFLEdBQUcsQ0FBRSxDQUFDO1lBQ2pELFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUUsQ0FBRSxVQUFVLEVBQUUsVUFBVSxDQUFFLEVBQUUsR0FBRyxDQUFFLENBQUM7U0FDM0U7UUFFRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUUsU0FBUyxFQUFFO1lBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTztZQUN6QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVE7U0FDNUIsQ0FBRSxDQUFDO0lBQ0wsQ0FBQzs7NEVBN0NXLGNBQWMsdUJBTVEsZ0JBQWdCO2lGQU50QyxjQUFjO0FBaUIxQjtJQURDLE9BQU8sRUFBRTs7OzsrQ0E2QlQ7dUZBN0NXLGNBQWM7Y0FEMUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTs7c0JBT2IsUUFBUTs7c0JBQUksTUFBTTt1QkFBRSxnQkFBZ0I7d0JBVzNDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgbW9tZW50LCB7IE1vbWVudCB9IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcbmltcG9ydCB7IENPTlNUQU5UIH0gZnJvbSAnLi4vcmVzb3VyY2VzJztcbmltcG9ydCB7IERhdGVUaW1lQ29uZmlnLCBEQVRFX1RJTUVfQ09ORklHIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IEVtcHR5UGlwZSB9IGZyb20gJy4vZW1wdHkucGlwZSc7XG5cbkBQaXBlKHsgbmFtZTogJ21vbWVudERhdGUnIH0pXG5leHBvcnQgY2xhc3MgTW9tZW50RGF0ZVBpcGUgZXh0ZW5kcyBFbXB0eVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RGF0ZVRpbWVDb25maWd9IF9kYXRlVGltZUNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoIERBVEVfVElNRV9DT05GSUcgKSBwcml2YXRlIF9kYXRlVGltZUNvbmZpZzogRGF0ZVRpbWVDb25maWcgKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2FueX0gaW5wdXRcblx0ICogQHBhcmFtIHtzdHJpbmc9fSBmb3JtYXRcblx0ICogQHBhcmFtIHtib29sZWFuPX0gc2hvd1RpbWVcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBpbnB1dDogYW55LCBmb3JtYXQ/OiBzdHJpbmcsIHNob3dUaW1lPzogYm9vbGVhbiApOiBzdHJpbmcge1xuXHRcdGlmICggXy5pc05pbCggaW5wdXQgKSApIHJldHVybiBzdXBlci50cmFuc2Zvcm0oKTtcblxuXHRcdGNvbnN0IG91dHB1dDogTW9tZW50ID0gbW9tZW50KCBpbnB1dCApO1xuXG5cdFx0aWYgKCAhb3V0cHV0LmlzVmFsaWQoKSApIHJldHVybiBzdXBlci50cmFuc2Zvcm0oKTtcblx0XHRpZiAoIGZvcm1hdCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIG91dHB1dC5mb3JtYXQoIGZvcm1hdCApO1xuXG5cdFx0Y29uc3QgZGF0ZUZvcm1hdDogc3RyaW5nID0gdGhpcy5fZGF0ZVRpbWVDb25maWcuZGF0ZUZvcm1hdCB8fCBDT05TVEFOVC5EQVRFX0ZPUk1BVDtcblx0XHRjb25zdCB0aW1lRm9ybWF0OiBzdHJpbmcgPSB0aGlzLl9kYXRlVGltZUNvbmZpZy50aW1lRm9ybWF0IHx8IENPTlNUQU5ULlRJTUVfRk9STUFUO1xuXHRcdGxldCBzYW1lRGF5OiBzdHJpbmcgPSBgW1RvZGF5XSwgJHtkYXRlRm9ybWF0fWA7XG5cdFx0bGV0IG5leHREYXk6IHN0cmluZyA9IGBbVG9tb3Jyb3ddLCAke2RhdGVGb3JtYXR9YDtcblx0XHRsZXQgbGFzdERheTogc3RyaW5nID0gYFtZZXN0ZXJkYXldLCAke2RhdGVGb3JtYXR9YDtcblx0XHRsZXQgbmV4dFdlZWs6IHN0cmluZyA9IGRhdGVGb3JtYXQ7XG5cdFx0bGV0IGxhc3RXZWVrOiBzdHJpbmcgPSBkYXRlRm9ybWF0O1xuXHRcdGxldCBzYW1lRWxzZTogc3RyaW5nID0gZGF0ZUZvcm1hdDtcblxuXHRcdGlmICggc2hvd1RpbWUgKSB7XG5cdFx0XHRzYW1lRGF5ID0gXy5qb2luKCBbIHNhbWVEYXksIHRpbWVGb3JtYXQgXSwgJyAnICk7XG5cdFx0XHRuZXh0RGF5ID0gXy5qb2luKCBbIG5leHREYXksIHRpbWVGb3JtYXQgXSwgJyAnICk7XG5cdFx0XHRsYXN0RGF5ID0gXy5qb2luKCBbIGxhc3REYXksIHRpbWVGb3JtYXQgXSwgJyAnICk7XG5cdFx0XHRuZXh0V2VlayA9IGxhc3RXZWVrID0gc2FtZUVsc2UgPSBfLmpvaW4oIFsgZGF0ZUZvcm1hdCwgdGltZUZvcm1hdCBdLCAnICcgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0LmNhbGVuZGFyKCB1bmRlZmluZWQsIHtcblx0XHRcdHNhbWVEYXksIG5leHREYXksIGxhc3REYXksXG5cdFx0XHRuZXh0V2VlaywgbGFzdFdlZWssIHNhbWVFbHNlLFxuXHRcdH0gKTtcblx0fVxuXG59XG4iXX0=