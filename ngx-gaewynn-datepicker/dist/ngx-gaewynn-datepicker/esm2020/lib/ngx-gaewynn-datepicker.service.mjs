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
         *
         * @internal
         */
        this.configuration$ = new Subject();
        this.initConfiguration(_configuration);
    }
    /**
     * Initializes and replaces the configuration provided by @see {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION}
     *
     * @param configuration The new configuration to apply
     * @remarks Should only be use in replacment of the @see {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION} and during the initialization process of the application
     *
     * @public
     */
    initConfiguration(configuration) {
        this._datePickerConfiguration = JSON.parse(JSON.stringify(configuration));
    }
    /**
     * Initializes all datepickers with the configuration provided in {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION}
     * @remarks this function should be called in each component using <ngx-gaewynn-datepicker> or <mgx-gaewynn-date-range-picker> during ngOnInit
     *
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
     *
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
    /**
     * Adds a new format to the available ones
     *
     * @param format The description of the new format
     * @param group The group of datepickers to which the format will be linked
     *
     * @remarks the given format will not be applied instantly to the group. To update the format, call {@link updateFormat}
     * @remarks if a format with the same name already exists, it will be replaced by the new one
     *
     * @public
     */
    addFormat(format, group) {
        if (!this._datePickerConfiguration.initials.some(e => e.group === group))
            this._datePickerConfiguration.initials.push({ format: format.format, group: group });
        const existingFormatIndex = this._datePickerConfiguration.formats.findIndex(e => e.format === format.format);
        if (existingFormatIndex >= 0) {
            this._datePickerConfiguration.formats[existingFormatIndex] = format;
        }
        else {
            this._datePickerConfiguration.formats.push(format);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci9zcmMvbGliL25neC1nYWV3eW5uLWRhdGVwaWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUVoRDs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FBRyxJQUFJLGNBQWMsQ0FDcEUsc0NBQXNDLEVBQ3RDLFNBQVMsQ0FDVixDQUFDO0FBd0RGLE1BQU0sT0FBTywyQkFBMkI7SUFXdEM7O09BRUc7SUFDSCxZQUFrRSxjQUFrRDtRQUFsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBb0M7UUFacEg7Ozs7V0FJRztRQUNJLG1CQUFjLEdBQWdELElBQUksT0FBTyxFQUFzQyxDQUFDO1FBUXJILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLGlCQUFpQixDQUFDLGFBQWlEO1FBQ3pFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxJQUFJO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxZQUFZLENBQUMsTUFBYyxFQUFFLEtBQWE7UUFFL0MsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBRWxGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0JBQ3pCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSSxTQUFTLENBQUMsTUFBb0MsRUFBRSxLQUFhO1FBRWxFLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO1lBQ3RFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFdkYsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdHLElBQUksbUJBQW1CLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDckU7YUFBTTtZQUNMLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7d0hBbEZVLDJCQUEyQixrQkFjbEIsb0NBQW9DOzRIQWQ3QywyQkFBMkIsY0FGMUIsTUFBTTsyRkFFUCwyQkFBMkI7a0JBSHZDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFlYyxNQUFNOzJCQUFDLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3ViamVjdCc7XG5cbi8qKlxuICogSW5qZWN0aW9uVG9rZW4gZm9yIGdhZXd5bm4tZGF0ZXBpY2tlciB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZm9ybWF0IHVzZWQgYnkgZWFjaCBkYXRlcGlja2VyLlxuICogQHNlZSB7QGxpbmsgSU5neEdhZXd5bm5EYXRlUGlja2VyQ29uZmlndXJhdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IE5HWF9HQUVXWU5OX0RBVEVQSUNLRVJfQ09ORklHVVJBVElPTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uPihcbiAgJ05HWF9HQUVXWU5OX0RBVEVQSUNLRVJfQ09ORklHVVJBVElPTicsXG4gIHVuZGVmaW5lZFxuKTtcblxuLyoqXG4gKiBEZXNjcmlwdGlvbiBvZiBhIGZvcm1hdCB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhIGRhdGVwaWNrZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTmd4R2Fld3lubkRhdGVQaWNrZXJGb3JtYXRzIHtcbiAgLyoqXG4gICAqIEEgdW5pcXVlIG5hbWUgb2YgYSBmb3JtYXQuIFRoaXMgbmFtZSB3aWxsIGJlIHVzZWQgdG8gaWRlbnRmeSBhIGZvcm1hdFxuICAgKi9cbiAgZm9ybWF0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBpbiB0aGUgY3VycmVudCBmb3JtYXQgZGVmaW5pdGlvbi5cbiAgICogVXNlZCB3aGVuIG9wZW5pbmcgdGhlIGNhbGVuZGFyIHBvcHVwIHRvIGRpc3BsYXkgdGhlIGxhYmVscyBpbiB0aGUgZ2l2ZW4gbG9jYWxlXG4gICAqL1xuICBsb2NhbGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRlIGZvcm1hdHMgdG8gYXBwbHkgb24gdGhlIGRhdGVwaWNrZXJcbiAgICovXG4gIG1vbWVudERhdGVGb3JtYXRzOiB7IFxuICAgICAgcGFyc2U6IHsgZGF0ZUlucHV0OiBzdHJpbmcgfSwgXG4gICAgICBkaXNwbGF5OiB7IFxuICAgICAgICAgIGRhdGVJbnB1dDogc3RyaW5nO1xuICAgICAgICAgIG1vbnRoWWVhckxhYmVsOiBzdHJpbmc7XG4gICAgICAgICAgZGF0ZUExMXlMYWJlbDogc3RyaW5nO1xuICAgICAgICAgIG1vbnRoWWVhckExMXlMYWJlbDogc3RyaW5nO1xuICAgICAgfVxuICB9O1xufVxuXG4vKipcbiAqIERlc2NyaXB0aW9uIG9mIHRoZSB3aG9sZSBjb25maWd1cmF0aW9uIHVzZWQgYnkgdGhlIGdhZXd5bm4tZGF0ZXBpY2tlciBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFscyBmb3JtYXRzIHRvIGFwcGx5IHRvIHRoZSBkYXRlcGlja2VycyB3aGVuIHRoZXkgcmVuZGVyIHRoZSBmaXJzdCB0aW1lXG4gICAqL1xuICBpbml0aWFsczogeyBcbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIChAc2VlIHtAbGluayBJTmd4R2Fld3lubkRhdGVQaWNrZXJGb3JtYXRzfSkgb2YgYSBmb3JtYXQgdG8gYXBwbHlcbiAgICAgKiBAcmVtYXJrcyBlYWNoIGZvcm1hdCBkZWZpbmVkIGhlcmUgc2hvdWxkIGhhdmUgYSBjb3JyZXNwb25kaW5nIHN0cnVjdHVyZSBkZWZpbmVkIGluIHRoZSBcImZvcm1hdHNcIiBwcm9wZXJ0eVxuICAgICAqL1xuICAgIGZvcm1hdDogc3RyaW5nLCBcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgZ3JvdXAgb2YgZGF0ZXBpY2tlcnMgb24gd2hpY2ggYXBwbHkgdGhlIGZvcm1hdFxuICAgICAqL1xuICAgIGdyb3VwOiBzdHJpbmcgXG4gIH1bXTtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIGZvcm1hdHMgcHJvdmlkZWQgYnkgdGhlIGFwcGxpY2F0aW9uXG4gICAqL1xuICBmb3JtYXRzOiBJTmd4R2Fld3lubkRhdGVQaWNrZXJGb3JtYXRzW107XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhZXd5bm5EYXRlUGlja2VyU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgdGhlIG5ldyBjb25maWd1cmF0aW9uIHdoZW4gYSBmb3JtYXQgdXBkYXRlIGlzIHJlcXVlc3RlZCB1c2luZyBAc2VlIHtAbGluayB1cGRhdGVGb3JtYXR9XG4gICAqIFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBjb25maWd1cmF0aW9uJDogU3ViamVjdDxJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uPiA9IG5ldyBTdWJqZWN0PElOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24+KCk7XG5cbiAgcHJpdmF0ZSBfZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24hOiBJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTkdYX0dBRVdZTk5fREFURVBJQ0tFUl9DT05GSUdVUkFUSU9OKSBwcml2YXRlIF9jb25maWd1cmF0aW9uOiBJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5pbml0Q29uZmlndXJhdGlvbihfY29uZmlndXJhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlcGxhY2VzIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGJ5IEBzZWUge0BsaW5rIE5HWF9HQUVXWU5OX0RBVEVQSUNLRVJfQ09ORklHVVJBVElPTn1cbiAgICogXG4gICAqIEBwYXJhbSBjb25maWd1cmF0aW9uIFRoZSBuZXcgY29uZmlndXJhdGlvbiB0byBhcHBseVxuICAgKiBAcmVtYXJrcyBTaG91bGQgb25seSBiZSB1c2UgaW4gcmVwbGFjbWVudCBvZiB0aGUgQHNlZSB7QGxpbmsgTkdYX0dBRVdZTk5fREFURVBJQ0tFUl9DT05GSUdVUkFUSU9OfSBhbmQgZHVyaW5nIHRoZSBpbml0aWFsaXphdGlvbiBwcm9jZXNzIG9mIHRoZSBhcHBsaWNhdGlvblxuICAgKiBcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgIHB1YmxpYyBpbml0Q29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uOiBJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyYXRpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbGwgZGF0ZXBpY2tlcnMgd2l0aCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBpbiB7QGxpbmsgTkdYX0dBRVdZTk5fREFURVBJQ0tFUl9DT05GSUdVUkFUSU9OfVxuICAgKiBAcmVtYXJrcyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgaW4gZWFjaCBjb21wb25lbnQgdXNpbmcgPG5neC1nYWV3eW5uLWRhdGVwaWNrZXI+IG9yIDxtZ3gtZ2Fld3lubi1kYXRlLXJhbmdlLXBpY2tlcj4gZHVyaW5nIG5nT25Jbml0XG4gICAqIFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24kLm5leHQodGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGdpdmVuIGdyb3VwIG9mIGRhdGVwaWNrZXJzIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IChAc2VlIHtAbGluayBJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9ufSlcbiAgICogXG4gICAqIEBwYXJhbSBmb3JtYXQgRGF0ZSBmb3JtYXRzIHRvIGFwcGxpeVxuICAgKiBAcGFyYW0gZ3JvdXAgVGhlIG5hbWUgb2YgYSBncm91cCBvZiBkYXRlcGlja2VycyBvbiB3aGljaCBhcHBseSB0aGUgc3BlY2lmaWVkIGZvcm1hdFxuICAgKiBcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcHVibGljIHVwZGF0ZUZvcm1hdChmb3JtYXQ6IHN0cmluZywgZ3JvdXA6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uLmluaXRpYWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24uaW5pdGlhbHNbaW5kZXhdO1xuICAgICAgaWYgKGVsZW1lbnQuZ3JvdXAgPT09IGdyb3VwKVxuICAgICAgICBlbGVtZW50LmZvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IGZvcm1hdCB0byB0aGUgYXZhaWxhYmxlIG9uZXNcbiAgICogXG4gICAqIEBwYXJhbSBmb3JtYXQgVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBuZXcgZm9ybWF0XG4gICAqIEBwYXJhbSBncm91cCBUaGUgZ3JvdXAgb2YgZGF0ZXBpY2tlcnMgdG8gd2hpY2ggdGhlIGZvcm1hdCB3aWxsIGJlIGxpbmtlZFxuICAgKiBcbiAgICogQHJlbWFya3MgdGhlIGdpdmVuIGZvcm1hdCB3aWxsIG5vdCBiZSBhcHBsaWVkIGluc3RhbnRseSB0byB0aGUgZ3JvdXAuIFRvIHVwZGF0ZSB0aGUgZm9ybWF0LCBjYWxsIHtAbGluayB1cGRhdGVGb3JtYXR9XG4gICAqIEByZW1hcmtzIGlmIGEgZm9ybWF0IHdpdGggdGhlIHNhbWUgbmFtZSBhbHJlYWR5IGV4aXN0cywgaXQgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgbmV3IG9uZVxuICAgKiBcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcHVibGljIGFkZEZvcm1hdChmb3JtYXQ6IElOZ3hHYWV3eW5uRGF0ZVBpY2tlckZvcm1hdHMsIGdyb3VwOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgIGlmICghdGhpcy5fZGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24uaW5pdGlhbHMuc29tZShlID0+IGUuZ3JvdXAgPT09IGdyb3VwKSlcbiAgICAgIHRoaXMuX2RhdGVQaWNrZXJDb25maWd1cmF0aW9uLmluaXRpYWxzLnB1c2goeyBmb3JtYXQ6IGZvcm1hdC5mb3JtYXQsIGdyb3VwOiBncm91cCB9KTtcblxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybWF0SW5kZXggPSB0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbi5mb3JtYXRzLmZpbmRJbmRleChlID0+IGUuZm9ybWF0ID09PSBmb3JtYXQuZm9ybWF0KTtcbiAgICBpZiAoZXhpc3RpbmdGb3JtYXRJbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbi5mb3JtYXRzW2V4aXN0aW5nRm9ybWF0SW5kZXhdID0gZm9ybWF0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRlUGlja2VyQ29uZmlndXJhdGlvbi5mb3JtYXRzLnB1c2goZm9ybWF0KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==