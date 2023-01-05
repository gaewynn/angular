import { Component, Inject, ContentChild, Input } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "../ngx-gaewynn-datepicker.service";
export class NgxGaewynnDatePickerComponent {
    constructor(_envInjector, _zone, _locale, _dateAdapter, _ngxGaewynnDatePickerService) {
        this._envInjector = _envInjector;
        this._zone = _zone;
        this._locale = _locale;
        this._dateAdapter = _dateAdapter;
        this._ngxGaewynnDatePickerService = _ngxGaewynnDatePickerService;
        this._configurationSubscription = this._ngxGaewynnDatePickerService.configuration$.subscribe((configuration) => {
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
            //  Handle input date formats
            this.datePicker.datepickerInput._dateFormats = this._formats.momentDateFormats;
            //  Refresh the input value to use the new format
            const currentValue = this.formControl.form.value;
            this.formControl.form.patchValue(currentValue);
        });
    }
}
NgxGaewynnDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerComponent, deps: [{ token: i0.EnvironmentInjector }, { token: i0.NgZone }, { token: MAT_DATE_LOCALE }, { token: i1.DateAdapter }, { token: i2.NgxGaewynnDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
NgxGaewynnDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: NgxGaewynnDatePickerComponent, selector: "ngx-gaewynn-datepicker", inputs: { group: "group" }, queries: [{ propertyName: "datePicker", first: true, predicate: MatDatepicker, descendants: true }, { propertyName: "formControl", first: true, predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-gaewynn-datepicker', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.EnvironmentInjector }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }, { type: i1.DateAdapter }, { type: i2.NgxGaewynnDatePickerService }]; }, propDecorators: { datePicker: [{
                type: ContentChild,
                args: [MatDatepicker]
            }], formControl: [{
                type: ContentChild,
                args: [FormControlDirective]
            }], group: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ2Fld3lubi1kYXRlcGlja2VyL3NyYy9saWIvZGF0ZS1waWNrZXIvbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ2Fld3lubi1kYXRlcGlja2VyL3NyYy9saWIvZGF0ZS1waWNrZXIvbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUF5RCxNQUFNLGVBQWUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQWUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBZ0IsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBUTFDLE1BQU0sT0FBTyw2QkFBNkI7SUFpQnhDLFlBQ21CLFlBQWlDLEVBQ2pDLEtBQWEsRUFDRyxPQUFlLEVBQy9CLFlBQThCLEVBQzlCLDRCQUF5RDtRQUp6RCxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBNkI7UUFFMUUsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBaUQsRUFBRSxFQUFFO1lB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O2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sdUJBQXVCO1FBRTdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFFZCw2QkFBNkI7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUF1QixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBRXhGLGlEQUFpRDtZQUNqRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7MEhBeEZVLDZCQUE2QiwyRUFvQjlCLGVBQWU7OEdBcEJkLDZCQUE2QixrSUFFMUIsYUFBYSw4RUFHYixvQkFBb0IsZ0RDbEJwQywyQkFBeUI7MkZEYVosNkJBQTZCO2tCQUp6QyxTQUFTOytCQUNFLHdCQUF3Qjs7MEJBdUIvQixNQUFNOzJCQUFDLGVBQWU7Z0hBakJsQixVQUFVO3NCQURoQixZQUFZO3VCQUFDLGFBQWE7Z0JBSXBCLFdBQVc7c0JBRGpCLFlBQVk7dUJBQUMsb0JBQW9CO2dCQUkzQixLQUFLO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgQ29udGVudENoaWxkLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIEVudmlyb25tZW50SW5qZWN0b3IsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHRha2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSU5neEdhZXd5bm5EYXRlUGlja2VyQ29uZmlndXJhdGlvbiwgTmd4R2Fld3lubkRhdGVQaWNrZXJTZXJ2aWNlLCBJTmd4R2Fld3lubkRhdGVQaWNrZXJGb3JtYXRzIH0gZnJvbSAnLi4vbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWdhZXd5bm4tZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ2Fld3lubi1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIFxuICBAQ29udGVudENoaWxkKE1hdERhdGVwaWNrZXIpIFxuICBwdWJsaWMgZGF0ZVBpY2tlciE6IE1hdERhdGVwaWNrZXI8RGF0ZT47XG5cbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbERpcmVjdGl2ZSlcbiAgcHVibGljIGZvcm1Db250cm9sITogRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdyb3VwITogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2NhbGVuZGFyU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb25maWd1cmF0aW9uU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF96b25lU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb25maWd1cmF0aW9uITogSU5neEdhZXd5bm5EYXRlUGlja2VyQ29uZmlndXJhdGlvbjtcbiAgcHJpdmF0ZSBfZm9ybWF0cyE6IElOZ3hHYWV3eW5uRGF0ZVBpY2tlckZvcm1hdHM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZW52SW5qZWN0b3I6IEVudmlyb25tZW50SW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfem9uZTogTmdab25lLFxuICAgIEBJbmplY3QoTUFUX0RBVEVfTE9DQUxFKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9uZ3hHYWV3eW5uRGF0ZVBpY2tlclNlcnZpY2U6IE5neEdhZXd5bm5EYXRlUGlja2VyU2VydmljZSkgeyBcblxuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLl9uZ3hHYWV3eW5uRGF0ZVBpY2tlclNlcnZpY2UuY29uZmlndXJhdGlvbiQuc3Vic2NyaWJlKChjb25maWd1cmF0aW9uOiBJTmd4R2Fld3lubkRhdGVQaWNrZXJDb25maWd1cmF0aW9uKSA9PiB7XG5cbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgICAvLyAgRHVyaW5nIGluaXRpYWxpemF0aW9uLCB0aGUgTWF0RGF0ZVBpY2tlciBkb2VzIG5vdCBleGlzdCB5ZXRcbiAgICAgIGlmICghdGhpcy5kYXRlUGlja2VyKVxuICAgICAgICByZXR1cm47XG4gICAgICBcbiAgICAgIHRoaXMuX2FwcGx5KCk7XG4gICAgfSlcbiAgfVxuICBcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICB0aGlzLl9hcHBseSgpO1xuXG4gICAgLy8gIEhhbmRsZSBjYWxlbmRhciBmb3JtYXRzIHdoZW4gaXQgb3BlbmVkIChhbGxvd3MgdG8gcHJlc2VydmUgaW5kZXBlbmRhbmNlIGJldHdlZW4gZGF0ZSBwaWNrZXJzKVxuICAgIHRoaXMuX2NhbGVuZGFyU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRlUGlja2VyLm9wZW5lZFN0cmVhbS5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICB0aGlzLl9sb2NhbGUgPSB0aGlzLl9mb3JtYXRzLmxvY2FsZTtcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNldExvY2FsZSh0aGlzLl9mb3JtYXRzLmxvY2FsZSk7XG5cbiAgICAgIHZhciByZWNvcmRzID0gKHRoaXMuX2VudkluamVjdG9yIGFzIGFueSkucmVjb3JkcyBhcyBNYXA8YW55LCBhbnk+O1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5kYXRlSW5wdXQgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUlucHV0O1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5kYXRlQTExeUxhYmVsID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGVBMTF5TGFiZWw7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsO1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUuZGlzcGxheS5tb250aFllYXJBMTF5TGFiZWwgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyQTExeUxhYmVsO1xuICAgICAgcmVjb3Jkcy5nZXQoTUFUX0RBVEVfRk9STUFUUykudmFsdWUucGFyc2UuZGF0ZUlucHV0ID0gdGhpcy5fZm9ybWF0cy5tb21lbnREYXRlRm9ybWF0cy5wYXJzZS5kYXRlSW5wdXQ7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICB0aGlzLl9jYWxlbmRhclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBseSgpOiB2b2lkIHtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9jb25maWd1cmF0aW9uLmluaXRpYWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgXG4gICAgICBjb25zdCBsaW5rID0gdGhpcy5fY29uZmlndXJhdGlvbi5pbml0aWFsc1tpbmRleF07XG4gICAgICBpZiAodGhpcy5ncm91cCA9PT0gbGluay5ncm91cCkge1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdHMgPSB0aGlzLl9jb25maWd1cmF0aW9uLmZvcm1hdHMuZmlsdGVyKGUgPT4gZS5mb3JtYXQgPT09IHRoaXMuX2NvbmZpZ3VyYXRpb24uaW5pdGlhbHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlLmdyb3VwID09PSB0aGlzLmdyb3VwKVswXS5mb3JtYXQpWzBdOztcbiAgICAgICAgdGhpcy5fdXBkYXRlSW5wdXREYXRlRm9ybWF0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUlucHV0RGF0ZUZvcm1hdHMoKTogdm9pZCB7XG5cbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gdGhpcy5fem9uZS5vblN0YWJsZVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgLy8gIEhhbmRsZSBpbnB1dCBkYXRlIGZvcm1hdHNcbiAgICAgICAgKHRoaXMuZGF0ZVBpY2tlci5kYXRlcGlja2VySW5wdXQgYXMgYW55KS5fZGF0ZUZvcm1hdHMgPSB0aGlzLl9mb3JtYXRzLm1vbWVudERhdGVGb3JtYXRzO1xuXG4gICAgICAgIC8vICBSZWZyZXNoIHRoZSBpbnB1dCB2YWx1ZSB0byB1c2UgdGhlIG5ldyBmb3JtYXRcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5mb3JtLnZhbHVlO1xuICAgICAgICB0aGlzLmZvcm1Db250cm9sLmZvcm0ucGF0Y2hWYWx1ZShjdXJyZW50VmFsdWUpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=