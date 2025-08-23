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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvbW9tZW50LWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLE1BQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHekMsTUFBTSxPQUFPLGNBQWUsU0FBUSxTQUFTO0lBRTVDOzs7T0FHRztJQUNILFlBQTZELGVBQStCO1FBQzNGLEtBQUssRUFBRSxDQUFDO1FBRG9ELG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUU1RixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFFSSxTQUFTLENBQUUsS0FBVSxFQUFFLE1BQWUsRUFBRSxRQUFrQjtRQUNoRSxJQUFLLENBQUMsQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFO1lBQUcsT0FBTyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakQsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRXZDLElBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQUcsT0FBTyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEQsSUFBSyxNQUFNLEtBQUssU0FBUztZQUFHLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUUzRCxNQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ25GLE1BQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDbkYsSUFBSSxPQUFPLEdBQVcsWUFBWSxVQUFVLEVBQUUsQ0FBQztRQUMvQyxJQUFJLE9BQU8sR0FBVyxlQUFlLFVBQVUsRUFBRSxDQUFDO1FBQ2xELElBQUksT0FBTyxHQUFXLGdCQUFnQixVQUFVLEVBQUUsQ0FBQztRQUNuRCxJQUFJLFFBQVEsR0FBVyxVQUFVLENBQUM7UUFDbEMsSUFBSSxRQUFRLEdBQVcsVUFBVSxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFXLFVBQVUsQ0FBQztRQUVsQyxJQUFLLFFBQVEsRUFBRztZQUNmLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRSxFQUFFLEdBQUcsQ0FBRSxDQUFDO1lBQ2pELE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRSxFQUFFLEdBQUcsQ0FBRSxDQUFDO1lBQ2pELE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRSxFQUFFLEdBQUcsQ0FBRSxDQUFDO1lBQ2pELFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUUsQ0FBRSxVQUFVLEVBQUUsVUFBVSxDQUFFLEVBQUUsR0FBRyxDQUFFLENBQUM7U0FDM0U7UUFFRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUUsU0FBUyxFQUFFO1lBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTztZQUN6QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVE7U0FDNUIsQ0FBRSxDQUFDO0lBQ0wsQ0FBQzs7NEVBN0NXLGNBQWMsdUJBTVEsZ0JBQWdCO2lGQU50QyxjQUFjOztJQWdCekIsT0FBTyxFQUFFOzs7OytDQTZCVDt1RkE3Q1csY0FBYztjQUQxQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOztzQkFPYixRQUFROztzQkFBSSxNQUFNO3VCQUFFLGdCQUFnQjt3QkFXM0MsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBtb21lbnQsIHsgTW9tZW50IH0gZnJvbSAnbW9tZW50LXRpbWV6b25lJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuaW1wb3J0IHsgQ09OU1RBTlQgfSBmcm9tICcuLi9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgRGF0ZVRpbWVDb25maWcsIERBVEVfVElNRV9DT05GSUcgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgRW1wdHlQaXBlIH0gZnJvbSAnLi9lbXB0eS5waXBlJztcblxuQFBpcGUoeyBuYW1lOiAnbW9tZW50RGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBNb21lbnREYXRlUGlwZSBleHRlbmRzIEVtcHR5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtEYXRlVGltZUNvbmZpZ30gX2RhdGVUaW1lQ29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQEluamVjdCggREFURV9USU1FX0NPTkZJRyApIHByaXZhdGUgX2RhdGVUaW1lQ29uZmlnOiBEYXRlVGltZUNvbmZpZyApIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55fSBpbnB1dFxuXHQgKiBAcGFyYW0ge3N0cmluZz19IGZvcm1hdFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG93VGltZVxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGlucHV0OiBhbnksIGZvcm1hdD86IHN0cmluZywgc2hvd1RpbWU/OiBib29sZWFuICk6IHN0cmluZyB7XG5cdFx0aWYgKCBfLmlzTmlsKCBpbnB1dCApICkgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSgpO1xuXG5cdFx0Y29uc3Qgb3V0cHV0OiBNb21lbnQgPSBtb21lbnQoIGlucHV0ICk7XG5cblx0XHRpZiAoICFvdXRwdXQuaXNWYWxpZCgpICkgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSgpO1xuXHRcdGlmICggZm9ybWF0ICE9PSB1bmRlZmluZWQgKSByZXR1cm4gb3V0cHV0LmZvcm1hdCggZm9ybWF0ICk7XG5cblx0XHRjb25zdCBkYXRlRm9ybWF0OiBzdHJpbmcgPSB0aGlzLl9kYXRlVGltZUNvbmZpZy5kYXRlRm9ybWF0IHx8IENPTlNUQU5ULkRBVEVfRk9STUFUO1xuXHRcdGNvbnN0IHRpbWVGb3JtYXQ6IHN0cmluZyA9IHRoaXMuX2RhdGVUaW1lQ29uZmlnLnRpbWVGb3JtYXQgfHwgQ09OU1RBTlQuVElNRV9GT1JNQVQ7XG5cdFx0bGV0IHNhbWVEYXk6IHN0cmluZyA9IGBbVG9kYXldLCAke2RhdGVGb3JtYXR9YDtcblx0XHRsZXQgbmV4dERheTogc3RyaW5nID0gYFtUb21vcnJvd10sICR7ZGF0ZUZvcm1hdH1gO1xuXHRcdGxldCBsYXN0RGF5OiBzdHJpbmcgPSBgW1llc3RlcmRheV0sICR7ZGF0ZUZvcm1hdH1gO1xuXHRcdGxldCBuZXh0V2Vlazogc3RyaW5nID0gZGF0ZUZvcm1hdDtcblx0XHRsZXQgbGFzdFdlZWs6IHN0cmluZyA9IGRhdGVGb3JtYXQ7XG5cdFx0bGV0IHNhbWVFbHNlOiBzdHJpbmcgPSBkYXRlRm9ybWF0O1xuXG5cdFx0aWYgKCBzaG93VGltZSApIHtcblx0XHRcdHNhbWVEYXkgPSBfLmpvaW4oIFsgc2FtZURheSwgdGltZUZvcm1hdCBdLCAnICcgKTtcblx0XHRcdG5leHREYXkgPSBfLmpvaW4oIFsgbmV4dERheSwgdGltZUZvcm1hdCBdLCAnICcgKTtcblx0XHRcdGxhc3REYXkgPSBfLmpvaW4oIFsgbGFzdERheSwgdGltZUZvcm1hdCBdLCAnICcgKTtcblx0XHRcdG5leHRXZWVrID0gbGFzdFdlZWsgPSBzYW1lRWxzZSA9IF8uam9pbiggWyBkYXRlRm9ybWF0LCB0aW1lRm9ybWF0IF0sICcgJyApO1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXQuY2FsZW5kYXIoIHVuZGVmaW5lZCwge1xuXHRcdFx0c2FtZURheSwgbmV4dERheSwgbGFzdERheSxcblx0XHRcdG5leHRXZWVrLCBsYXN0V2Vlaywgc2FtZUVsc2UsXG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==