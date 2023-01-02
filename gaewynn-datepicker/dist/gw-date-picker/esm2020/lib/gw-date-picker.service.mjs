import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { GW_DATE_PICKER_CONFIGURATION } from './gw-date-picker.module';
import * as i0 from "@angular/core";
import * as i1 from "./gw-date-picker.module";
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
        }], ctorParameters: function () { return [{ type: i1.GWDatePickerConfiguration, decorators: [{
                    type: Inject,
                    args: [GW_DATE_PICKER_CONFIGURATION]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2d3LWRhdGUtcGlja2VyL3NyYy9saWIvZ3ctZGF0ZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEQsT0FBTyxFQUE2Qiw0QkFBNEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLbEcsTUFBTSxPQUFPLG1CQUFtQjtJQU05QixZQUEwRCxjQUF5QztRQUF6QyxtQkFBYyxHQUFkLGNBQWMsQ0FBMkI7UUFKNUYsbUJBQWMsR0FBdUMsSUFBSSxPQUFPLEVBQTZCLENBQUM7UUFLbkcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUVoRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFFbEYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQkFDekIsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOztnSEF4QlUsbUJBQW1CLGtCQU1WLDRCQUE0QjtvSEFOckMsbUJBQW1CLGNBRmxCLE1BQU07MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBT2MsTUFBTTsyQkFBQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3ViamVjdCc7XG5cbmltcG9ydCB7IEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24sIEdXX0RBVEVfUElDS0VSX0NPTkZJR1VSQVRJT04gfSBmcm9tICcuL2d3LWRhdGUtcGlja2VyLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdXRGF0ZVBpY2tlclNlcnZpY2Uge1xuXG4gIHB1YmxpYyBjb25maWd1cmF0aW9uJDogU3ViamVjdDxHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uPiA9IG5ldyBTdWJqZWN0PEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24+KCk7XG5cbiAgcHJpdmF0ZSBfZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24hOiBHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoR1dfREFURV9QSUNLRVJfQ09ORklHVVJBVElPTikgcHJpdmF0ZSBfY29uZmlndXJhdGlvbjogR1dEYXRlUGlja2VyQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfY29uZmlndXJhdGlvbikpO1xuICB9XG5cbiAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uJC5uZXh0KHRoaXMuX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGb3JtYXRzKGdyb3VwOiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24uaW5pdGlhbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbi5pbml0aWFsc1tpbmRleF07XG4gICAgICBpZiAoZWxlbWVudC5ncm91cCA9PT0gZ3JvdXApXG4gICAgICAgIGVsZW1lbnQubG9jYWxlID0gbG9jYWxlO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG59XG4iXX0=