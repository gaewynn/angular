import { Component, Inject, ContentChild, Input } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { take } from 'rxjs';
import { GWDatePickerService } from './gw-date-picker.service';
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
        this.id = GWDatePickerService.getUID();
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
GWDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: GWDatePickerComponent, selector: "gaewynn-datepicker", inputs: { group: "group" }, queries: [{ propertyName: "datePicker", first: true, predicate: MatDatepicker, descendants: true }, { propertyName: "formControl", first: true, predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<span>{{ id }}</span>\r\n<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gaewynn-datepicker', template: "<span>{{ id }}</span>\r\n<ng-content></ng-content>" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3ctZGF0ZS1waWNrZXIvc3JjL2xpYi9ndy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ndy1kYXRlLXBpY2tlci9zcmMvbGliL2d3LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBZSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFnQixJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHMUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFNL0QsTUFBTSxPQUFPLHFCQUFxQjtJQW1CaEMsWUFDbUIsWUFBaUMsRUFDakMsS0FBYSxFQUNHLE9BQWUsRUFDL0IsWUFBOEIsRUFDOUIsb0JBQXlDO1FBSnpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0csWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUUxRCxJQUFJLENBQUMsRUFBRSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFNBQVMs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SixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUNoQztTQUNGO0lBQ0gsQ0FBQztJQUVPLHVCQUF1QjtRQUU3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsR0FBRyxFQUFFO1lBRWQsNkJBQTZCO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBdUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztZQUV4RixpREFBaUQ7WUFDakQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2tIQTNGVSxxQkFBcUIsMkVBc0J0QixlQUFlO3NHQXRCZCxxQkFBcUIsOEhBRWxCLGFBQWEsOEVBR2Isb0JBQW9CLGdEQ25CcEMsb0RBQ3lCOzJGRGFaLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSxvQkFBb0I7OzBCQXlCM0IsTUFBTTsyQkFBQyxlQUFlO3dHQW5CbEIsVUFBVTtzQkFEaEIsWUFBWTt1QkFBQyxhQUFhO2dCQUlwQixXQUFXO3NCQURqQixZQUFZO3VCQUFDLG9CQUFvQjtnQkFJM0IsS0FBSztzQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBFbnZpcm9ubWVudEluamVjdG9yLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCB0YWtlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24sIElHV0RhdGVQaWNrZXJGb3JtYXRzIH0gZnJvbSAnLi9ndy1kYXRlLXBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgR1dEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZ3ctZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhZXd5bm4tZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ndy1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgR1dEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgXG4gIEBDb250ZW50Q2hpbGQoTWF0RGF0ZXBpY2tlcikgXG4gIHB1YmxpYyBkYXRlUGlja2VyITogTWF0RGF0ZXBpY2tlcjxEYXRlPjtcblxuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sRGlyZWN0aXZlKVxuICBwdWJsaWMgZm9ybUNvbnRyb2whOiBGb3JtQ29udHJvbERpcmVjdGl2ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ3JvdXAhOiBzdHJpbmc7XG5cbiAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfY2FsZW5kYXJTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb25TdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3pvbmVTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb24hOiBHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uO1xuICBwcml2YXRlIF9mb3JtYXRzITogSUdXRGF0ZVBpY2tlckZvcm1hdHM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZW52SW5qZWN0b3I6IEVudmlyb25tZW50SW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfem9uZTogTmdab25lLFxuICAgIEBJbmplY3QoTUFUX0RBVEVfTE9DQUxFKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9nd0RhdGVQaWNrZXJTZXJ2aWNlOiBHV0RhdGVQaWNrZXJTZXJ2aWNlKSB7IFxuXG4gICAgdGhpcy5pZCA9IEdXRGF0ZVBpY2tlclNlcnZpY2UuZ2V0VUlEKCk7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuX2d3RGF0ZVBpY2tlclNlcnZpY2UuY29uZmlndXJhdGlvbiQuc3Vic2NyaWJlKChjb25maWd1cmF0aW9uOiBHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uKSA9PiB7XG5cbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgICAvLyAgRHVyaW5nIGluaXRpYWxpemF0aW9uLCB0aGUgTWF0RGF0ZVBpY2tlciBkb2VzIG5vdCBleGlzdCB5ZXRcbiAgICAgIGlmICghdGhpcy5kYXRlUGlja2VyKVxuICAgICAgICByZXR1cm47XG4gICAgICBcbiAgICAgIHRoaXMuX2FwcGx5KCk7XG4gICAgfSlcbiAgfVxuICBcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICB0aGlzLl9hcHBseSgpO1xuXG4gICAgLy8gIEhhbmRsZSBjYWxlbmRhciBmb3JtYXRzIHdoZW4gaXQgb3BlbmVkIChhbGxvd3MgdG8gcHJlc2VydmUgaW5kZXBlbmRhbmNlIGJldHdlZW4gZGF0ZSBwaWNrZXJzKVxuICAgIHRoaXMuX2NhbGVuZGFyU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRlUGlja2VyLm9wZW5lZFN0cmVhbS5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICB0aGlzLl9sb2NhbGUgPSB0aGlzLl9mb3JtYXRzLmxvY2FsZTtcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNldExvY2FsZSh0aGlzLl9mb3JtYXRzLmxvY2FsZSk7XG5cbiAgICAgIHZhciByZWNvcmRzID0gKHRoaXMuX2VudkluamVjdG9yIGFzIGFueSkucmVjb3JkcyBhcyBNYXA8YW55LCBhbnk+O1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5kYXRlSW5wdXQgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUlucHV0O1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5kYXRlQTExeUxhYmVsID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGVBMTF5TGFiZWw7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsO1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5tb250aFllYXJBMTF5TGFiZWwgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyQTExeUxhYmVsO1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUucGFyc2UuZGF0ZUlucHV0ID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5wYXJzZS5kYXRlSW5wdXQ7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICB0aGlzLl9jYWxlbmRhclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBseSgpOiB2b2lkIHtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9jb25maWd1cmF0aW9uLmluaXRpYWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgXG4gICAgICBjb25zdCBsaW5rID0gdGhpcy5fY29uZmlndXJhdGlvbi5pbml0aWFsc1tpbmRleF07XG4gICAgICBpZiAodGhpcy5ncm91cCA9PT0gbGluay5ncm91cCkge1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdHMgPSB0aGlzLl9jb25maWd1cmF0aW9uLmZvcm1hdHMuZmlsdGVyKGUgPT4gZS5sb2NhbGUgPT09IHRoaXMuX2NvbmZpZ3VyYXRpb24uaW5pdGlhbHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlLmdyb3VwID09PSB0aGlzLmdyb3VwKVswXS5sb2NhbGUpWzBdOztcbiAgICAgICAgdGhpcy5fdXBkYXRlSW5wdXREYXRlRm9ybWF0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUlucHV0RGF0ZUZvcm1hdHMoKTogdm9pZCB7XG5cbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gdGhpcy5fem9uZS5vblN0YWJsZVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgLy8gIEhhbmRsZSBpbnB1dCBkYXRlIGZvcm1hdHNcbiAgICAgICAgKHRoaXMuZGF0ZVBpY2tlci5kYXRlcGlja2VySW5wdXQgYXMgYW55KS5fZGF0ZUZvcm1hdHMgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzO1xuXG4gICAgICAgIC8vICBSZWZyZXNoIHRoZSBpbnB1dCB2YWx1ZSB0byB1c2UgdGhlIG5ldyBmb3JtYXRcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5mb3JtLnZhbHVlO1xuICAgICAgICB0aGlzLmZvcm1Db250cm9sLmZvcm0ucGF0Y2hWYWx1ZShjdXJyZW50VmFsdWUpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIjxzcGFuPnt7IGlkIH19PC9zcGFuPlxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19