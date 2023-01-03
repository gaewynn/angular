import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import * as i0 from "@angular/core";
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
export declare class GWDatePickerService {
    private _configuration;
    configuration$: Subject<GWDatePickerConfiguration>;
    private _datePickerConfiguration;
    constructor(_configuration: GWDatePickerConfiguration);
    init(): void;
    updateFormats(group: string, locale: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GWDatePickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GWDatePickerService>;
}
