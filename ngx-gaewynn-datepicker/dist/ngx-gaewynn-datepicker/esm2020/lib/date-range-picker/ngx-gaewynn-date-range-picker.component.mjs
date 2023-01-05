import { Component, Inject, ContentChild, Input, ContentChildren } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "../ngx-gaewynn-datepicker.service";
export class NgxGaewynnDateRangePickerComponent {
    constructor(_envInjector, _zone, _locale, _dateAdapter, _ngxGaewynnDatePickerService) {
        this._envInjector = _envInjector;
        this._zone = _zone;
        this._locale = _locale;
        this._dateAdapter = _dateAdapter;
        this._ngxGaewynnDatePickerService = _ngxGaewynnDatePickerService;
        this._configurationSubscription = this._ngxGaewynnDatePickerService.configuration$.subscribe((configuration) => {
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
                this._formats = this._configuration.formats.filter(e => e.format === this._configuration.initials.filter(value => value.group === this.group)[0].format)[0];
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
NgxGaewynnDateRangePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerComponent, deps: [{ token: i0.EnvironmentInjector }, { token: i0.NgZone }, { token: MAT_DATE_LOCALE }, { token: i1.DateAdapter }, { token: i2.NgxGaewynnDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
NgxGaewynnDateRangePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: NgxGaewynnDateRangePickerComponent, selector: "ngx-gaewynn-date-range-picker", inputs: { group: "group" }, queries: [{ propertyName: "dateRangePicker", first: true, predicate: MatDateRangePicker, descendants: true }, { propertyName: "formControls", predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-gaewynn-date-range-picker', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.EnvironmentInjector }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }, { type: i1.DateAdapter }, { type: i2.NgxGaewynnDatePickerService }]; }, propDecorators: { dateRangePicker: [{
                type: ContentChild,
                args: [MatDateRangePicker]
            }], formControls: [{
                type: ContentChildren,
                args: [FormControlDirective, { descendants: true }]
            }], group: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhZXd5bm4tZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci9zcmMvbGliL2RhdGUtcmFuZ2UtcGlja2VyL25neC1nYWV3eW5uLWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1nYWV3eW5uLWRhdGVwaWNrZXIvc3JjL2xpYi9kYXRlLXJhbmdlLXBpY2tlci9uZ3gtZ2Fld3lubi1kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUF5RCxlQUFlLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFlLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBZ0IsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBUTFDLE1BQU0sT0FBTyxrQ0FBa0M7SUFpQjdDLFlBQ21CLFlBQWlDLEVBQ2pDLEtBQWEsRUFDRyxPQUFlLEVBQy9CLFlBQThCLEVBQzlCLDRCQUF5RDtRQUp6RCxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBNkI7UUFFMUUsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FB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QkFEbEIsZUFBZTt1QkFBQyxvQkFBb0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0JBSXJELEtBQUs7c0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBDb250ZW50Q2hpbGQsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgRW52aXJvbm1lbnRJbmplY3RvciwgQWZ0ZXJWaWV3SW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXREYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgdGFrZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uLCBOZ3hHYWV3eW5uRGF0ZVBpY2tlclNlcnZpY2UsIElOZ3hHYWV3eW5uRGF0ZVBpY2tlckZvcm1hdHMgfSBmcm9tICcuLi9uZ3gtZ2Fld3lubi1kYXRlcGlja2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZ2Fld3lubi1kYXRlLXJhbmdlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ2Fld3lubi1kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4R2Fld3lubkRhdGVSYW5nZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIFxuICBAQ29udGVudENoaWxkKE1hdERhdGVSYW5nZVBpY2tlcikgXG4gIHB1YmxpYyBkYXRlUmFuZ2VQaWNrZXIhOiBNYXREYXRlUmFuZ2VQaWNrZXI8RGF0ZT47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihGb3JtQ29udHJvbERpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBwdWJsaWMgZm9ybUNvbnRyb2xzITogUXVlcnlMaXN0PEZvcm1Db250cm9sRGlyZWN0aXZlPjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ3JvdXAhOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfY2FsZW5kYXJTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb25TdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3pvbmVTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb24hOiBJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uO1xuICBwcml2YXRlIF9mb3JtYXRzITogSU5neEdhZXd5bm5EYXRlUGlja2VyRm9ybWF0cztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbnZJbmplY3RvcjogRW52aXJvbm1lbnRJbmplY3RvcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF96b25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChNQVRfREFURV9MT0NBTEUpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25neEdhZXd5bm5EYXRlUGlja2VyU2VydmljZTogTmd4R2Fld3lubkRhdGVQaWNrZXJTZXJ2aWNlKSB7IFxuXG4gICAgdGhpcy5fY29uZmlndXJhdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuX25neEdhZXd5bm5EYXRlUGlja2VyU2VydmljZS5jb25maWd1cmF0aW9uJC5zdWJzY3JpYmUoKGNvbmZpZ3VyYXRpb246IElOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24pID0+IHtcblxuICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICAgIC8vICBEdXJpbmcgaW5pdGlhbGl6YXRpb24sIHRoZSBNYXREYXRlUmFuZ2VQaWNrZXIgZG9lcyBub3QgZXhpc3QgeWV0XG4gICAgICBpZiAoIXRoaXMuZGF0ZVJhbmdlUGlja2VyKVxuICAgICAgICByZXR1cm47XG4gICAgICBcbiAgICAgIHRoaXMuX2FwcGx5KCk7XG4gICAgfSlcbiAgfVxuICBcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICB0aGlzLl9hcHBseSgpO1xuXG4gICAgLy8gIEhhbmRsZSBjYWxlbmRhciBmb3JtYXRzIHdoZW4gaXQgb3BlbmVkIChhbGxvd3MgdG8gcHJlc2VydmUgaW5kZXBlbmRhbmNlIGJldHdlZW4gZGF0ZSBwaWNrZXJzKVxuICAgIHRoaXMuX2NhbGVuZGFyU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRlUmFuZ2VQaWNrZXIub3BlbmVkU3RyZWFtLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgIHRoaXMuX2xvY2FsZSA9IHRoaXMuX2Zvcm1hdHMubG9jYWxlO1xuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0TG9jYWxlKHRoaXMuX2Zvcm1hdHMubG9jYWxlKTtcblxuICAgICAgdmFyIHJlY29yZHMgPSAodGhpcy5fZW52SW5qZWN0b3IgYXMgYW55KS5yZWNvcmRzIGFzIE1hcDxhbnksIGFueT47XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5LmRhdGVJbnB1dCA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRlSW5wdXQ7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5LmRhdGVBMTF5TGFiZWwgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUExMXlMYWJlbDtcbiAgICAgIHJlY29yZHMuZ2V0KE1BVF9EQVRFX0ZPUk1BVFMpLnZhbHVlLmRpc3BsYXkubW9udGhZZWFyTGFiZWwgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyTGFiZWw7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5Lm1vbnRoWWVhckExMXlMYWJlbCA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJBMTF5TGFiZWw7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5wYXJzZS5kYXRlSW5wdXQgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLnBhcnNlLmRhdGVJbnB1dDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcblxuICAgIHRoaXMuX2NhbGVuZGFyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGx5KCk6IHZvaWQge1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2NvbmZpZ3VyYXRpb24uaW5pdGlhbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLl9jb25maWd1cmF0aW9uLmluaXRpYWxzW2luZGV4XTtcbiAgICAgIGlmICh0aGlzLmdyb3VwID09PSBsaW5rLmdyb3VwKSB7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0cyA9IHRoaXMuX2NvbmZpZ3VyYXRpb24uZm9ybWF0cy5maWx0ZXIoZSA9PiBlLmZvcm1hdCA9PT0gdGhpcy5fY29uZmlndXJhdGlvbi5pbml0aWFscy5maWx0ZXIodmFsdWUgPT4gdmFsdWUuZ3JvdXAgPT09IHRoaXMuZ3JvdXApWzBdLmZvcm1hdClbMF07O1xuICAgICAgICB0aGlzLl91cGRhdGVJbnB1dERhdGVGb3JtYXRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSW5wdXREYXRlRm9ybWF0cygpOiB2b2lkIHtcblxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl96b25lLm9uU3RhYmxlXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvLyAgSGFuZGxlIGlucHV0cyBkYXRlIGZvcm1hdHNcbiAgICAgICAgKCh0aGlzLmRhdGVSYW5nZVBpY2tlci5kYXRlcGlja2VySW5wdXQgYXMgYW55KS5fc3RhcnRJbnB1dCBhcyBhbnkpLl9kYXRlRm9ybWF0cyA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHM7XG4gICAgICAgICgodGhpcy5kYXRlUmFuZ2VQaWNrZXIuZGF0ZXBpY2tlcklucHV0IGFzIGFueSkuX2VuZElucHV0IGFzIGFueSkuX2RhdGVGb3JtYXRzID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cztcblxuICAgICAgICAvLyAgUmVmcmVzaCB0aGUgaW5wdXQgdmFsdWUgdG8gdXNlIHRoZSBuZXcgZm9ybWF0XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZUZyb20gPSB0aGlzLmZvcm1Db250cm9scy5maXJzdC52YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbHMuZmlyc3QuZm9ybS5wYXRjaFZhbHVlKGN1cnJlbnRWYWx1ZUZyb20pO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZVRvID0gdGhpcy5mb3JtQ29udHJvbHMubGFzdC52YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbHMubGFzdC5mb3JtLnBhdGNoVmFsdWUoY3VycmVudFZhbHVlVG8pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=