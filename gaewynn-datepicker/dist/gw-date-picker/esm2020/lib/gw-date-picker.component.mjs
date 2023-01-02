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
        this._dateFormatsSubscription.unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3ctZGF0ZS1waWNrZXIvc3JjL2xpYi9ndy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ndy1kYXRlLXBpY2tlci9zcmMvbGliL2d3LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBZSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFnQixJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFTMUMsTUFBTSxPQUFPLHFCQUFxQjtJQWtCaEMsWUFDbUIsWUFBaUMsRUFDakMsS0FBYSxFQUNHLE9BQWUsRUFDL0IsWUFBOEIsRUFDOUIsb0JBQXlDO1FBSnpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0csWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUUxRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUF3QyxFQUFFLEVBQUU7WUFFaEksSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7WUFFcEMsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxJQUFJLENB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dUJBQXVCO1FBRTdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFFZCw2QkFBNkI7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUF1QixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBRXhGLGlEQUFpRDtZQUNqRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7a0hBMUZVLHFCQUFxQiwyRUFxQnRCLGVBQWU7c0dBckJkLHFCQUFxQiw4SEFFbEIsYUFBYSw4RUFHYixvQkFBb0IsZ0RDbkJwQywyQkFBeUI7MkZEY1oscUJBQXFCO2tCQUpqQyxTQUFTOytCQUNFLG9CQUFvQjs7MEJBd0IzQixNQUFNOzJCQUFDLGVBQWU7d0dBbEJsQixVQUFVO3NCQURoQixZQUFZO3VCQUFDLGFBQWE7Z0JBSXBCLFdBQVc7c0JBRGpCLFlBQVk7dUJBQUMsb0JBQW9CO2dCQUkzQixLQUFLO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgQ29udGVudENoaWxkLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIEVudmlyb25tZW50SW5qZWN0b3IsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHRha2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR1dEYXRlUGlja2VyQ29uZmlndXJhdGlvbiwgSUdXRGF0ZVBpY2tlckZvcm1hdHMgfSBmcm9tICcuL2d3LWRhdGUtcGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBHV0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9ndy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Fld3lubi1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2d3LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBHV0RhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBcbiAgQENvbnRlbnRDaGlsZChNYXREYXRlcGlja2VyKSBcbiAgcHVibGljIGRhdGVQaWNrZXIhOiBNYXREYXRlcGlja2VyPERhdGU+O1xuXG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xEaXJlY3RpdmUpXG4gIHB1YmxpYyBmb3JtQ29udHJvbCE6IEZvcm1Db250cm9sRGlyZWN0aXZlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBncm91cCE6IHN0cmluZztcblxuICBwcml2YXRlIF9jYWxlbmRhclN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY29uZmlndXJhdGlvblN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfZGF0ZUZvcm1hdHNTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3pvbmVTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb24hOiBHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uO1xuICBwcml2YXRlIF9mb3JtYXRzITogSUdXRGF0ZVBpY2tlckZvcm1hdHM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZW52SW5qZWN0b3I6IEVudmlyb25tZW50SW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfem9uZTogTmdab25lLFxuICAgIEBJbmplY3QoTUFUX0RBVEVfTE9DQUxFKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9nd0RhdGVQaWNrZXJTZXJ2aWNlOiBHV0RhdGVQaWNrZXJTZXJ2aWNlKSB7IFxuXG4gICAgdGhpcy5fY29uZmlndXJhdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuX2d3RGF0ZVBpY2tlclNlcnZpY2UuY29uZmlndXJhdGlvbiQuc3Vic2NyaWJlKChjb25maWd1cmF0aW9uOiBHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uKSA9PiB7XG5cbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgICAvLyAgRHVyaW5nIGluaXRpYWxpemF0aW9uLCB0aGUgTWF0RGF0ZVBpY2tlciBkb2VzIG5vdCBleGlzdCB5ZXRcbiAgICAgIGlmICghdGhpcy5kYXRlUGlja2VyKVxuICAgICAgICByZXR1cm47XG4gICAgICBcbiAgICAgIHRoaXMuX2FwcGx5KCk7XG4gICAgfSlcbiAgfVxuICBcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICB0aGlzLl9hcHBseSgpO1xuXG4gICAgLy8gIEhhbmRsZSBjYWxlbmRhciBmb3JtYXRzIHdoZW4gaXQgb3BlbmVkIChhbGxvd3MgdG8gcHJlc2VydmUgaW5kZXBlbmRhbmNlIGJldHdlZW4gZGF0ZSBwaWNrZXJzKVxuICAgIHRoaXMuX2NhbGVuZGFyU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRlUGlja2VyLm9wZW5lZFN0cmVhbS5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICB0aGlzLl9sb2NhbGUgPSB0aGlzLl9mb3JtYXRzLmxvY2FsZTtcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNldExvY2FsZSh0aGlzLl9mb3JtYXRzLmxvY2FsZSk7XG5cbiAgICAgIHZhciByZWNvcmRzID0gKHRoaXMuX2VudkluamVjdG9yIGFzIGFueSkucmVjb3JkcyBhcyBNYXA8YW55LCBhbnk+O1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5kYXRlSW5wdXQgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUlucHV0O1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5kYXRlQTExeUxhYmVsID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGVBMTF5TGFiZWw7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsO1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5tb250aFllYXJBMTF5TGFiZWwgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyQTExeUxhYmVsO1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUucGFyc2UuZGF0ZUlucHV0ID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5wYXJzZS5kYXRlSW5wdXQ7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICB0aGlzLl9jYWxlbmRhclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9kYXRlRm9ybWF0c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGx5KCk6IHZvaWQge1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2NvbmZpZ3VyYXRpb24uaW5pdGlhbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLl9jb25maWd1cmF0aW9uLmluaXRpYWxzW2luZGV4XTtcbiAgICAgIGlmICh0aGlzLmdyb3VwID09PSBsaW5rLmdyb3VwKSB7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0cyA9IHRoaXMuX2NvbmZpZ3VyYXRpb24uZm9ybWF0cy5maWx0ZXIoZSA9PiBlLmxvY2FsZSA9PT0gdGhpcy5fY29uZmlndXJhdGlvbi5pbml0aWFscy5maWx0ZXIodmFsdWUgPT4gdmFsdWUuZ3JvdXAgPT09IHRoaXMuZ3JvdXApWzBdLmxvY2FsZSlbMF07O1xuICAgICAgICB0aGlzLl91cGRhdGVJbnB1dERhdGVGb3JtYXRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSW5wdXREYXRlRm9ybWF0cygpOiB2b2lkIHtcblxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl96b25lLm9uU3RhYmxlXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvLyAgSGFuZGxlIGlucHV0IGRhdGUgZm9ybWF0c1xuICAgICAgICAodGhpcy5kYXRlUGlja2VyLmRhdGVwaWNrZXJJbnB1dCBhcyBhbnkpLl9kYXRlRm9ybWF0cyA9IHRoaXMuX2Zvcm1hdHMubW9tZW50RGF0ZUZvcm1hdHM7XG5cbiAgICAgICAgLy8gIFJlZnJlc2ggdGhlIGlucHV0IHZhbHVlIHRvIHVzZSB0aGUgbmV3IGZvcm1hdFxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLmZvcm0udmFsdWU7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuZm9ybS5wYXRjaFZhbHVlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==