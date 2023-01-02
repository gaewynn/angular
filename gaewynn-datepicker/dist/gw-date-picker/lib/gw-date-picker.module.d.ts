import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./gw-date-picker.component";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
export declare const GW_DATE_PICKER_CONFIGURATION: InjectionToken<GWDatePickerConfiguration>;
export interface IGWDatePickerFormats {
    locale: string;
    momentDateFormats: {
        parse: {
            dateInput: string;
        };
        display: {
            dateInput: string;
            monthYearLabel: string;
            dateA11yLabel: string;
            monthYearA11yLabel: string;
        };
    };
}
export declare class GWDatePickerConfiguration {
    initials: {
        group: string;
        locale: string;
    }[];
    formats: IGWDatePickerFormats[];
    constructor(initials: {
        group: string;
        locale: string;
    }[], formats: IGWDatePickerFormats[]);
}
export declare class GWDatePickerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<GWDatePickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<GWDatePickerModule, [typeof i1.GWDatePickerComponent], [typeof i2.ReactiveFormsModule, typeof i3.MatDatepickerModule, typeof i4.MatFormFieldModule, typeof i5.MatInputModule], [typeof i1.GWDatePickerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<GWDatePickerModule>;
}
