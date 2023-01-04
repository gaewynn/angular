import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import * as i0 from "@angular/core";
export const NGX_GAEWYNN_DATEPICKER_CONFIGURATION = new InjectionToken('NGX_GAEWYNN_DATEPICKER_CONFIGURATION', undefined);
export class NgxGaewynnDatePickerConfiguration {
    constructor(initials, formats) {
        this.initials = initials;
        this.formats = formats;
    }
}
export class NgxGaewynnDatePickerService {
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
NgxGaewynnDatePickerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerService, deps: [{ token: NGX_GAEWYNN_DATEPICKER_CONFIGURATION }], target: i0.ɵɵFactoryTarget.Injectable });
NgxGaewynnDatePickerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: NgxGaewynnDatePickerConfiguration, decorators: [{
                    type: Inject,
                    args: [NGX_GAEWYNN_DATEPICKER_CONFIGURATION]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci9zcmMvbGliL25neC1nYWV3eW5uLWRhdGVwaWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUVoRCxNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FBRyxJQUFJLGNBQWMsQ0FDcEUsc0NBQXNDLEVBQ3RDLFNBQVMsQ0FDVixDQUFDO0FBZUYsTUFBTSxPQUFPLGlDQUFpQztJQUU1QyxZQUNTLFFBQTZDLEVBQzdDLE9BQXVDO1FBRHZDLGFBQVEsR0FBUixRQUFRLENBQXFDO1FBQzdDLFlBQU8sR0FBUCxPQUFPLENBQWdDO0lBQUksQ0FBQztDQUN0RDtBQUtELE1BQU0sT0FBTywyQkFBMkI7SUFNdEMsWUFBa0UsY0FBaUQ7UUFBakQsbUJBQWMsR0FBZCxjQUFjLENBQW1DO1FBSjVHLG1CQUFjLEdBQStDLElBQUksT0FBTyxFQUFxQyxDQUFDO1FBS25ILElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxhQUFhLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFFaEQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBRWxGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0JBQ3pCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7d0hBeEJVLDJCQUEyQixrQkFNbEIsb0NBQW9DOzRIQU43QywyQkFBMkIsY0FGMUIsTUFBTTsyRkFFUCwyQkFBMkI7a0JBSHZDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFPYyxNQUFNOzJCQUFDLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3ViamVjdCc7XG5cbmV4cG9ydCBjb25zdCBOR1hfR0FFV1lOTl9EQVRFUElDS0VSX0NPTkZJR1VSQVRJT04gPSBuZXcgSW5qZWN0aW9uVG9rZW48Tmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uPihcbiAgJ05HWF9HQUVXWU5OX0RBVEVQSUNLRVJfQ09ORklHVVJBVElPTicsXG4gIHVuZGVmaW5lZFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBJTmd4R2Fld3lubkRhdGVQaWNrZXJGb3JtYXRzIHtcbiAgbG9jYWxlOiBzdHJpbmc7XG4gIG1vbWVudERhdGVGb3JtYXRzOiB7IFxuICAgICAgcGFyc2U6IHsgZGF0ZUlucHV0OiBzdHJpbmcgfSwgXG4gICAgICBkaXNwbGF5OiB7IFxuICAgICAgICAgIGRhdGVJbnB1dDogc3RyaW5nO1xuICAgICAgICAgIG1vbnRoWWVhckxhYmVsOiBzdHJpbmc7XG4gICAgICAgICAgZGF0ZUExMXlMYWJlbDogc3RyaW5nO1xuICAgICAgICAgIG1vbnRoWWVhckExMXlMYWJlbDogc3RyaW5nO1xuICAgICAgfVxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5pdGlhbHM6IHsgZ3JvdXA6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcgfVtdLFxuICAgIHB1YmxpYyBmb3JtYXRzOiBJTmd4R2Fld3lubkRhdGVQaWNrZXJGb3JtYXRzW10pIHsgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWV3eW5uRGF0ZVBpY2tlclNlcnZpY2Uge1xuXG4gIHB1YmxpYyBjb25maWd1cmF0aW9uJDogU3ViamVjdDxOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24+ID0gbmV3IFN1YmplY3Q8Tmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uPigpO1xuXG4gIHByaXZhdGUgX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uITogTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTkdYX0dBRVdZTk5fREFURVBJQ0tFUl9DT05GSUdVUkFUSU9OKSBwcml2YXRlIF9jb25maWd1cmF0aW9uOiBOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoX2NvbmZpZ3VyYXRpb24pKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiQubmV4dCh0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRm9ybWF0cyhncm91cDogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uLmluaXRpYWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24uaW5pdGlhbHNbaW5kZXhdO1xuICAgICAgaWYgKGVsZW1lbnQuZ3JvdXAgPT09IGdyb3VwKVxuICAgICAgICBlbGVtZW50LmxvY2FsZSA9IGxvY2FsZTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxufVxuIl19