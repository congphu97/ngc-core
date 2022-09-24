import _ from 'lodash';
export function DefaultValue() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGVjb3JhdG9ycy9kZWZhdWx0LXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixNQUFNLFVBQVUsWUFBWTtJQUMzQixPQUFPLFVBQVUsTUFBYyxFQUFFLEdBQW9CO1FBQ3BELE1BQU0sQ0FBQyxjQUFjLENBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNuQyxHQUFHO2dCQUNGLE9BQU8sSUFBSSxDQUFFLGdCQUFnQixDQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRSxnQkFBZ0IsQ0FBRSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0UsQ0FBQztZQUNELEdBQUcsQ0FBRSxDQUFNO2dCQUNWLElBQUksWUFBWSxHQUFRLElBQUksQ0FBRSxnQkFBZ0IsQ0FBRTtvQkFDL0MsQ0FBQyxDQUFDLElBQUksQ0FBRSxnQkFBZ0IsQ0FBRSxDQUFFLEdBQUcsQ0FBRTtvQkFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFFYixJQUFLLFlBQVksS0FBSyxTQUFTO29CQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBRW5ELE1BQU0sUUFBUSxHQUFRLElBQUksQ0FBRSxnQkFBZ0IsQ0FBRSxJQUFJLEVBQUUsQ0FBQztnQkFFckQsUUFBUSxDQUFFLEdBQUcsQ0FBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBRSxDQUFDO2dCQUU5QyxJQUFJLENBQUUsZ0JBQWdCLENBQUUsR0FBRyxRQUFRLENBQUM7WUFDckMsQ0FBQztZQUNELFVBQVUsRUFBRyxJQUFJO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1NBQ2xCLENBQUUsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZnVuY3Rpb24gRGVmYXVsdFZhbHVlKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCB0YXJnZXQ6IE9iamVjdCwga2V5OiBzdHJpbmcgfCBzeW1ib2wgKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIGtleSwge1xuXHRcdFx0Z2V0KCk6IGFueSB7XG5cdFx0XHRcdHJldHVybiB0aGlzWyAnybXJtWRlZmF1bHR2YWx1ZScgXSA/IHRoaXNbICfJtcm1ZGVmYXVsdHZhbHVlJyBdWyBrZXkgXSA6IHVuZGVmaW5lZDtcblx0XHRcdH0sXG5cdFx0XHRzZXQoIHY6IGFueSApIHtcblx0XHRcdFx0bGV0IGRlZmF1bHRWYWx1ZTogYW55ID0gdGhpc1sgJ8m1ybVkZWZhdWx0dmFsdWUnIF1cblx0XHRcdFx0XHQ/IHRoaXNbICfJtcm1ZGVmYXVsdHZhbHVlJyBdWyBrZXkgXVxuXHRcdFx0XHRcdDogdW5kZWZpbmVkO1xuXG5cdFx0XHRcdGlmICggZGVmYXVsdFZhbHVlID09PSB1bmRlZmluZWQgKSBkZWZhdWx0VmFsdWUgPSB2O1xuXG5cdFx0XHRcdGNvbnN0IG1ldGFkYXRhOiBhbnkgPSB0aGlzWyAnybXJtWRlZmF1bHR2YWx1ZScgXSB8fCB7fTtcblxuXHRcdFx0XHRtZXRhZGF0YVsga2V5IF0gPSBfLmNvZXJjZSggdiwgZGVmYXVsdFZhbHVlICk7XG5cblx0XHRcdFx0dGhpc1sgJ8m1ybVkZWZhdWx0dmFsdWUnIF0gPSBtZXRhZGF0YTtcblx0XHRcdH0sXG5cdFx0XHRlbnVtZXJhYmxlXHQ6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fSApO1xuXHR9O1xufVxuIl19