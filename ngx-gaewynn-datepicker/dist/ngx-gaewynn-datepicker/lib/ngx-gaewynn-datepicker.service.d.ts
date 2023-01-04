import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import * as i0 from "@angular/core";
export declare const NGX_GAEWYNN_DATEPICKER_CONFIGURATION: InjectionToken<NgxGaewynnDatePickerConfiguration>;
export interface INgxGaewynnDatePickerFormats {
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
export declare class NgxGaewynnDatePickerConfiguration {
    initials: {
        group: string;
        locale: string;
    }[];
    formats: INgxGaewynnDatePickerFormats[];
    constructor(initials: {
        group: string;
        locale: string;
    }[], formats: INgxGaewynnDatePickerFormats[]);
}
export declare class NgxGaewynnDatePickerService {
    private _configuration;
    configuration$: Subject<NgxGaewynnDatePickerConfiguration>;
    private _datePickerConfiguration;
    constructor(_configuration: NgxGaewynnDatePickerConfiguration);
    init(): void;
    updateFormats(group: string, locale: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGaewynnDatePickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxGaewynnDatePickerService>;
}
