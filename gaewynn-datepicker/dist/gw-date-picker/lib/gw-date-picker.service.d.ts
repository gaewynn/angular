import { Subject } from 'rxjs/internal/Subject';
import { GWDatePickerConfiguration } from './gw-date-picker.module';
import * as i0 from "@angular/core";
export declare class GWDatePickerService {
    private _configuration;
    configuration$: Subject<GWDatePickerConfiguration>;
    private _datePickerConfiguration;
    constructor(_configuration: GWDatePickerConfiguration);
    init(): void;
    updateIndividualsOptions(group: string, locale: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GWDatePickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GWDatePickerService>;
}
