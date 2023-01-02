import * as i0 from '@angular/core';
import { Component, Inject, ContentChild, Input, InjectionToken, NgModule, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as i1 from '@angular/material/core';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { take } from 'rxjs';

class GWDatePickerComponent {
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
GWDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerComponent, deps: [{ token: i0.EnvironmentInjector }, { token: i0.NgZone }, { token: MAT_DATE_LOCALE }, { token: i1.DateAdapter }, { token: GWDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
GWDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: GWDatePickerComponent, selector: "gaewynn-datepicker", inputs: { group: "group" }, queries: [{ propertyName: "datePicker", first: true, predicate: MatDatepicker, descendants: true }, { propertyName: "formControl", first: true, predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<span>{{ id }}</span>\r\n<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gaewynn-datepicker', template: "<span>{{ id }}</span>\r\n<ng-content></ng-content>" }]
        }], ctorParameters: function () {
        return [{ type: i0.EnvironmentInjector }, { type: i0.NgZone }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DATE_LOCALE]
                    }] }, { type: i1.DateAdapter }, { type: GWDatePickerService }];
    }, propDecorators: { datePicker: [{
                type: ContentChild,
                args: [MatDatepicker]
            }], formControl: [{
                type: ContentChild,
                args: [FormControlDirective]
            }], group: [{
                type: Input
            }] } });

const GW_DATE_PICKER_CONFIGURATION = new InjectionToken('GW_DATE_PICKER_CONFIGURATION', undefined);
class GWDatePickerConfiguration {
    constructor(initials, formats) {
        this.initials = initials;
        this.formats = formats;
    }
}
class GWDatePickerModule {
}
GWDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GWDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, declarations: [GWDatePickerComponent], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule], exports: [GWDatePickerComponent] });
GWDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, providers: [
        MomentDateAdapter,
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GWDatePickerComponent
                    ],
                    imports: [
                        ReactiveFormsModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule
                    ],
                    exports: [
                        GWDatePickerComponent
                    ],
                    providers: [
                        MomentDateAdapter,
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ]
                }]
        }] });

class GWDatePickerService {
    constructor(_configuration) {
        this._configuration = _configuration;
        this.configuration$ = new Subject();
        this._datePickerConfiguration = JSON.parse(JSON.stringify(_configuration));
    }
    init() {
        this.configuration$.next(this._datePickerConfiguration);
    }
    updateIndividualsOptions(group, locale) {
        for (let index = 0; index < this._datePickerConfiguration.initials.length; index++) {
            const element = this._datePickerConfiguration.initials[index];
            if (element.group === group)
                element.locale = locale;
        }
        this.init();
    }
    static getUID() {
        return Date.now().toString();
    }
}
GWDatePickerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerService, deps: [{ token: GW_DATE_PICKER_CONFIGURATION }], target: i0.ɵɵFactoryTarget.Injectable });
GWDatePickerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: GWDatePickerConfiguration, decorators: [{
                        type: Inject,
                        args: [GW_DATE_PICKER_CONFIGURATION]
                    }] }];
    } });

/*
 * Public API Surface of gaewynn-date-picker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GWDatePickerComponent, GWDatePickerConfiguration, GWDatePickerModule, GWDatePickerService, GW_DATE_PICKER_CONFIGURATION };
//# sourceMappingURL=gw-date-picker.mjs.map
