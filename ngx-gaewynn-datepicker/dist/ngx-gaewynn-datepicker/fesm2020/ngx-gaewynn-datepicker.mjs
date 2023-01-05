import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, Component, ContentChild, Input, NgModule, ContentChildren } from '@angular/core';
import { FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/material/core';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { take } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/**
 * InjectionToken for gaewynn-datepicker that can be used to configure the format used by each datepicker.
 * @see {@link INgxGaewynnDatePickerConfiguration}
 */
const NGX_GAEWYNN_DATEPICKER_CONFIGURATION = new InjectionToken('NGX_GAEWYNN_DATEPICKER_CONFIGURATION', undefined);
class NgxGaewynnDatePickerService {
    /**
     * @internal
     */
    constructor(_configuration) {
        this._configuration = _configuration;
        /**
         * Dispatches the new configuration when a format update is requested using @see {@link updateFormat}
         *
         * @internal
         */
        this.configuration$ = new Subject();
        this.initConfiguration(_configuration);
    }
    /**
     * Initializes and replaces the configuration provided by @see {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION}
     *
     * @param configuration The new configuration to apply
     * @remarks Should only be use in replacment of the @see {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION} and during the initialization process of the application
     *
     * @public
     */
    initConfiguration(configuration) {
        this._datePickerConfiguration = JSON.parse(JSON.stringify(configuration));
    }
    /**
     * Initializes all datepickers with the configuration provided in {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION}
     * @remarks this function should be called in each component using <ngx-gaewynn-datepicker> or <mgx-gaewynn-date-range-picker> during ngOnInit
     *
     * @public
     */
    init() {
        this.configuration$.next(this._datePickerConfiguration);
    }
    /**
     * Updates the given group of datepickers to the specified format (@see {@link INgxGaewynnDatePickerConfiguration})
     *
     * @param format Date formats to appliy
     * @param group The name of a group of datepickers on which apply the specified format
     *
     * @public
     */
    updateFormat(format, group) {
        for (let index = 0; index < this._datePickerConfiguration.initials.length; index++) {
            const element = this._datePickerConfiguration.initials[index];
            if (element.group === group)
                element.format = format;
        }
        this.init();
    }
    /**
     * Adds a new format to the available ones
     *
     * @param format The description of the new format
     * @param group The group of datepickers to which the format will be linked
     *
     * @remarks the given format will not be applied instantly to the group. To update the format, call {@link updateFormat}
     * @remarks if a format with the same name already exists, it will be replaced by the new one
     *
     * @public
     */
    addFormat(format, group) {
        if (!this._datePickerConfiguration.initials.some(e => e.group === group))
            this._datePickerConfiguration.initials.push({ format: format.format, group: group });
        const existingFormatIndex = this._datePickerConfiguration.formats.findIndex(e => e.format === format.format);
        if (existingFormatIndex >= 0) {
            this._datePickerConfiguration.formats[existingFormatIndex] = format;
        }
        else {
            this._datePickerConfiguration.formats.push(format);
        }
    }
}
NgxGaewynnDatePickerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerService, deps: [{ token: NGX_GAEWYNN_DATEPICKER_CONFIGURATION }], target: i0.ɵɵFactoryTarget.Injectable });
NgxGaewynnDatePickerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NGX_GAEWYNN_DATEPICKER_CONFIGURATION]
                }] }]; } });

class NgxGaewynnDatePickerComponent {
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
NgxGaewynnDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerComponent, deps: [{ token: i0.EnvironmentInjector }, { token: i0.NgZone }, { token: MAT_DATE_LOCALE }, { token: i1.DateAdapter }, { token: NgxGaewynnDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
NgxGaewynnDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: NgxGaewynnDatePickerComponent, selector: "ngx-gaewynn-datepicker", inputs: { group: "group" }, queries: [{ propertyName: "datePicker", first: true, predicate: MatDatepicker, descendants: true }, { propertyName: "formControl", first: true, predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-gaewynn-datepicker', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.EnvironmentInjector }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }, { type: i1.DateAdapter }, { type: NgxGaewynnDatePickerService }]; }, propDecorators: { datePicker: [{
                type: ContentChild,
                args: [MatDatepicker]
            }], formControl: [{
                type: ContentChild,
                args: [FormControlDirective]
            }], group: [{
                type: Input
            }] } });

class NgxGaewynnDatePickerModule {
}
NgxGaewynnDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxGaewynnDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerModule, declarations: [NgxGaewynnDatePickerComponent], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule], exports: [NgxGaewynnDatePickerComponent] });
NgxGaewynnDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerModule, providers: [
        MomentDateAdapter,
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxGaewynnDatePickerComponent
                    ],
                    imports: [
                        ReactiveFormsModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule
                    ],
                    exports: [
                        NgxGaewynnDatePickerComponent
                    ],
                    providers: [
                        MomentDateAdapter,
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ]
                }]
        }] });

class NgxGaewynnDateRangePickerComponent {
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
NgxGaewynnDateRangePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerComponent, deps: [{ token: i0.EnvironmentInjector }, { token: i0.NgZone }, { token: MAT_DATE_LOCALE }, { token: i1.DateAdapter }, { token: NgxGaewynnDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
NgxGaewynnDateRangePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: NgxGaewynnDateRangePickerComponent, selector: "ngx-gaewynn-date-range-picker", inputs: { group: "group" }, queries: [{ propertyName: "dateRangePicker", first: true, predicate: MatDateRangePicker, descendants: true }, { propertyName: "formControls", predicate: FormControlDirective, descendants: true }], ngImport: i0, template: "<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-gaewynn-date-range-picker', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.EnvironmentInjector }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }, { type: i1.DateAdapter }, { type: NgxGaewynnDatePickerService }]; }, propDecorators: { dateRangePicker: [{
                type: ContentChild,
                args: [MatDateRangePicker]
            }], formControls: [{
                type: ContentChildren,
                args: [FormControlDirective, { descendants: true }]
            }], group: [{
                type: Input
            }] } });

class NgxGaewynnDateRangePickerModule {
}
NgxGaewynnDateRangePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxGaewynnDateRangePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerModule, declarations: [NgxGaewynnDateRangePickerComponent], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule], exports: [NgxGaewynnDateRangePickerComponent] });
NgxGaewynnDateRangePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerModule, providers: [
        MomentDateAdapter,
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxGaewynnDateRangePickerComponent
                    ],
                    imports: [
                        ReactiveFormsModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule
                    ],
                    exports: [
                        NgxGaewynnDateRangePickerComponent
                    ],
                    providers: [
                        MomentDateAdapter,
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-gaewynn-datepicker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NGX_GAEWYNN_DATEPICKER_CONFIGURATION, NgxGaewynnDatePickerComponent, NgxGaewynnDatePickerModule, NgxGaewynnDatePickerService, NgxGaewynnDateRangePickerComponent, NgxGaewynnDateRangePickerModule };
//# sourceMappingURL=ngx-gaewynn-datepicker.mjs.map
