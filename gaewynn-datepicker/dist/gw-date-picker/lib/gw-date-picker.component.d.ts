import { NgZone, OnDestroy, OnInit, EnvironmentInjector, AfterViewInit } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { IGWDatePickerOptions } from './moment-date-formats';
import * as i0 from "@angular/core";
export declare class GWDatePickerComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly _envInjector;
    private readonly _zone;
    private _locale;
    private readonly _dateAdapter;
    datePicker: MatDatepicker<Date>;
    formControl: FormControlDirective;
    options: Subject<IGWDatePickerOptions>;
    private _calendarSubscription;
    private _dateFormatsSubscription;
    private _zoneSubscription;
    private _options;
    constructor(_envInjector: EnvironmentInjector, _zone: NgZone, _locale: string, _dateAdapter: DateAdapter<any>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _updateInputDateFormats;
    static ɵfac: i0.ɵɵFactoryDeclaration<GWDatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GWDatePickerComponent, "gaewynn-datepicker", never, { "options": "options"; }, {}, ["datePicker", "formControl"], ["*"], false, never>;
}
