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
OrderByPipe.??fac = function OrderByPipe_Factory(t) { return new (t || OrderByPipe)(); };
OrderByPipe.??pipe = /*@__PURE__*/ i0.????definePipe({ name: "orderBy", type: OrderByPipe, pure: false });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Number)
], OrderByPipe.prototype, "_orderByComparator", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(OrderByPipe, [{
        type: Pipe,
        args: [{ name: 'orderBy', pure: false }]
    }], null, { _orderByComparator: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvb3JkZXItYnkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFdBQVc7SUFFdkI7OztPQUdHO0lBQ0ksU0FBUyxDQUFFLEtBQVUsRUFBRSxDQUFFLE1BQU0sR0FBRyxHQUFHLENBQU87UUFDbEQsSUFBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsS0FBSyxDQUFFO1lBQUcsT0FBTyxLQUFLLENBQUM7UUFFeEMsSUFBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsTUFBTSxDQUFFO2VBQ3JCLENBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBRSxFQUFHO1lBQ3BELE1BQU0sZUFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7WUFDNUUsTUFBTSxNQUFNLEdBQVcsZUFBZSxDQUFDLFNBQVMsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDekQsTUFBTSxJQUFJLEdBQVksTUFBTSxLQUFLLEdBQUcsQ0FBQztZQUVyQyxJQUFLLENBQUMsZUFBZSxJQUFJLGVBQWUsS0FBSyxHQUFHLElBQUksZUFBZSxLQUFLLEdBQUcsRUFBRztnQkFDN0UsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMs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QyxJQUFLLFVBQVUsQ0FBRSxDQUFDLENBQUUsR0FBRyxVQUFVLENBQUUsQ0FBQyxDQUFFO2dCQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSyxVQUFVLENBQUUsQ0FBQyxDQUFFLEdBQUcsVUFBVSxDQUFFLENBQUMsQ0FBRTtnQkFBRyxPQUFPLENBQUMsQ0FBQztTQUNsRDtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CO0lBQzlCLENBQUM7O3NFQXJFVyxXQUFXOzJFQUFYLFdBQVc7QUFvRHZCO0lBREMsT0FBTyxFQUFFOzs7O3FEQWtCVDt1RkFyRVcsV0FBVztjQUR2QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBcUQ3QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAnb3JkZXJCeScsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgT3JkZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHthbnl9IGlucHV0XG5cdCAqIEByZXR1cm4ge2FueX1cblx0ICovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGlucHV0OiBhbnksIFsgY29uZmlnID0gJysnIF06IGFueSApOiBhbnkge1xuXHRcdGlmICggIV8uaXNBcnJheSggaW5wdXQgKSApIHJldHVybiBpbnB1dDtcblxuXHRcdGlmICggIV8uaXNBcnJheSggY29uZmlnIClcblx0XHRcdHx8ICggXy5pc0FycmF5KCBjb25maWcgKSAmJiBjb25maWcubGVuZ3RoID09PSAxICkgKSB7XG5cdFx0XHRjb25zdCBwcm9wZXJ0eVRvQ2hlY2s6IHN0cmluZyA9ICFfLmlzQXJyYXkoIGNvbmZpZyApID8gY29uZmlnIDogY29uZmlnWyAwIF07XG5cdFx0XHRjb25zdCBzeW1ib2w6IHN0cmluZyA9IHByb3BlcnR5VG9DaGVjay5zdWJzdHJpbmcoIDAsIDEgKTtcblx0XHRcdGNvbnN0IGRlc2M6IGJvb2xlYW4gPSBzeW1ib2wgPT09ICctJztcblxuXHRcdFx0aWYgKCAhcHJvcGVydHlUb0NoZWNrIHx8IHByb3BlcnR5VG9DaGVjayA9PT0gJy0nIHx8IHByb3BlcnR5VG9DaGVjayA9PT0gJysnICkge1xuXHRcdFx0XHRyZXR1cm4gIWRlc2MgPyBpbnB1dC5zb3J0KCkgOiBpbnB1dC5zb3J0KCkucmV2ZXJzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwcm9wZXJ0eTogc3RyaW5nID0gc3ltYm9sID09PSAnKycgfHwgc3ltYm9sID09PSAnLSdcblx0XHRcdFx0PyBwcm9wZXJ0eVRvQ2hlY2suc3Vic3RyaW5nKCAxIClcblx0XHRcdFx0OiBwcm9wZXJ0eVRvQ2hlY2s7XG5cblx0XHRcdHJldHVybiBpbnB1dC5zb3J0KCAoIGE6IGFueSwgYjogYW55ICkgPT4ge1xuXHRcdFx0XHRjb25zdCBjb21wYXJpc29uOiBudW1iZXIgPSB0aGlzLl9vcmRlckJ5Q29tcGFyYXRvciggXy5nZXQoIGEsIHByb3BlcnR5ICksIF8uZ2V0KCBiLCBwcm9wZXJ0eSApICk7XG5cblx0XHRcdFx0cmV0dXJuIGRlc2MgPyAtY29tcGFyaXNvbiA6IGNvbXBhcmlzb247XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0LnNvcnQoICggYTogYW55LCBiOiBhbnkgKSA9PiB7XG5cdFx0XHRmb3IgKCBjb25zdCBjIG9mIGNvbmZpZyApIHtcblx0XHRcdFx0Y29uc3Qgc3ltYm9sOiBzdHJpbmcgPSBjLnN1YnN0cmluZyggMCwgMSApO1xuXHRcdFx0XHRjb25zdCBkZXNjOiBib29sZWFuID0gc3ltYm9sID09PSAnLSc7XG5cdFx0XHRcdGNvbnN0IHByb3BlcnR5OiBzdHJpbmcgPSBzeW1ib2wgPT09ICcrJyB8fCBzeW1ib2wgPT09ICctJ1xuXHRcdFx0XHRcdD8gYy5zdWJzdHJpbmcoIDEgKVxuXHRcdFx0XHRcdDogYztcblx0XHRcdFx0Y29uc3QgY29tcGFyaXNvbjogbnVtYmVyID0gdGhpcy5fb3JkZXJCeUNvbXBhcmF0b3IoIF8uZ2V0KCBhLCBwcm9wZXJ0eSApLCBfLmdldCggYiwgcHJvcGVydHkgKSApO1xuXG5cdFx0XHRcdGlmICggY29tcGFyaXNvbiAhPT0gMCApIHJldHVybiBkZXNjID8gLWNvbXBhcmlzb24gOiBjb21wYXJpc29uO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHthbnl9IGFcblx0ICogQHBhcmFtIHthbnl9IGJcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwcml2YXRlIF9vcmRlckJ5Q29tcGFyYXRvciggYTogYW55LCBiOiBhbnkgKTogbnVtYmVyIHtcblx0XHRpZiAoIF8uaXNOaWwoIGEgKSAmJiBfLmlzTmlsKCBiICkgKSByZXR1cm4gMDtcblx0XHRpZiAoIF8uaXNOaWwoIGEgKSApIHJldHVybiAtMTtcblx0XHRpZiAoIF8uaXNOaWwoIGIgKSApIHJldHVybiAxO1xuXG5cdFx0aWYgKCAoIF8uaXNOYU4oIHBhcnNlRmxvYXQoIGEgKSApIHx8ICFfLmlzRmluaXRlKCBhICkgKVxuXHRcdFx0fHwgKCBfLmlzTmFOKCBwYXJzZUZsb2F0KCBiICkgKSB8fCAhXy5pc0Zpbml0ZSggYiApICkgKSB7XG5cdFx0XHQvLyBJc24ndCBhIG51bWJlciBzbyBsb3dlcmNhc2UgdGhlIHN0cmluZyB0byBwcm9wZXJseSBjb21wYXJlXG5cdFx0XHRpZiAoIF8udG9Mb3dlciggYSApIDwgXy50b0xvd2VyKCBiICkgKSByZXR1cm4gLTE7XG5cdFx0XHRpZiAoIF8udG9Mb3dlciggYSApID4gXy50b0xvd2VyKCBiICkgKSByZXR1cm4gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gUGFyc2Ugc3RyaW5ncyBhcyBudW1iZXJzIHRvIGNvbXBhcmUgcHJvcGVybHlcblx0XHRcdGlmICggcGFyc2VGbG9hdCggYSApIDwgcGFyc2VGbG9hdCggYiApICkgcmV0dXJuIC0xO1xuXHRcdFx0aWYgKCBwYXJzZUZsb2F0KCBhICkgPiBwYXJzZUZsb2F0KCBiICkgKSByZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMDsgLy8gZXF1YWwgZWFjaCBvdGhlclxuXHR9XG5cbn1cbiJdfQ==