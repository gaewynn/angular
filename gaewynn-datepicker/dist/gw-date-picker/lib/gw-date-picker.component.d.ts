import { NgZone, OnDestroy, OnInit } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { IGWDatePickerOptions } from './moment-date-format';
import * as i0 from "@angular/core";
export declare class GWDatePickerComponent implements OnInit, OnDestroy {
    private readonly _zone;
    private _locale;
    private readonly _dateAdapter;
    datePicker: MatDatepicker<Date>;
    formControl: FormControlDirective;
    options: Subject<IGWDatePickerOptions>;
    pickerName: string;
    private _dateFormatSubscription;
    private _zoneSubscription;
    constructor(_zone: NgZone, _locale: string, _dateAdapter: DateAdapter<any>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _updatePicker;
    private _updateFormat;
    static ɵfac: i0.ɵɵFactoryDeclaration<GWDatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GWDatePickerComponent, "gaewynn-datepicker", never, { "options": "options"; "pickerName": "pickerName"; }, {}, ["datePicker", "formControl"], ["*"], false, never>;
}
