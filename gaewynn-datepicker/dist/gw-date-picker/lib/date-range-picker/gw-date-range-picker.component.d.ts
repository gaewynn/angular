import { NgZone, OnDestroy, EnvironmentInjector, AfterViewInit, QueryList } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { GWDatePickerService } from '../gw-date-picker.service';
import * as i0 from "@angular/core";
export declare class GWDateRangePickerComponent implements AfterViewInit, OnDestroy {
    private readonly _envInjector;
    private readonly _zone;
    private _locale;
    private readonly _dateAdapter;
    private readonly _gwDatePickerService;
    dateRangePicker: MatDateRangePicker<Date>;
    formControls: QueryList<FormControlDirective>;
    group: string;
    private _calendarSubscription;
    private _configurationSubscription;
    private _zoneSubscription;
    private _configuration;
    private _formats;
    constructor(_envInjector: EnvironmentInjector, _zone: NgZone, _locale: string, _dateAdapter: DateAdapter<any>, _gwDatePickerService: GWDatePickerService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _apply;
    private _updateInputDateFormats;
    static ɵfac: i0.ɵɵFactoryDeclaration<GWDateRangePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GWDateRangePickerComponent, "gaewynn-date-range-picker", never, { "group": "group"; }, {}, ["dateRangePicker", "formControls"], ["*"], false, never>;
}
