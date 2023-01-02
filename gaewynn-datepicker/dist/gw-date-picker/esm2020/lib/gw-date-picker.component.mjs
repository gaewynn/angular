import { Component, Inject, ContentChild, Input } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "./gw-date-picker.service";
export class GWDatePickerComponent {
    constructor(_envInjector, _zone, _locale, _dateAdapter, _gwDatePickerService) {
        this._envInjector = _envInjector;
        this._zone = _zone;
        this._locale = _locale;
        this._dateAdapter = _dateAdapter;
        this._gwDatePickerService = _gwDatePickerService;
        this._configurationSubscription = this._gwDatePickerService.configuration$.subscribe((configuration) => {
            this._configuration = configuration;
            //  During initialization, the MatDatePicker does not exist yet
            if (!this.datePicker)
                return;
            this._apply();
        });
    }
    ngAfterViewInit() {
        this._apply();
        //  Handle calendar formats when it opened (allows to preserve independance between date pickers)
        this._calendarSubscription = this.datePicker.openedStream.subscribe(() => {
            this._locale = this._formats.locale;
            this._dateAdapter.setLocale(this._formats.locale);
            var records = this._envInjector.records;
            records.get(MAT_DATE_FORMATS).value.display.dateInput = this._formats.momentDateFormats.display.dateInput;
            records.get(MAT_DATE_FORMATS).value.display.dateA11yLabel = this._formats.momentDateFormats.display.dateA11yLabel;
            records.get(MAT_DATE_FORMATS).value.display.monthYearLabel = this._formats.momentDateFormats.display.monthYearLabel;
            records.get(MAT_DATE_FORMATS).value.display.monthYearA11yLabel = this._formats.momentDateFormats.display.monthYearA11yLabel;
            records.get(MAT_DATE_FORMATS).value.parse.dateInput = this._formats.momentDateFormats.parse.dateInput;
        });
    }
    ngOnDestroy() {
        this._calendarSubscription.unsubscribe();
        this._configurationSubscription.unsubscribe();
        this._zoneSubscription.unsubscribe();
    }
    _apply() {
        for (let index = 0; index < this._configuration.initials.length; index++) {
            const link = this._configuration.initials[index];
            if (this.group === link.group) {
                this._formats = this._configuration.formats.filter(e => e.locale === this._configuration.initials.filter(value => value.group === this.group)[0].locale)[0];
                ;
                this._updateInputDateFormats();
            }
        }
    }
    _updateInputDateFormats() {
        this._zoneSubscription = this._zone.onStable
            .pipe(take(1))
            .subscribe(() => {
            //  Handle input date formats
            this.datePicker.datepickerInput._dateFormats = this._formats.momentDateFormats;
            //  Refresh the input value to use the new format
            const currentValue = this.formControl.form.value;
            this.formControl.form.patchValue(currentValue);
        });
    }
}
GWDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerComponent, deps: [{ token: i0.EnvironmentInjector }, { token: i0.NgZone }, { token: MAT_DATE_LOCALE }, { token: i1.DateAdapter }, { token: i2.GWDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
GWDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: GWDatePickerComponent, selector: "gaewynn-datepicker", inputs: { group: "group" }, queries: [{ propertyName: "datePicker", first: true, predicate: MatDatepicker, descendants: true }, { propertyName: "formControl", first: true, predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gaewynn-datepicker', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.EnvironmentInjector }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }, { type: i1.DateAdapter }, { type: i2.GWDatePickerService }]; }, propDecorators: { datePicker: [{
                type: ContentChild,
                args: [MatDatepicker]
            }], formControl: [{
                type: ContentChild,
                args: [FormControlDirective]
            }], group: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3ctZGF0ZS1waWNrZXIvc3JjL2xpYi9ndy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ndy1kYXRlLXBpY2tlci9zcmMvbGliL2d3LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBZSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFnQixJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFTMUMsTUFBTSxPQUFPLHFCQUFxQjtJQWlCaEMsWUFDbUIsWUFBaUMsRUFDakMsS0FBYSxFQUNHLE9BQWUsRUFDL0IsWUFBOEIsRUFDOUIsb0JBQXlDO1FBSnpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0csWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUUxRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUF3QyxFQUFFLEVBQUU7WUFFaEksSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7WUFFcEMsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxJQUFJLENB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QyxLQUFLLENBQUMsUUFBUTthQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUVkLDZCQUE2QjtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQXVCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFFeEYsaURBQWlEO1lBQ2pELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztrSEF4RlUscUJBQXFCLDJFQW9CdEIsZUFBZTtzR0FwQmQscUJBQXFCLDhIQUVsQixhQUFhLDhFQUdiLG9CQUFvQixnRENuQnBDLDJCQUF5QjsyRkRjWixxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0Usb0JBQW9COzswQkF1QjNCLE1BQU07MkJBQUMsZUFBZTt3R0FqQmxCLFVBQVU7c0JBRGhCLFlBQVk7dUJBQUMsYUFBYTtnQkFJcEIsV0FBVztzQkFEakIsWUFBWTt1QkFBQyxvQkFBb0I7Z0JBSTNCLEtBQUs7c0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBDb250ZW50Q2hpbGQsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgRW52aXJvbm1lbnRJbmplY3RvciwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgdGFrZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uLCBJR1dEYXRlUGlja2VyRm9ybWF0cyB9IGZyb20gJy4vZ3ctZGF0ZS1waWNrZXIubW9kdWxlJztcbmltcG9ydCB7IEdXRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2d3LWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWV3eW5uLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3ctZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEdXRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIFxuICBAQ29udGVudENoaWxkKE1hdERhdGVwaWNrZXIpIFxuICBwdWJsaWMgZGF0ZVBpY2tlciE6IE1hdERhdGVwaWNrZXI8RGF0ZT47XG5cbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbERpcmVjdGl2ZSlcbiAgcHVibGljIGZvcm1Db250cm9sITogRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdyb3VwITogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2NhbGVuZGFyU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb25maWd1cmF0aW9uU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF96b25lU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb25maWd1cmF0aW9uITogR1dEYXRlUGlja2VyQ29uZmlndXJhdGlvbjtcbiAgcHJpdmF0ZSBfZm9ybWF0cyE6IElHV0RhdGVQaWNrZXJGb3JtYXRzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VudkluamVjdG9yOiBFbnZpcm9ubWVudEluamVjdG9yLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZ3dEYXRlUGlja2VyU2VydmljZTogR1dEYXRlUGlja2VyU2VydmljZSkgeyBcblxuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLl9nd0RhdGVQaWNrZXJTZXJ2aWNlLmNvbmZpZ3VyYXRpb24kLnN1YnNjcmliZSgoY29uZmlndXJhdGlvbjogR1dEYXRlUGlja2VyQ29uZmlndXJhdGlvbikgPT4ge1xuXG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcblxuICAgICAgLy8gIER1cmluZyBpbml0aWFsaXphdGlvbiwgdGhlIE1hdERhdGVQaWNrZXIgZG9lcyBub3QgZXhpc3QgeWV0XG4gICAgICBpZiAoIXRoaXMuZGF0ZVBpY2tlcilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgXG4gICAgICB0aGlzLl9hcHBseSgpO1xuICAgIH0pXG4gIH1cbiAgXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgXG4gICAgdGhpcy5fYXBwbHkoKTtcblxuICAgIC8vICBIYW5kbGUgY2FsZW5kYXIgZm9ybWF0cyB3aGVuIGl0IG9wZW5lZCAoYWxsb3dzIHRvIHByZXNlcnZlIGluZGVwZW5kYW5jZSBiZXR3ZWVuIGRhdGUgcGlja2VycylcbiAgICB0aGlzLl9jYWxlbmRhclN1YnNjcmlwdGlvbiA9IHRoaXMuZGF0ZVBpY2tlci5vcGVuZWRTdHJlYW0uc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgdGhpcy5fbG9jYWxlID0gdGhpcy5fZm9ybWF0cy5sb2NhbGU7XG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5zZXRMb2NhbGUodGhpcy5fZm9ybWF0cy5sb2NhbGUpO1xuXG4gICAgICB2YXIgcmVjb3JkcyA9ICh0aGlzLl9lbnZJbmplY3RvciBhcyBhbnkpLnJlY29yZHMgYXMgTWFwPGFueSwgYW55PjtcbiAgICAgIHJlY29yZHMuZ2V0KE1BVF9EQVRFX0ZPUk1BVFMpLnZhbHVlLmRpc3BsYXkuZGF0ZUlucHV0ID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGVJbnB1dDtcbiAgICAgIHJlY29yZHMuZ2V0KE1BVF9EQVRFX0ZPUk1BVFMpLnZhbHVlLmRpc3BsYXkuZGF0ZUExMXlMYWJlbCA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRlQTExeUxhYmVsO1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5tb250aFllYXJMYWJlbCA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJMYWJlbDtcbiAgICAgIHJlY29yZHMuZ2V0KE1BVF9EQVRFX0ZPUk1BVFMpLnZhbHVlLmRpc3BsYXkubW9udGhZZWFyQTExeUxhYmVsID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckExMXlMYWJlbDtcbiAgICAgIHJlY29yZHMuZ2V0KE1BVF9EQVRFX0ZPUk1BVFMpLnZhbHVlLnBhcnNlLmRhdGVJbnB1dCA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHMucGFyc2UuZGF0ZUlucHV0O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuXG4gICAgdGhpcy5fY2FsZW5kYXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fem9uZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwbHkoKTogdm9pZCB7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fY29uZmlndXJhdGlvbi5pbml0aWFscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIFxuICAgICAgY29uc3QgbGluayA9IHRoaXMuX2NvbmZpZ3VyYXRpb24uaW5pdGlhbHNbaW5kZXhdO1xuICAgICAgaWYgKHRoaXMuZ3JvdXAgPT09IGxpbmsuZ3JvdXApIHtcblxuICAgICAgICB0aGlzLl9mb3JtYXRzID0gdGhpcy5fY29uZmlndXJhdGlvbi5mb3JtYXRzLmZpbHRlcihlID0+IGUubG9jYWxlID09PSB0aGlzLl9jb25maWd1cmF0aW9uLmluaXRpYWxzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS5ncm91cCA9PT0gdGhpcy5ncm91cClbMF0ubG9jYWxlKVswXTs7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUlucHV0RGF0ZUZvcm1hdHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVJbnB1dERhdGVGb3JtYXRzKCk6IHZvaWQge1xuXG4gICAgdGhpcy5fem9uZVN1YnNjcmlwdGlvbiA9IHRoaXMuX3pvbmUub25TdGFibGVcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIC8vICBIYW5kbGUgaW5wdXQgZGF0ZSBmb3JtYXRzXG4gICAgICAgICh0aGlzLmRhdGVQaWNrZXIuZGF0ZXBpY2tlcklucHV0IGFzIGFueSkuX2RhdGVGb3JtYXRzID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cztcblxuICAgICAgICAvLyAgUmVmcmVzaCB0aGUgaW5wdXQgdmFsdWUgdG8gdXNlIHRoZSBuZXcgZm9ybWF0XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wuZm9ybS52YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5mb3JtLnBhdGNoVmFsdWUoY3VycmVudFZhbHVlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19