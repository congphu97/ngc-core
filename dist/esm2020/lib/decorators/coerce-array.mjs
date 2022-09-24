import { coerceArray } from '@angular/cdk/coercion';
export function CoerceArray() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29lcmNlLWFycmF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9kZWNvcmF0b3JzL2NvZXJjZS1hcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEQsTUFBTSxVQUFVLFdBQVc7SUFDMUIsT0FBTyxVQUFVLE1BQWMsRUFBRSxHQUFvQjtRQUNwRCxNQUFNLENBQUMsY0FBYyxDQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDbkMsR0FBRztnQkFDRixPQUFPLElBQUksQ0FBRSxZQUFZLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBRSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDdkUsQ0FBQztZQUNELEdBQUcsQ0FBRSxDQUFNO2dCQUNWLE1BQU0sUUFBUSxHQUFRLElBQUksQ0FBRSxZQUFZLENBQUUsSUFBSSxFQUFFLENBQUM7Z0JBRWpELFFBQVEsQ0FBRSxHQUFHLENBQUUsR0FBRyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUssQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFFcEUsSUFBSSxDQUFFLFlBQVksQ0FBRSxHQUFHLFFBQVEsQ0FBQztZQUNqQyxDQUFDO1lBQ0QsVUFBVSxFQUFHLElBQUk7WUFDakIsWUFBWSxFQUFFLElBQUk7U0FDbEIsQ0FBRSxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIENvZXJjZUFycmF5PFQ+KCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCB0YXJnZXQ6IE9iamVjdCwga2V5OiBzdHJpbmcgfCBzeW1ib2wgKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIGtleSwge1xuXHRcdFx0Z2V0KCk6IFRbXSB7XG5cdFx0XHRcdHJldHVybiB0aGlzWyAnybXJtW1ldGFkYXRhJyBdID8gdGhpc1sgJ8m1ybVtZXRhZGF0YScgXVsga2V5IF0gOiB1bmRlZmluZWQ7XG5cdFx0XHR9LFxuXHRcdFx0c2V0KCB2OiBUW10gKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGFkYXRhOiBhbnkgPSB0aGlzWyAnybXJtW1ldGFkYXRhJyBdIHx8IHt9O1xuXG5cdFx0XHRcdG1ldGFkYXRhWyBrZXkgXSA9IHYgIT09IHVuZGVmaW5lZCA/IGNvZXJjZUFycmF5PFQ+KCB2ICkgOiB1bmRlZmluZWQ7XG5cblx0XHRcdFx0dGhpc1sgJ8m1ybVtZXRhZGF0YScgXSA9IG1ldGFkYXRhO1xuXHRcdFx0fSxcblx0XHRcdGVudW1lcmFibGVcdDogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHR9ICk7XG5cdH07XG59XG4iXX0=