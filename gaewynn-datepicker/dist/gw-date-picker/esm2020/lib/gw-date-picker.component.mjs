import { Component, Inject, ContentChild, Input } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
export class GWDatePickerComponent {
    constructor(_envInjector, _zone, _locale, _dateAdapter) {
        this._envInjector = _envInjector;
        this._zone = _zone;
        this._locale = _locale;
        this._dateAdapter = _dateAdapter;
    }
    ngOnInit() {
        this._dateFormatsSubscription = this.options.subscribe((newOptions) => {
            this._options = newOptions;
            this._updateInputDateFormats();
        });
    }
    ngAfterViewInit() {
        //  Handle calendar formats when it opened (allows to preserve independance between date pickers)
        this._calendarSubscription = this.datePicker.openedStream.subscribe(() => {
            this._locale = this._options.locale;
            this._dateAdapter.setLocale(this._options.locale);
            var records = this._envInjector.records;
            records.get(MAT_DATE_FORMATS).value.display.dateInput = this._options.momentDateFormats.display.dateInput;
            records.get(MAT_DATE_FORMATS).value.display.dateA11yLabel = this._options.momentDateFormats.display.dateA11yLabel;
            records.get(MAT_DATE_FORMATS).value.display.monthYearLabel = this._options.momentDateFormats.display.monthYearLabel;
            records.get(MAT_DATE_FORMATS).value.display.monthYearA11yLabel = this._options.momentDateFormats.display.monthYearA11yLabel;
            records.get(MAT_DATE_FORMATS).value.parse.dateInput = this._options.momentDateFormats.parse.dateInput;
        });
    }
    ngOnDestroy() {
        this._calendarSubscription.unsubscribe();
        this._dateFormatsSubscription.unsubscribe();
        this._zoneSubscription.unsubscribe();
    }
    _updateInputDateFormats() {
        this._zoneSubscription = this._zone.onStable
            .pipe(take(1))
            .subscribe(() => {
            //  Handle input date formats
            this.datePicker.datepickerInput._dateFormats = this._options.momentDateFormats;
            //  Refresh the input value to use the new format
            const currentValue = this.formControl.form.value;
            this.formControl.form.patchValue(currentValue);
        });
    }
}
GWDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerComponent, deps: [{ token: i0.EnvironmentInjector }, { token: i0.NgZone }, { token: MAT_DATE_LOCALE }, { token: i1.DateAdapter }], target: i0.ɵɵFactoryTarget.Component });
GWDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: GWDatePickerComponent, selector: "gaewynn-datepicker", inputs: { options: "options" }, queries: [{ propertyName: "datePicker", first: true, predicate: MatDatepicker, descendants: true }, { propertyName: "formControl", first: true, predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gaewynn-datepicker', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.EnvironmentInjector }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }, { type: i1.DateAdapter }]; }, propDecorators: { datePicker: [{
                type: ContentChild,
                args: [MatDatepicker]
            }], formControl: [{
                type: ContentChild,
                args: [FormControlDirective]
            }], options: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3ctZGF0ZS1waWNrZXIvc3JjL2xpYi9ndy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ndy1kYXRlLXBpY2tlci9zcmMvbGliL2d3LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWlFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBZSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUF5QixJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVFuRCxNQUFNLE9BQU8scUJBQXFCO0lBZ0JoQyxZQUNtQixZQUFpQyxFQUNqQyxLQUFhLEVBQ0csT0FBZSxFQUMvQixZQUE4QjtRQUg5QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWtCO0lBQUksQ0FBQztJQUUvQyxRQUFRO1FBRWIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBZ0MsRUFBRSxFQUFFO1lBRTFGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQzNCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGVBQWU7UUFFcEIsaUdBQWlHO1FBQ2pHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBRXZFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVsRCxJQUFJLE9BQU8sR0FBSSxJQUFJLENBQUMsWUFBb0IsQ0FBQyxPQUF3QixDQUFDO1lBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDMUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUNsSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQ3BILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQzVILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDeEcsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sV0FBVztRQUVoQixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU8sdUJBQXVCO1FBRTdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFFZCw2QkFBNkI7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUF1QixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBRXhGLGlEQUFpRDtZQUNqRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7a0hBcEVVLHFCQUFxQiwyRUFtQnRCLGVBQWU7c0dBbkJkLHFCQUFxQixrSUFFbEIsYUFBYSw4RUFHYixvQkFBb0IsZ0RDbEJwQywyQkFBeUI7MkZEYVoscUJBQXFCO2tCQUpqQyxTQUFTOytCQUNFLG9CQUFvQjs7MEJBc0IzQixNQUFNOzJCQUFDLGVBQWU7c0VBaEJsQixVQUFVO3NCQURoQixZQUFZO3VCQUFDLGFBQWE7Z0JBSXBCLFdBQVc7c0JBRGpCLFlBQVk7dUJBQUMsb0JBQW9CO2dCQUkzQixPQUFPO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgQ29udGVudENoaWxkLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgRW52aXJvbm1lbnRJbmplY3RvciwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgdGFrZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJR1dEYXRlUGlja2VyT3B0aW9ucyB9IGZyb20gJy4vbW9tZW50LWRhdGUtZm9ybWF0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhZXd5bm4tZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ndy1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgR1dEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBcbiAgQENvbnRlbnRDaGlsZChNYXREYXRlcGlja2VyKSBcbiAgcHVibGljIGRhdGVQaWNrZXIhOiBNYXREYXRlcGlja2VyPERhdGU+O1xuXG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xEaXJlY3RpdmUpXG4gIHB1YmxpYyBmb3JtQ29udHJvbCE6IEZvcm1Db250cm9sRGlyZWN0aXZlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvcHRpb25zITogU3ViamVjdDxJR1dEYXRlUGlja2VyT3B0aW9ucz47XG5cbiAgcHJpdmF0ZSBfY2FsZW5kYXJTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2RhdGVGb3JtYXRzU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF96b25lU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9vcHRpb25zITogSUdXRGF0ZVBpY2tlck9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZW52SW5qZWN0b3I6IEVudmlyb25tZW50SW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfem9uZTogTmdab25lLFxuICAgIEBJbmplY3QoTUFUX0RBVEVfTE9DQUxFKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55PikgeyB9XG4gIFxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLl9kYXRlRm9ybWF0c1N1YnNjcmlwdGlvbiA9IHRoaXMub3B0aW9ucy5zdWJzY3JpYmUoKG5ld09wdGlvbnM6IElHV0RhdGVQaWNrZXJPcHRpb25zKSA9PiB7XG5cbiAgICAgIHRoaXMuX29wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgICAgdGhpcy5fdXBkYXRlSW5wdXREYXRlRm9ybWF0cygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICAvLyAgSGFuZGxlIGNhbGVuZGFyIGZvcm1hdHMgd2hlbiBpdCBvcGVuZWQgKGFsbG93cyB0byBwcmVzZXJ2ZSBpbmRlcGVuZGFuY2UgYmV0d2VlbiBkYXRlIHBpY2tlcnMpXG4gICAgdGhpcy5fY2FsZW5kYXJTdWJzY3JpcHRpb24gPSB0aGlzLmRhdGVQaWNrZXIub3BlbmVkU3RyZWFtLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgIHRoaXMuX2xvY2FsZSA9IHRoaXMuX29wdGlvbnMubG9jYWxlO1xuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0TG9jYWxlKHRoaXMuX29wdGlvbnMubG9jYWxlKTtcblxuICAgICAgdmFyIHJlY29yZHMgPSAodGhpcy5fZW52SW5qZWN0b3IgYXMgYW55KS5yZWNvcmRzIGFzIE1hcDxhbnksIGFueT47XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5LmRhdGVJbnB1dCA9IHRoaXMuX29wdGlvbnMubW9tZW50RGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRlSW5wdXQ7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5LmRhdGVBMTF5TGFiZWwgPSB0aGlzLl9vcHRpb25zLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUExMXlMYWJlbDtcbiAgICAgIHJlY29yZHMuZ2V0KE1BVF9EQVRFX0ZPUk1BVFMpLnZhbHVlLmRpc3BsYXkubW9udGhZZWFyTGFiZWwgPSB0aGlzLl9vcHRpb25zLm1vbWVudERhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyTGFiZWw7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5kaXNwbGF5Lm1vbnRoWWVhckExMXlMYWJlbCA9IHRoaXMuX29wdGlvbnMubW9tZW50RGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJBMTF5TGFiZWw7XG4gICAgICByZWNvcmRzLmdldChNQVRfREFURV9GT1JNQVRTKS52YWx1ZS5wYXJzZS5kYXRlSW5wdXQgPSB0aGlzLl9vcHRpb25zLm1vbWVudERhdGVGb3JtYXRzLnBhcnNlLmRhdGVJbnB1dDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcblxuICAgIHRoaXMuX2NhbGVuZGFyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZGF0ZUZvcm1hdHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVJbnB1dERhdGVGb3JtYXRzKCk6IHZvaWQge1xuICAgIFxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl96b25lLm9uU3RhYmxlXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvLyAgSGFuZGxlIGlucHV0IGRhdGUgZm9ybWF0c1xuICAgICAgICAodGhpcy5kYXRlUGlja2VyLmRhdGVwaWNrZXJJbnB1dCBhcyBhbnkpLl9kYXRlRm9ybWF0cyA9IHRoaXMuX29wdGlvbnMubW9tZW50RGF0ZUZvcm1hdHM7XG5cbiAgICAgICAgLy8gIFJlZnJlc2ggdGhlIGlucHV0IHZhbHVlIHRvIHVzZSB0aGUgbmV3IGZvcm1hdFxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLmZvcm0udmFsdWU7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuZm9ybS5wYXRjaFZhbHVlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==