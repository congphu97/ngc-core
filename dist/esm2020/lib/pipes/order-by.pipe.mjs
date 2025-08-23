import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class OrderByPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvb3JkZXItYnkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFdBQVc7SUFFdkI7OztPQUdHO0lBQ0ksU0FBUyxDQUFFLEtBQVUsRUFBRSxDQUFFLE1BQU0sR0FBRyxHQUFHLENBQU87UUFDbEQsSUFBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsS0FBSyxDQUFFO1lBQUcsT0FBTyxLQUFLLENBQUM7UUFFeEMsSUFBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsTUFBTSxDQUFFO2VBQ3JCLENBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBRSxFQUFHO1lBQ3BELE1BQU0sZUFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7WUFDNUUsTUFBTSxNQUFNLEdBQVcsZUFBZSxDQUFDLFNBQVMsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDekQsTUFBTSxJQUFJLEdBQVksTUFBTSxLQUFLLEdBQUcsQ0FBQztZQUVyQyxJQUFLLENBQUMsZUFBZSxJQUFJLGVBQWUsS0FBSyxHQUFHLElBQUksZUFBZSxLQUFLLEdBQUcsRUFBRztnQkFDN0UsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMs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QyxJQUFLLFVBQVUsQ0FBRSxDQUFDLENBQUUsR0FBRyxVQUFVLENBQUUsQ0FBQyxDQUFFO2dCQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSyxVQUFVLENBQUUsQ0FBQyxDQUFFLEdBQUcsVUFBVSxDQUFFLENBQUMsQ0FBRTtnQkFBRyxPQUFPLENBQUMsQ0FBQztTQUNsRDtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CO0lBQzlCLENBQUM7O3NFQXJFVyxXQUFXOzJFQUFYLFdBQVc7O0lBbUR0QixPQUFPLEVBQUU7Ozs7cURBa0JUO3VGQXJFVyxXQUFXO2NBRHZCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtnQkFxRDdCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdvcmRlckJ5JywgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBPcmRlckJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2FueX0gaW5wdXRcblx0ICogQHJldHVybiB7YW55fVxuXHQgKi9cblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IGFueSwgWyBjb25maWcgPSAnKycgXTogYW55ICk6IGFueSB7XG5cdFx0aWYgKCAhXy5pc0FycmF5KCBpbnB1dCApICkgcmV0dXJuIGlucHV0O1xuXG5cdFx0aWYgKCAhXy5pc0FycmF5KCBjb25maWcgKVxuXHRcdFx0fHwgKCBfLmlzQXJyYXkoIGNvbmZpZyApICYmIGNvbmZpZy5sZW5ndGggPT09IDEgKSApIHtcblx0XHRcdGNvbnN0IHByb3BlcnR5VG9DaGVjazogc3RyaW5nID0gIV8uaXNBcnJheSggY29uZmlnICkgPyBjb25maWcgOiBjb25maWdbIDAgXTtcblx0XHRcdGNvbnN0IHN5bWJvbDogc3RyaW5nID0gcHJvcGVydHlUb0NoZWNrLnN1YnN0cmluZyggMCwgMSApO1xuXHRcdFx0Y29uc3QgZGVzYzogYm9vbGVhbiA9IHN5bWJvbCA9PT0gJy0nO1xuXG5cdFx0XHRpZiAoICFwcm9wZXJ0eVRvQ2hlY2sgfHwgcHJvcGVydHlUb0NoZWNrID09PSAnLScgfHwgcHJvcGVydHlUb0NoZWNrID09PSAnKycgKSB7XG5cdFx0XHRcdHJldHVybiAhZGVzYyA/IGlucHV0LnNvcnQoKSA6IGlucHV0LnNvcnQoKS5yZXZlcnNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHByb3BlcnR5OiBzdHJpbmcgPSBzeW1ib2wgPT09ICcrJyB8fCBzeW1ib2wgPT09ICctJ1xuXHRcdFx0XHQ/IHByb3BlcnR5VG9DaGVjay5zdWJzdHJpbmcoIDEgKVxuXHRcdFx0XHQ6IHByb3BlcnR5VG9DaGVjaztcblxuXHRcdFx0cmV0dXJuIGlucHV0LnNvcnQoICggYTogYW55LCBiOiBhbnkgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGNvbXBhcmlzb246IG51bWJlciA9IHRoaXMuX29yZGVyQnlDb21wYXJhdG9yKCBfLmdldCggYSwgcHJvcGVydHkgKSwgXy5nZXQoIGIsIHByb3BlcnR5ICkgKTtcblxuXHRcdFx0XHRyZXR1cm4gZGVzYyA/IC1jb21wYXJpc29uIDogY29tcGFyaXNvbjtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQuc29ydCggKCBhOiBhbnksIGI6IGFueSApID0+IHtcblx0XHRcdGZvciAoIGNvbnN0IGMgb2YgY29uZmlnICkge1xuXHRcdFx0XHRjb25zdCBzeW1ib2w6IHN0cmluZyA9IGMuc3Vic3RyaW5nKCAwLCAxICk7XG5cdFx0XHRcdGNvbnN0IGRlc2M6IGJvb2xlYW4gPSBzeW1ib2wgPT09ICctJztcblx0XHRcdFx0Y29uc3QgcHJvcGVydHk6IHN0cmluZyA9IHN5bWJvbCA9PT0gJysnIHx8IHN5bWJvbCA9PT0gJy0nXG5cdFx0XHRcdFx0PyBjLnN1YnN0cmluZyggMSApXG5cdFx0XHRcdFx0OiBjO1xuXHRcdFx0XHRjb25zdCBjb21wYXJpc29uOiBudW1iZXIgPSB0aGlzLl9vcmRlckJ5Q29tcGFyYXRvciggXy5nZXQoIGEsIHByb3BlcnR5ICksIF8uZ2V0KCBiLCBwcm9wZXJ0eSApICk7XG5cblx0XHRcdFx0aWYgKCBjb21wYXJpc29uICE9PSAwICkgcmV0dXJuIGRlc2MgPyAtY29tcGFyaXNvbiA6IGNvbXBhcmlzb247XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2FueX0gYVxuXHQgKiBAcGFyYW0ge2FueX0gYlxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHByaXZhdGUgX29yZGVyQnlDb21wYXJhdG9yKCBhOiBhbnksIGI6IGFueSApOiBudW1iZXIge1xuXHRcdGlmICggXy5pc05pbCggYSApICYmIF8uaXNOaWwoIGIgKSApIHJldHVybiAwO1xuXHRcdGlmICggXy5pc05pbCggYSApICkgcmV0dXJuIC0xO1xuXHRcdGlmICggXy5pc05pbCggYiApICkgcmV0dXJuIDE7XG5cblx0XHRpZiAoICggXy5pc05hTiggcGFyc2VGbG9hdCggYSApICkgfHwgIV8uaXNGaW5pdGUoIGEgKSApXG5cdFx0XHR8fCAoIF8uaXNOYU4oIHBhcnNlRmxvYXQoIGIgKSApIHx8ICFfLmlzRmluaXRlKCBiICkgKSApIHtcblx0XHRcdC8vIElzbid0IGEgbnVtYmVyIHNvIGxvd2VyY2FzZSB0aGUgc3RyaW5nIHRvIHByb3Blcmx5IGNvbXBhcmVcblx0XHRcdGlmICggXy50b0xvd2VyKCBhICkgPCBfLnRvTG93ZXIoIGIgKSApIHJldHVybiAtMTtcblx0XHRcdGlmICggXy50b0xvd2VyKCBhICkgPiBfLnRvTG93ZXIoIGIgKSApIHJldHVybiAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBQYXJzZSBzdHJpbmdzIGFzIG51bWJlcnMgdG8gY29tcGFyZSBwcm9wZXJseVxuXHRcdFx0aWYgKCBwYXJzZUZsb2F0KCBhICkgPCBwYXJzZUZsb2F0KCBiICkgKSByZXR1cm4gLTE7XG5cdFx0XHRpZiAoIHBhcnNlRmxvYXQoIGEgKSA+IHBhcnNlRmxvYXQoIGIgKSApIHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiAwOyAvLyBlcXVhbCBlYWNoIG90aGVyXG5cdH1cblxufVxuIl19