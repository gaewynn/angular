import { NgZone, OnDestroy, EnvironmentInjector, AfterViewInit } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { NgxGaewynnDatePickerService } from '../ngx-gaewynn-datepicker.service';
import * as i0 from "@angular/core";
export declare class NgxGaewynnDatePickerComponent implements AfterViewInit, OnDestroy {
    private readonly _envInjector;
    private readonly _zone;
    private _locale;
    private readonly _dateAdapter;
    private readonly _ngxGaewynnDatePickerService;
    datePicker: MatDatepicker<Date>;
    formControl: FormControlDirective;
    group: string;
    private _calendarSubscription;
    private _configurationSubscription;
    private _zoneSubscription;
    private _configuration;
    private _formats;
    constructor(_envInjector: EnvironmentInjector, _zone: NgZone, _locale: string, _dateAdapter: DateAdapter<any>, _ngxGaewynnDatePickerService: NgxGaewynnDatePickerService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _apply;
    private _updateInputDateFormats;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGaewynnDatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxGaewynnDatePickerComponent, "ngx-gaewynn-datepicker", never, { "group": "group"; }, {}, ["datePicker", "formControl"], ["*"], false, never>;
}
