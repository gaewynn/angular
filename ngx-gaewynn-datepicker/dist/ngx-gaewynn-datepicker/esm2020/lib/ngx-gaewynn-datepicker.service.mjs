import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import * as i0 from "@angular/core";
/**
 * InjectionToken for gaewynn-datepicker that can be used to configure the format used by each datepicker.
 * @see {@link INgxGaewynnDatePickerConfiguration}
 */
export const NGX_GAEWYNN_DATEPICKER_CONFIGURATION = new InjectionToken('NGX_GAEWYNN_DATEPICKER_CONFIGURATION', undefined);
export class NgxGaewynnDatePickerService {
    /**
     * @internal
     */
    constructor(_configuration) {
        this._configuration = _configuration;
        /**
         * Dispatches the new configuration when a format update is requested using @see {@link updateFormat}
         * @internal
         */
        this.configuration$ = new Subject();
        this._datePickerConfiguration = JSON.parse(JSON.stringify(_configuration));
    }
    /**
     * Initializes all datepickers with the configuration provided in {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION}
     * @remarks this function should be called in each component using <ngx-gaewynn-datepicker> or <mgx-gaewynn-date-range-picker> during ngOnInit
     * @public
     */
    init() {
        this.configuration$.next(this._datePickerConfiguration);
    }
    /**
     * Updates the given group of datepickers to the specified format (@see {@link INgxGaewynnDatePickerConfiguration})
     *
     * @param format Date formats to appliy
     * @param group The name of a group of datepickers on which apply the specified format
     * @public
     */
    updateFormat(format, group) {
        for (let index = 0; index < this._datePickerConfiguration.initials.length; index++) {
            const element = this._datePickerConfiguration.initials[index];
            if (element.group === group)
                element.format = format;
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
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NGX_GAEWYNN_DATEPICKER_CONFIGURATION]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci9zcmMvbGliL25neC1nYWV3eW5uLWRhdGVwaWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUVoRDs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FBRyxJQUFJLGNBQWMsQ0FDcEUsc0NBQXNDLEVBQ3RDLFNBQVMsQ0FDVixDQUFDO0FBd0RGLE1BQU0sT0FBTywyQkFBMkI7SUFVdEM7O09BRUc7SUFDSCxZQUFrRSxjQUFrRDtRQUFsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBb0M7UUFYcEg7OztXQUdHO1FBQ0ksbUJBQWMsR0FBZ0QsSUFBSSxPQUFPLEVBQXNDLENBQUM7UUFRckgsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSTtRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxZQUFZLENBQUMsTUFBYyxFQUFFLEtBQWE7UUFFL0MsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBRWxGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0JBQ3pCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7d0hBM0NVLDJCQUEyQixrQkFhbEIsb0NBQW9DOzRIQWI3QywyQkFBMkIsY0FGMUIsTUFBTTsyRkFFUCwyQkFBMkI7a0JBSHZDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFjYyxNQUFNOzJCQUFDLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3ViamVjdCc7XG5cbi8qKlxuICogSW5qZWN0aW9uVG9rZW4gZm9yIGdhZXd5bm4tZGF0ZXBpY2tlciB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZm9ybWF0IHVzZWQgYnkgZWFjaCBkYXRlcGlja2VyLlxuICogQHNlZSB7QGxpbmsgSU5neEdhZXd5bm5EYXRlUGlja2VyQ29uZmlndXJhdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IE5HWF9HQUVXWU5OX0RBVEVQSUNLRVJfQ09ORklHVVJBVElPTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uPihcbiAgJ05HWF9HQUVXWU5OX0RBVEVQSUNLRVJfQ09ORklHVVJBVElPTicsXG4gIHVuZGVmaW5lZFxuKTtcblxuLyoqXG4gKiBEZXNjcmlwdGlvbiBvZiBhIGZvcm1hdCB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhIGRhdGVwaWNrZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTmd4R2Fld3lubkRhdGVQaWNrZXJGb3JtYXRzIHtcbiAgLyoqXG4gICAqIEEgdW5pcXVlIG5hbWUgb2YgYSBmb3JtYXQuIFRoaXMgbmFtZSB3aWxsIGJlIHVzZWQgdG8gaWRlbnRmeSBhIGZvcm1hdFxuICAgKi9cbiAgZm9ybWF0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBpbiB0aGUgY3VycmVudCBmb3JtYXQgZGVmaW5pdGlvbi5cbiAgICogVXNlZCB3aGVuIG9wZW5pbmcgdGhlIGNhbGVuZGFyIHBvcHVwIHRvIGRpc3BsYXkgdGhlIGxhYmVscyBpbiB0aGUgZ2l2ZW4gbG9jYWxlXG4gICAqL1xuICBsb2NhbGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRlIGZvcm1hdHMgdG8gYXBwbHkgb24gdGhlIGRhdGVwaWNrZXJcbiAgICovXG4gIG1vbWVudERhdGVGb3JtYXRzOiB7IFxuICAgICAgcGFyc2U6IHsgZGF0ZUlucHV0OiBzdHJpbmcgfSwgXG4gICAgICBkaXNwbGF5OiB7IFxuICAgICAgICAgIGRhdGVJbnB1dDogc3RyaW5nO1xuICAgICAgICAgIG1vbnRoWWVhckxhYmVsOiBzdHJpbmc7XG4gICAgICAgICAgZGF0ZUExMXlMYWJlbDogc3RyaW5nO1xuICAgICAgICAgIG1vbnRoWWVhckExMXlMYWJlbDogc3RyaW5nO1xuICAgICAgfVxuICB9O1xufVxuXG4vKipcbiAqIERlc2NyaXB0aW9uIG9mIHRoZSB3aG9sZSBjb25maWd1cmF0aW9uIHVzZWQgYnkgdGhlIGdhZXd5bm4tZGF0ZXBpY2tlciBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFscyBmb3JtYXRzIHRvIGFwcGx5IHRvIHRoZSBkYXRlcGlja2VycyB3aGVuIHRoZXkgcmVuZGVyIHRoZSBmaXJzdCB0aW1lXG4gICAqL1xuICBpbml0aWFsczogeyBcbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIChAc2VlIHtAbGluayBJTmd4R2Fld3lubkRhdGVQaWNrZXJGb3JtYXRzfSkgb2YgYSBmb3JtYXQgdG8gYXBwbHlcbiAgICAgKiBAcmVtYXJrcyBlYWNoIGZvcm1hdCBkZWZpbmVkIGhlcmUgc2hvdWxkIGhhdmUgYSBjb3JyZXNwb25kaW5nIHN0cnVjdHVyZSBkZWZpbmVkIGluIHRoZSBcImZvcm1hdHNcIiBwcm9wZXJ0eVxuICAgICAqL1xuICAgIGZvcm1hdDogc3RyaW5nLCBcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgZ3JvdXAgb2YgZGF0ZXBpY2tlcnMgb24gd2hpY2ggYXBwbHkgdGhlIGZvcm1hdFxuICAgICAqL1xuICAgIGdyb3VwOiBzdHJpbmcgXG4gIH1bXTtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIGZvcm1hdHMgcHJvdmlkZWQgYnkgdGhlIGFwcGxpY2F0aW9uXG4gICAqL1xuICBmb3JtYXRzOiBJTmd4R2Fld3lubkRhdGVQaWNrZXJGb3JtYXRzW107XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhZXd5bm5EYXRlUGlja2VyU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgdGhlIG5ldyBjb25maWd1cmF0aW9uIHdoZW4gYSBmb3JtYXQgdXBkYXRlIGlzIHJlcXVlc3RlZCB1c2luZyBAc2VlIHtAbGluayB1cGRhdGVGb3JtYXR9XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIGNvbmZpZ3VyYXRpb24kOiBTdWJqZWN0PElOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24+ID0gbmV3IFN1YmplY3Q8SU5neEdhZXd5bm5EYXRlUGlja2VyQ29uZmlndXJhdGlvbj4oKTtcblxuICBwcml2YXRlIF9kYXRlUGlja2VyQ29uZmlndXJhdGlvbiE6IElOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb247XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdChOR1hfR0FFV1lOTl9EQVRFUElDS0VSX0NPTkZJR1VSQVRJT04pIHByaXZhdGUgX2NvbmZpZ3VyYXRpb246IElOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoX2NvbmZpZ3VyYXRpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbGwgZGF0ZXBpY2tlcnMgd2l0aCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBpbiB7QGxpbmsgTkdYX0dBRVdZTk5fREFURVBJQ0tFUl9DT05GSUdVUkFUSU9OfVxuICAgKiBAcmVtYXJrcyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgaW4gZWFjaCBjb21wb25lbnQgdXNpbmcgPG5neC1nYWV3eW5uLWRhdGVwaWNrZXI+IG9yIDxtZ3gtZ2Fld3lubi1kYXRlLXJhbmdlLXBpY2tlcj4gZHVyaW5nIG5nT25Jbml0XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiQubmV4dCh0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZ2l2ZW4gZ3JvdXAgb2YgZGF0ZXBpY2tlcnMgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgKEBzZWUge0BsaW5rIElOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb259KVxuICAgKiBcbiAgICogQHBhcmFtIGZvcm1hdCBEYXRlIGZvcm1hdHMgdG8gYXBwbGl5XG4gICAqIEBwYXJhbSBncm91cCBUaGUgbmFtZSBvZiBhIGdyb3VwIG9mIGRhdGVwaWNrZXJzIG9uIHdoaWNoIGFwcGx5IHRoZSBzcGVjaWZpZWQgZm9ybWF0XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHB1YmxpYyB1cGRhdGVGb3JtYXQoZm9ybWF0OiBzdHJpbmcsIGdyb3VwOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbi5pbml0aWFscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIFxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uLmluaXRpYWxzW2luZGV4XTtcbiAgICAgIGlmIChlbGVtZW50Lmdyb3VwID09PSBncm91cClcbiAgICAgICAgZWxlbWVudC5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbn1cbiJdfQ==