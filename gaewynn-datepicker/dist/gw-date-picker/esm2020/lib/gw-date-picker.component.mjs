import { Component, Inject, ContentChild, Input } from '@angular/core';
import { ControlContainer, FormControlDirective, FormGroupDirective } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
export class GWDatePickerComponent {
    constructor(_zone, _locale, _dateAdapter) {
        this._zone = _zone;
        this._locale = _locale;
        this._dateAdapter = _dateAdapter;
    }
    ngOnInit() {
        this._dateFormatSubscription = this.options.subscribe((newOptions) => {
            this._updatePicker(newOptions);
        });
    }
    ngOnDestroy() {
        this._dateFormatSubscription.unsubscribe();
        this._zoneSubscription.unsubscribe();
    }
    _updatePicker(options) {
        this._zoneSubscription = this._zone.onStable
            .pipe(take(1))
            .subscribe(() => {
            this._updateFormat(options);
            const currentValue = this.formControl.form.value;
            this.formControl.form.patchValue(currentValue);
        });
    }
    _updateFormat(options) {
        this._locale = options.locale;
        this._dateAdapter.setLocale(options.locale);
        this.datePicker.datepickerInput._dateFormats = options.momentDateFormat;
    }
}
GWDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerComponent, deps: [{ token: i0.NgZone }, { token: MAT_DATE_LOCALE }, { token: i1.DateAdapter }], target: i0.ɵɵFactoryTarget.Component });
GWDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: GWDatePickerComponent, selector: "gaewynn-datepicker", inputs: { options: "options", pickerName: "pickerName" }, queries: [{ propertyName: "datePicker", first: true, predicate: MatDatepicker, descendants: true }, { propertyName: "formControl", first: true, predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<ng-content></ng-content>", viewProviders: [{
            provide: ControlContainer,
            useExisting: FormGroupDirective
        }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gaewynn-datepicker', viewProviders: [{
                            provide: ControlContainer,
                            useExisting: FormGroupDirective
                        }], template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: undefined, decorators: [{
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
            }], pickerName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3ctZGF0ZS1waWNrZXIvc3JjL2xpYi9ndy1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ndy1kYXRlLXBpY2tlci9zcmMvbGliL2d3LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVGLE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUF5QixJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVluRCxNQUFNLE9BQU8scUJBQXFCO0lBaUJoQyxZQUNtQixLQUFhLEVBQ0csT0FBZSxFQUMvQixZQUE4QjtRQUY5QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0csWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFBSSxDQUFDO0lBRS9DLFFBQVE7UUFFYixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFnQyxFQUFFLEVBQUU7WUFDekYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxXQUFXO1FBRWQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU8sYUFBYSxDQUFDLE9BQTZCO1FBRWpELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFFZCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sYUFBYSxDQUFDLE9BQTZCO1FBRWpELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUF1QixDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7SUFDbkYsQ0FBQzs7a0hBcERVLHFCQUFxQix3Q0FtQnRCLGVBQWU7c0dBbkJkLHFCQUFxQiw0SkFFbEIsYUFBYSw4RUFHYixvQkFBb0IsZ0RDdEJwQywyQkFBeUIsaUJEWVIsQ0FBQztZQUNkLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsV0FBVyxFQUFFLGtCQUFrQjtTQUNoQyxDQUFDOzJGQUVTLHFCQUFxQjtrQkFSakMsU0FBUzsrQkFDRSxvQkFBb0IsaUJBRWYsQ0FBQzs0QkFDZCxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixXQUFXLEVBQUUsa0JBQWtCO3lCQUNoQyxDQUFDOzswQkFxQkMsTUFBTTsyQkFBQyxlQUFlO3NFQWhCbEIsVUFBVTtzQkFEaEIsWUFBWTt1QkFBQyxhQUFhO2dCQUlwQixXQUFXO3NCQURqQixZQUFZO3VCQUFDLG9CQUFvQjtnQkFJM0IsT0FBTztzQkFEYixLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgQ29udGVudENoaWxkLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0xPQ0FMRSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCB0YWtlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElHV0RhdGVQaWNrZXJPcHRpb25zIH0gZnJvbSAnLi9tb21lbnQtZGF0ZS1mb3JtYXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWV3eW5uLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3ctZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICB2aWV3UHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gICAgdXNlRXhpc3Rpbmc6IEZvcm1Hcm91cERpcmVjdGl2ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBHV0RhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIFxuICBAQ29udGVudENoaWxkKE1hdERhdGVwaWNrZXIpIFxuICBwdWJsaWMgZGF0ZVBpY2tlciE6IE1hdERhdGVwaWNrZXI8RGF0ZT47XG5cbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbERpcmVjdGl2ZSlcbiAgcHVibGljIGZvcm1Db250cm9sITogRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIG9wdGlvbnMhOiBTdWJqZWN0PElHV0RhdGVQaWNrZXJPcHRpb25zPjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGlja2VyTmFtZSE6IHN0cmluZztcblxuICBwcml2YXRlIF9kYXRlRm9ybWF0U3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF96b25lU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT4pIHsgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuX2RhdGVGb3JtYXRTdWJzY3JpcHRpb24gPSB0aGlzLm9wdGlvbnMuc3Vic2NyaWJlKChuZXdPcHRpb25zOiBJR1dEYXRlUGlja2VyT3B0aW9ucykgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUGlja2VyKG5ld09wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuXG4gICAgICB0aGlzLl9kYXRlRm9ybWF0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQaWNrZXIob3B0aW9uczogSUdXRGF0ZVBpY2tlck9wdGlvbnMpOiB2b2lkIHtcbiAgICBcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gdGhpcy5fem9uZS5vblN0YWJsZVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdXBkYXRlRm9ybWF0KG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLmZvcm0udmFsdWU7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuZm9ybS5wYXRjaFZhbHVlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZvcm1hdChvcHRpb25zOiBJR1dEYXRlUGlja2VyT3B0aW9ucyk6IHZvaWQge1xuXG4gICAgdGhpcy5fbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2V0TG9jYWxlKG9wdGlvbnMubG9jYWxlKTtcbiAgICAodGhpcy5kYXRlUGlja2VyLmRhdGVwaWNrZXJJbnB1dCBhcyBhbnkpLl9kYXRlRm9ybWF0cyA9IG9wdGlvbnMubW9tZW50RGF0ZUZvcm1hdDtcbiAgfVxufVxuXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19