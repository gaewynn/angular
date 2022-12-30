import * as i0 from '@angular/core';
import { Injectable, Component, Inject, ContentChild, Input, NgModule } from '@angular/core';
import { FormControlDirective, ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { take } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

class GWDatePickerService {
    constructor() { }
}
GWDatePickerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GWDatePickerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class GWDatePickerComponent {
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

class GWDatePickerModule {
}
GWDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GWDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, declarations: [GWDatePickerComponent], imports: [MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule], exports: [GWDatePickerComponent] });
GWDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, imports: [MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GWDatePickerComponent
                    ],
                    imports: [
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule,
                        ReactiveFormsModule
                    ],
                    exports: [
                        GWDatePickerComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of gaewynn-date-picker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GWDatePickerComponent, GWDatePickerModule, GWDatePickerService };
//# sourceMappingURL=gw-date-picker.mjs.map
//# sourceMappingURL=gw-date-picker.mjs.map
