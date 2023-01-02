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
    updateIndividualsOptions(group, locale) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2d3LWRhdGUtcGlja2VyL3NyYy9saWIvZ3ctZGF0ZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEQsT0FBTyxFQUE2Qiw0QkFBNEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLbEcsTUFBTSxPQUFPLG1CQUFtQjtJQU05QixZQUEwRCxjQUF5QztRQUF6QyxtQkFBYyxHQUFkLGNBQWMsQ0FBMkI7UUFKNUYsbUJBQWMsR0FBdUMsSUFBSSxPQUFPLEVBQTZCLENBQUM7UUFLbkcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLHdCQUF3QixDQUFDLEtBQWEsRUFBRSxNQUFjO1FBRTNELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUVsRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dCQUN6QixPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7O2dIQXhCVSxtQkFBbUIsa0JBTVYsNEJBQTRCO29IQU5yQyxtQkFBbUIsY0FGbEIsTUFBTTsyRkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFPYyxNQUFNOzJCQUFDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJqZWN0JztcblxuaW1wb3J0IHsgR1dEYXRlUGlja2VyQ29uZmlndXJhdGlvbiwgR1dfREFURV9QSUNLRVJfQ09ORklHVVJBVElPTiB9IGZyb20gJy4vZ3ctZGF0ZS1waWNrZXIubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR1dEYXRlUGlja2VyU2VydmljZSB7XG5cbiAgcHVibGljIGNvbmZpZ3VyYXRpb24kOiBTdWJqZWN0PEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24+ID0gbmV3IFN1YmplY3Q8R1dEYXRlUGlja2VyQ29uZmlndXJhdGlvbj4oKTtcblxuICBwcml2YXRlIF9kYXRlUGlja2VyQ29uZmlndXJhdGlvbiE6IEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb247XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChHV19EQVRFX1BJQ0tFUl9DT05GSUdVUkFUSU9OKSBwcml2YXRlIF9jb25maWd1cmF0aW9uOiBHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KF9jb25maWd1cmF0aW9uKSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24kLm5leHQodGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUluZGl2aWR1YWxzT3B0aW9ucyhncm91cDogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uLmluaXRpYWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24uaW5pdGlhbHNbaW5kZXhdO1xuICAgICAgaWYgKGVsZW1lbnQuZ3JvdXAgPT09IGdyb3VwKVxuICAgICAgICBlbGVtZW50LmxvY2FsZSA9IGxvY2FsZTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxufVxuIl19