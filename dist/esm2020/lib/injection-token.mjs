import { InjectionToken } from '@angular/core';
export class AppConfig {
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
export class ServerConfig {
    get apiURL() { return this._apiURL; }
    set apiURL(value) { this._apiURL = value; }
    get wsURL() { return this._wsURL; }
    set wsURL(value) { this._wsURL = value; }
    get fcmPublicKey() { return this._fcmPublicKey; }
    set fcmPublicKey(value) { this._fcmPublicKey = value; }
    get fcmSubscriptionEndpoint() { return this._fcmSubscriptionEndpoint; }
    set fcmSubscriptionEndpoint(value) { this._fcmSubscriptionEndpoint = value; }
}
export class DateTimeConfig {
    get timezone() { return this._timezone; }
    set timezone(value) { this._timezone = value; }
    get dateFormat() { return this._dateFormat; }
    set dateFormat(value) { this._dateFormat = value; }
    get timeFormat() { return this._timeFormat; }
    set timeFormat(value) { this._timeFormat = value; }
    get weekStart() { return this._weekStart; }
    set weekStart(value) { this._weekStart = value; }
}
export class StorageConfig {
    get authorizedKey() { return this._authorizedKey; }
    set authorizedKey(value) { this._authorizedKey = value; }
    get hashKey() { return this._hashKey; }
    set hashKey(value) { this._hashKey = value; }
    get expireDays() { return this._expireDays; }
    set expireDays(value) { this._expireDays = value; }
}
export const APP_CONFIG = new InjectionToken('APP_CONFIG');
export const SERVER_CONFIG = new InjectionToken('SERVER_CONFIG');
export const DATE_TIME_CONFIG = new InjectionToken('DATE_TIME_CONFIG');
export const STORAGE_CONFIG = new InjectionToken('STORAGE_CONFIG');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0aW9uLXRva2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9pbmplY3Rpb24tdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsvQyxNQUFNLE9BQU8sU0FBUztJQVFyQixJQUFJLElBQUksS0FBYSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLElBQUksSUFBSSxDQUFFLEtBQWEsSUFBSyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFakQsSUFBSSxJQUFJLEtBQWEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFJLElBQUksQ0FBRSxLQUFhLElBQUssSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRWpELElBQUksR0FBRyxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxHQUFHLENBQUUsS0FBYSxJQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUvQyxJQUFJLE1BQU0sS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdDLElBQUksTUFBTSxDQUFFLEtBQWEsSUFBSyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFckQsSUFBSSxRQUFRLEtBQWEsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNqRCxJQUFJLFFBQVEsQ0FBRSxLQUFhLElBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBRXpEO0FBRUQsTUFBTSxPQUFPLFlBQVk7SUFPeEIsSUFBSSxNQUFNLEtBQWEsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFJLE1BQU0sQ0FBRSxLQUFhLElBQUssSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXJELElBQUksS0FBSyxLQUFhLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0MsSUFBSSxLQUFLLENBQUUsS0FBYSxJQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVuRCxJQUFJLFlBQVksS0FBYSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3pELElBQUksWUFBWSxDQUFFLEtBQWEsSUFBSyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFakUsSUFBSSx1QkFBdUIsS0FBYSxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDL0UsSUFBSSx1QkFBdUIsQ0FBRSxLQUFhLElBQUssSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FFdkY7QUFFRCxNQUFNLE9BQU8sY0FBYztJQU8xQixJQUFJLFFBQVEsS0FBYSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pELElBQUksUUFBUSxDQUFFLEtBQWEsSUFBSyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFekQsSUFBSSxVQUFVLEtBQWEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNyRCxJQUFJLFVBQVUsQ0FBRSxLQUFhLElBQUssSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTdELElBQUksVUFBVSxLQUFpQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3pELElBQUksVUFBVSxDQUFFLEtBQWlCLElBQUssSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRWpFLElBQUksU0FBUyxLQUFnQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RELElBQUksU0FBUyxDQUFFLEtBQWdCLElBQUssSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBRTlEO0FBRUQsTUFBTSxPQUFPLGFBQWE7SUFNekIsSUFBSSxhQUFhLEtBQWEsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFJLGFBQWEsQ0FBRSxLQUFhLElBQUssSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRW5FLElBQUksT0FBTyxLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxPQUFPLENBQUUsS0FBYSxJQUFLLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV2RCxJQUFJLFVBQVUsS0FBYSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3JELElBQUksVUFBVSxDQUFFLEtBQWEsSUFBSyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FFN0Q7QUFFRCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQThCLElBQUksY0FBYyxDQUFhLFlBQVksQ0FBRSxDQUFDO0FBQ25HLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBOEIsSUFBSSxjQUFjLENBQWEsZUFBZSxDQUFFLENBQUM7QUFDekcsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQW1DLElBQUksY0FBYyxDQUFrQixrQkFBa0IsQ0FBRSxDQUFDO0FBQ3pILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBa0MsSUFBSSxjQUFjLENBQWlCLGdCQUFnQixDQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBXZWVrU3RhcnQgPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNztcbmV4cG9ydCB0eXBlIFRpbWVGb3JtYXQgPSAnaGg6bW0gYScgfCAnSEg6bW0nO1xuXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnIHtcblxuXHRwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cdHByaXZhdGUgX2xvZ286IHN0cmluZztcblx0cHJpdmF0ZSBfdXJsOiBzdHJpbmc7XG5cdHByaXZhdGUgX2xvY2FsZTogc3RyaW5nO1xuXHRwcml2YXRlIF9tYWluUGF0aDogc3RyaW5nO1xuXG5cdGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG5cdHNldCBuYW1lKCB2YWx1ZTogc3RyaW5nICkgeyB0aGlzLl9uYW1lID0gdmFsdWU7IH1cblxuXHRnZXQgbG9nbygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbG9nbzsgfVxuXHRzZXQgbG9nbyggdmFsdWU6IHN0cmluZyApIHsgdGhpcy5fbG9nbyA9IHZhbHVlOyB9XG5cblx0Z2V0IHVybCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fdXJsOyB9XG5cdHNldCB1cmwoIHZhbHVlOiBzdHJpbmcgKSB7IHRoaXMuX3VybCA9IHZhbHVlOyB9XG5cblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbG9jYWxlOyB9XG5cdHNldCBsb2NhbGUoIHZhbHVlOiBzdHJpbmcgKSB7IHRoaXMuX2xvY2FsZSA9IHZhbHVlOyB9XG5cblx0Z2V0IG1haW5QYXRoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9tYWluUGF0aDsgfVxuXHRzZXQgbWFpblBhdGgoIHZhbHVlOiBzdHJpbmcgKSB7IHRoaXMuX21haW5QYXRoID0gdmFsdWU7IH1cblxufVxuXG5leHBvcnQgY2xhc3MgU2VydmVyQ29uZmlnIHtcblxuXHRwcml2YXRlIF9hcGlVUkw6IHN0cmluZztcblx0cHJpdmF0ZSBfd3NVUkw6IHN0cmluZztcblx0cHJpdmF0ZSBfZmNtUHVibGljS2V5OiBzdHJpbmc7XG5cdHByaXZhdGUgX2ZjbVN1YnNjcmlwdGlvbkVuZHBvaW50OiBzdHJpbmc7XG5cblx0Z2V0IGFwaVVSTCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYXBpVVJMOyB9XG5cdHNldCBhcGlVUkwoIHZhbHVlOiBzdHJpbmcgKSB7IHRoaXMuX2FwaVVSTCA9IHZhbHVlOyB9XG5cblx0Z2V0IHdzVVJMKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl93c1VSTDsgfVxuXHRzZXQgd3NVUkwoIHZhbHVlOiBzdHJpbmcgKSB7IHRoaXMuX3dzVVJMID0gdmFsdWU7IH1cblxuXHRnZXQgZmNtUHVibGljS2V5KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9mY21QdWJsaWNLZXk7IH1cblx0c2V0IGZjbVB1YmxpY0tleSggdmFsdWU6IHN0cmluZyApIHsgdGhpcy5fZmNtUHVibGljS2V5ID0gdmFsdWU7IH1cblxuXHRnZXQgZmNtU3Vic2NyaXB0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2ZjbVN1YnNjcmlwdGlvbkVuZHBvaW50OyB9XG5cdHNldCBmY21TdWJzY3JpcHRpb25FbmRwb2ludCggdmFsdWU6IHN0cmluZyApIHsgdGhpcy5fZmNtU3Vic2NyaXB0aW9uRW5kcG9pbnQgPSB2YWx1ZTsgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlVGltZUNvbmZpZyB7XG5cblx0cHJpdmF0ZSBfdGltZXpvbmU6IHN0cmluZztcblx0cHJpdmF0ZSBfZGF0ZUZvcm1hdDogc3RyaW5nO1xuXHRwcml2YXRlIF90aW1lRm9ybWF0OiBUaW1lRm9ybWF0O1xuXHRwcml2YXRlIF93ZWVrU3RhcnQ6IFdlZWtTdGFydDtcblxuXHRnZXQgdGltZXpvbmUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3RpbWV6b25lOyB9XG5cdHNldCB0aW1lem9uZSggdmFsdWU6IHN0cmluZyApIHsgdGhpcy5fdGltZXpvbmUgPSB2YWx1ZTsgfVxuXG5cdGdldCBkYXRlRm9ybWF0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9kYXRlRm9ybWF0OyB9XG5cdHNldCBkYXRlRm9ybWF0KCB2YWx1ZTogc3RyaW5nICkgeyB0aGlzLl9kYXRlRm9ybWF0ID0gdmFsdWU7IH1cblxuXHRnZXQgdGltZUZvcm1hdCgpOiBUaW1lRm9ybWF0IHsgcmV0dXJuIHRoaXMuX3RpbWVGb3JtYXQ7IH1cblx0c2V0IHRpbWVGb3JtYXQoIHZhbHVlOiBUaW1lRm9ybWF0ICkgeyB0aGlzLl90aW1lRm9ybWF0ID0gdmFsdWU7IH1cblxuXHRnZXQgd2Vla1N0YXJ0KCk6IFdlZWtTdGFydCB7IHJldHVybiB0aGlzLl93ZWVrU3RhcnQ7IH1cblx0c2V0IHdlZWtTdGFydCggdmFsdWU6IFdlZWtTdGFydCApIHsgdGhpcy5fd2Vla1N0YXJ0ID0gdmFsdWU7IH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3RvcmFnZUNvbmZpZyB7XG5cblx0cHJpdmF0ZSBfYXV0aG9yaXplZEtleTogc3RyaW5nO1xuXHRwcml2YXRlIF9oYXNoS2V5OiBzdHJpbmc7XG5cdHByaXZhdGUgX2V4cGlyZURheXM6IG51bWJlcjtcblxuXHRnZXQgYXV0aG9yaXplZEtleSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYXV0aG9yaXplZEtleTsgfVxuXHRzZXQgYXV0aG9yaXplZEtleSggdmFsdWU6IHN0cmluZyApIHsgdGhpcy5fYXV0aG9yaXplZEtleSA9IHZhbHVlOyB9XG5cblx0Z2V0IGhhc2hLZXkoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2hhc2hLZXk7IH1cblx0c2V0IGhhc2hLZXkoIHZhbHVlOiBzdHJpbmcgKSB7IHRoaXMuX2hhc2hLZXkgPSB2YWx1ZTsgfVxuXG5cdGdldCBleHBpcmVEYXlzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9leHBpcmVEYXlzOyB9XG5cdHNldCBleHBpcmVEYXlzKCB2YWx1ZTogbnVtYmVyICkgeyB0aGlzLl9leHBpcmVEYXlzID0gdmFsdWU7IH1cblxufVxuXG5leHBvcnQgY29uc3QgQVBQX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48QXBwQ29uZmlnPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBcHBDb25maWc+KCAnQVBQX0NPTkZJRycgKTtcbmV4cG9ydCBjb25zdCBTRVJWRVJfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxBcHBDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuPEFwcENvbmZpZz4oICdTRVJWRVJfQ09ORklHJyApO1xuZXhwb3J0IGNvbnN0IERBVEVfVElNRV9DT05GSUc6IEluamVjdGlvblRva2VuPERhdGVUaW1lQ29uZmlnPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEYXRlVGltZUNvbmZpZz4oICdEQVRFX1RJTUVfQ09ORklHJyApO1xuZXhwb3J0IGNvbnN0IFNUT1JBR0VfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxTdG9yYWdlQ29uZmlnPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTdG9yYWdlQ29uZmlnPiggJ1NUT1JBR0VfQ09ORklHJyApO1xuIl19