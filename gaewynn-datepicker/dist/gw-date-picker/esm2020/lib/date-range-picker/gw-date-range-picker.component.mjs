import { Component, Inject, ContentChild, Input, ContentChildren } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "../gw-date-picker.service";
export class GWDateRangePickerComponent {
    constructor(_envInjector, _zone, _locale, _dateAdapter, _gwDatePickerService) {
        this._envInjector = _envInjector;
        this._zone = _zone;
        this._locale = _locale;
        this._dateAdapter = _dateAdapter;
        this._gwDatePickerService = _gwDatePickerService;
        this._configurationSubscription = this._gwDatePickerService.configuration$.subscribe((configuration) => {
            this._configuration = configuration;
            //  During initialization, the MatDateRangePicker does not exist yet
            if (!this.dateRangePicker)
                return;
            this._apply();
        });
    }
    ngAfterViewInit() {
        this._apply();
        //  Handle calendar formats when it opened (allows to preserve independance between date pickers)
        this._calendarSubscription = this.dateRangePicker.openedStream.subscribe(() => {
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
            //  Handle inputs date formats
            this.dateRangePicker.datepickerInput._startInput._dateFormats = this._formats.momentDateFormats;
            this.dateRangePicker.datepickerInput._endInput._dateFormats = this._formats.momentDateFormats;
            //  Refresh the input value to use the new format
            const currentValueFrom = this.formControls.first.value;
            this.formControls.first.form.patchValue(currentValueFrom);
            const currentValueTo = this.formControls.last.value;
            this.formControls.last.form.patchValue(currentValueTo);
        });
    }
}
GWDateRangePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDateRangePickerComponent, deps: [{ token: i0.EnvironmentInjector }, { token: i0.NgZone }, { token: MAT_DATE_LOCALE }, { token: i1.DateAdapter }, { token: i2.GWDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
GWDateRangePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: GWDateRangePickerComponent, selector: "gaewynn-date-range-picker", inputs: { group: "group" }, queries: [{ propertyName: "dateRangePicker", first: true, predicate: MatDateRangePicker, descendants: true }, { propertyName: "formControls", predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDateRangePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gaewynn-date-range-picker', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.EnvironmentInjector }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }, { type: i1.DateAdapter }, { type: i2.GWDatePickerService }]; }, propDecorators: { dateRangePicker: [{
                type: ContentChild,
                args: [MatDateRangePicker]
            }], formControls: [{
                type: ContentChildren,
                args: [FormControlDirective, { descendants: true }]
            }], group: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3ctZGF0ZS1waWNrZXIvc3JjL2xpYi9kYXRlLXJhbmdlLXBpY2tlci9ndy1kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ndy1kYXRlLXBpY2tlci9zcmMvbGliL2RhdGUtcmFuZ2UtcGlja2VyL2d3LWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXlELGVBQWUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxSixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQWUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFnQixJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFRMUMsTUFBTSxPQUFPLDBCQUEwQjtJQWlCckMsWUFDbUIsWUFBaUMsRUFDakMsS0FBYSxFQUNHLE9BQWUsRUFDL0IsWUFBOEIsRUFDOUIsb0JBQXlDO1FBSnpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0csWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUUxRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUF3QyxFQUFFLEVBQUU7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LElBQUksRUFBRTtnQkFJckQsS0FBSztzQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBFbnZpcm9ubWVudEluamVjdG9yLCBBZnRlclZpZXdJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdERhdGVSYW5nZVBpY2tlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCB0YWtlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24sIEdXRGF0ZVBpY2tlclNlcnZpY2UsIElHV0RhdGVQaWNrZXJGb3JtYXRzIH0gZnJvbSAnLi4vZ3ctZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhZXd5bm4tZGF0ZS1yYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3ctZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEdXRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgXG4gIEBDb250ZW50Q2hpbGQoTWF0RGF0ZVJhbmdlUGlja2VyKSBcbiAgcHVibGljIGRhdGVSYW5nZVBpY2tlciE6IE1hdERhdGVSYW5nZVBpY2tlcjxEYXRlPjtcblxuICBAQ29udGVudENoaWxkcmVuKEZvcm1Db250cm9sRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIHB1YmxpYyBmb3JtQ29udHJvbHMhOiBRdWVyeUxpc3Q8Rm9ybUNvbnRyb2xEaXJlY3RpdmU+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBncm91cCE6IHN0cmluZztcblxuICBwcml2YXRlIF9jYWxlbmRhclN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY29uZmlndXJhdGlvblN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY29uZmlndXJhdGlvbiE6IEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb247XG4gIHByaXZhdGUgX2Zvcm1hdHMhOiBJR1dEYXRlUGlja2VyRm9ybWF0cztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbnZJbmplY3RvcjogRW52aXJvbm1lbnRJbmplY3RvcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF96b25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChNQVRfREFURV9MT0NBTEUpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2d3RGF0ZVBpY2tlclNlcnZpY2U6IEdXRGF0ZVBpY2tlclNlcnZpY2UpIHsgXG5cbiAgICB0aGlzLl9jb25maWd1cmF0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5fZ3dEYXRlUGlja2VyU2VydmljZS5jb25maWd1cmF0aW9uJC5zdWJzY3JpYmUoKGNvbmZpZ3VyYXRpb246IEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24pID0+IHtcblxuICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICAgIC8vICBEdXJpbmcgaW5pdGlhbGl6YXRpb24sIHRoZSBNYXREYXRlUmFuZ2VQaWNrZXIgZG9lcyBub3QgZXhpc3QgeWV0XG4gICAgICBpZiAoIXRoaXMuZGF0ZVJhbmdlUGlja2VyKVxuICAgICAgICByZXR1cm47XG4gICAgICBcbiAgICAgIHRoaXMuX2FwcGx5KCk7XG4gICAgfSlcbiAgfVxuICBcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICB0aGlzLl9hcHBseSgpO1xuXG4gICAgLy8gIEhhbmRsZSBjYWxlbmRhciBmb3JtYXRzIHdoZW4gaXQgb3BlbmVkIChhbGxvd3MgdG8gcHJlc2VydmUgaW5kZXBlbmRhbmNlIGJldHdlZW4gZGF0ZSBwaWNrZXJzKVxuICAgIHRoaXMuX2NhbGVuZGFyU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRlUmFuZ2VQaWNrZXIub3BlbmVkU3RyZWFtLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgIHRoaXMuX2xvY2FsZSA9IHRoaXMuX2Zvcm1hdHMubG9jYWxlO1xuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0TG9jYWxlKHRoaXMuX2Zvcm1hdHMubG9jYWxlKTtcblxuICAgICAgdmFyIHJlY29yZHMgPSAodGhpcy5fZW52SW5qZWN0b3IgYXMgYW55KS5yZWNvcmRzIGFzIE1hcDxhbnksIGFueT47XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5LmRhdGVJbnB1dCA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRlSW5wdXQ7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5LmRhdGVBMTF5TGFiZWwgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUExMXlMYWJlbDtcbiAgICAgIHJlY29yZHMuZ2V0KE1BVF9EQVRFX0ZPUk1BVFMpLnZhbHVlLmRpc3BsYXkubW9udGhZZWFyTGFiZWwgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyTGFiZWw7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5Lm1vbnRoWWVhckExMXlMYWJlbCA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJBMTF5TGFiZWw7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5wYXJzZS5kYXRlSW5wdXQgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLnBhcnNlLmRhdGVJbnB1dDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcblxuICAgIHRoaXMuX2NhbGVuZGFyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGx5KCk6IHZvaWQge1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2NvbmZpZ3VyYXRpb24uaW5pdGlhbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLl9jb25maWd1cmF0aW9uLmluaXRpYWxzW2luZGV4XTtcbiAgICAgIGlmICh0aGlzLmdyb3VwID09PSBsaW5rLmdyb3VwKSB7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0cyA9IHRoaXMuX2NvbmZpZ3VyYXRpb24uZm9ybWF0cy5maWx0ZXIoZSA9PiBlLmxvY2FsZSA9PT0gdGhpcy5fY29uZmlndXJhdGlvbi5pbml0aWFscy5maWx0ZXIodmFsdWUgPT4gdmFsdWUuZ3JvdXAgPT09IHRoaXMuZ3JvdXApWzBdLmxvY2FsZSlbMF07O1xuICAgICAgICB0aGlzLl91cGRhdGVJbnB1dERhdGVGb3JtYXRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSW5wdXREYXRlRm9ybWF0cygpOiB2b2lkIHtcblxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl96b25lLm9uU3RhYmxlXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvLyAgSGFuZGxlIGlucHV0cyBkYXRlIGZvcm1hdHNcbiAgICAgICAgKCh0aGlzLmRhdGVSYW5nZVBpY2tlci5kYXRlcGlja2VySW5wdXQgYXMgYW55KS5fc3RhcnRJbnB1dCBhcyBhbnkpLl9kYXRlRm9ybWF0cyA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHM7XG4gICAgICAgICgodGhpcy5kYXRlUmFuZ2VQaWNrZXIuZGF0ZXBpY2tlcklucHV0IGFzIGFueSkuX2VuZElucHV0IGFzIGFueSkuX2RhdGVGb3JtYXRzID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cztcblxuICAgICAgICAvLyAgUmVmcmVzaCB0aGUgaW5wdXQgdmFsdWUgdG8gdXNlIHRoZSBuZXcgZm9ybWF0XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZUZyb20gPSB0aGlzLmZvcm1Db250cm9scy5maXJzdC52YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbHMuZmlyc3QuZm9ybS5wYXRjaFZhbHVlKGN1cnJlbnRWYWx1ZUZyb20pO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZVRvID0gdGhpcy5mb3JtQ29udHJvbHMubGFzdC52YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbHMubGFzdC5mb3JtLnBhdGNoVmFsdWUoY3VycmVudFZhbHVlVG8pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=