import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import * as i0 from "@angular/core";
export const GW_DATE_PICKER_CONFIGURATION = new InjectionToken('GW_DATE_PICKER_CONFIGURATION', undefined);
export class GWDatePickerConfiguration {
    constructor(initials, formats) {
        this.initials = initials;
        this.formats = formats;
    }
}
export class GWDatePickerService {
    constructor(_configuration) {
        this._configuration = _configuration;
        this.configuration$ = new Subject();
        this._datePickerConfiguration = JSON.parse(JSON.stringify(_configuration));
    }
    init() {
        this.configuration$.next(this._datePickerConfiguration);
    }
    updateFormats(group, locale) {
        for (let index = 0; index < this._datePickerConfiguration.initials.length; index++) {
            const element = this._datePickerConfiguration.initials[index];
            if (element.group === group)
                element.locale = locale;
        }
        this.init();
    }
}
GWDatePickerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerService, deps: [{ token: GW_DATE_PICKER_CONFIGURATION }], target: i0.ɵɵFactoryTarget.Injectable });
GWDatePickerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: GWDatePickerConfiguration, decorators: [{
                    type: Inject,
                    args: [GW_DATE_PICKER_CONFIGURATION]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2d3LWRhdGUtcGlja2VyL3NyYy9saWIvZ3ctZGF0ZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUVoRCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLGNBQWMsQ0FDNUQsOEJBQThCLEVBQzlCLFNBQVMsQ0FDVixDQUFDO0FBZUYsTUFBTSxPQUFPLHlCQUF5QjtJQUVwQyxZQUNTLFFBQTZDLEVBQzdDLE9BQStCO1FBRC9CLGFBQVEsR0FBUixRQUFRLENBQXFDO1FBQzdDLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQUksQ0FBQztDQUM5QztBQUtELE1BQU0sT0FBTyxtQkFBbUI7SUFNOUIsWUFBMEQsY0FBeUM7UUFBekMsbUJBQWMsR0FBZCxjQUFjLENBQTJCO1FBSjVGLG1CQUFjLEdBQXVDLElBQUksT0FBTyxFQUE2QixDQUFDO1FBS25HLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxhQUFhLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFFaEQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBRWxGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0JBQ3pCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Z0hBeEJVLG1CQUFtQixrQkFNViw0QkFBNEI7b0hBTnJDLG1CQUFtQixjQUZsQixNQUFNOzJGQUVQLG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQU9jLE1BQU07MkJBQUMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJqZWN0JztcblxuZXhwb3J0IGNvbnN0IEdXX0RBVEVfUElDS0VSX0NPTkZJR1VSQVRJT04gPSBuZXcgSW5qZWN0aW9uVG9rZW48R1dEYXRlUGlja2VyQ29uZmlndXJhdGlvbj4oXG4gICdHV19EQVRFX1BJQ0tFUl9DT05GSUdVUkFUSU9OJyxcbiAgdW5kZWZpbmVkXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHV0RhdGVQaWNrZXJGb3JtYXRzIHtcbiAgbG9jYWxlOiBzdHJpbmc7XG4gIG1vbWVudERhdGVGb3JtYXRzOiB7IFxuICAgICAgcGFyc2U6IHsgZGF0ZUlucHV0OiBzdHJpbmcgfSwgXG4gICAgICBkaXNwbGF5OiB7IFxuICAgICAgICAgIGRhdGVJbnB1dDogc3RyaW5nO1xuICAgICAgICAgIG1vbnRoWWVhckxhYmVsOiBzdHJpbmc7XG4gICAgICAgICAgZGF0ZUExMXlMYWJlbDogc3RyaW5nO1xuICAgICAgICAgIG1vbnRoWWVhckExMXlMYWJlbDogc3RyaW5nO1xuICAgICAgfVxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgR1dEYXRlUGlja2VyQ29uZmlndXJhdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluaXRpYWxzOiB7IGdyb3VwOiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nIH1bXSxcbiAgICBwdWJsaWMgZm9ybWF0czogSUdXRGF0ZVBpY2tlckZvcm1hdHNbXSkgeyB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdXRGF0ZVBpY2tlclNlcnZpY2Uge1xuXG4gIHB1YmxpYyBjb25maWd1cmF0aW9uJDogU3ViamVjdDxHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uPiA9IG5ldyBTdWJqZWN0PEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24+KCk7XG5cbiAgcHJpdmF0ZSBfZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24hOiBHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoR1dfREFURV9QSUNLRVJfQ09ORklHVVJBVElPTikgcHJpdmF0ZSBfY29uZmlndXJhdGlvbjogR1dEYXRlUGlja2VyQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfY29uZmlndXJhdGlvbikpO1xuICB9XG5cbiAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uJC5uZXh0KHRoaXMuX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGb3JtYXRzKGdyb3VwOiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24uaW5pdGlhbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbi5pbml0aWFsc1tpbmRleF07XG4gICAgICBpZiAoZWxlbWVudC5ncm91cCA9PT0gZ3JvdXApXG4gICAgICAgIGVsZW1lbnQubG9jYWxlID0gbG9jYWxlO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG59XG4iXX0=