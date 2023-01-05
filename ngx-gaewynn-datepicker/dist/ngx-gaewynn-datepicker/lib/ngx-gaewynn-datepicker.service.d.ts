import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import * as i0 from "@angular/core";
/**
 * InjectionToken for gaewynn-datepicker that can be used to configure the format used by each datepicker.
 * @see {@link INgxGaewynnDatePickerConfiguration}
 */
export declare const NGX_GAEWYNN_DATEPICKER_CONFIGURATION: InjectionToken<INgxGaewynnDatePickerConfiguration>;
/**
 * Description of a format that will be applied to a datepicker
 */
export interface INgxGaewynnDatePickerFormats {
    /**
     * A unique name of a format. This name will be used to identfy a format
     */
    format: string;
    /**
     * The locale to use in the current format definition.
     * Used when opening the calendar popup to display the labels in the given locale
     */
    locale: string;
    /**
     * The date formats to apply on the datepicker
     */
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
/**
 * Description of the whole configuration used by the gaewynn-datepicker component
 */
export interface INgxGaewynnDatePickerConfiguration {
    /**
     * The initials formats to apply to the datepickers when they render the first time
     */
    initials: {
        /**
         * A unique identifier (@see {@link INgxGaewynnDatePickerFormats}) of a format to apply
         * @remarks each format defined here should have a corresponding structure defined in the "formats" property
         */
        format: string;
        /**
         * The name of the group of datepickers on which apply the format
         */
        group: string;
    }[];
    /**
     * The list of formats provided by the application
     */
    formats: INgxGaewynnDatePickerFormats[];
}
export declare class NgxGaewynnDatePickerService {
    private _configuration;
    /**
     * Dispatches the new configuration when a format update is requested using @see {@link updateFormat}
     *
     * @internal
     */
    configuration$: Subject<INgxGaewynnDatePickerConfiguration>;
    private _datePickerConfiguration;
    /**
     * @internal
     */
    constructor(_configuration: INgxGaewynnDatePickerConfiguration);
    /**
     * Initializes and replaces the configuration provided by @see {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION}
     *
     * @param configuration The new configuration to apply
     * @remarks Should only be use in replacment of the @see {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION} and during the initialization process of the application
     *
     * @public
     */
    initConfiguration(configuration: INgxGaewynnDatePickerConfiguration): void;
    /**
     * Initializes all datepickers with the configuration provided in {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION}
     * @remarks this function should be called in each component using <ngx-gaewynn-datepicker> or <mgx-gaewynn-date-range-picker> during ngOnInit
     *
     * @public
     */
    init(): void;
    /**
     * Updates the given group of datepickers to the specified format (@see {@link INgxGaewynnDatePickerConfiguration})
     *
     * @param format Date formats to appliy
     * @param group The name of a group of datepickers on which apply the specified format
     *
     * @public
     */
    updateFormat(format: string, group: string): void;
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
    addFormat(format: INgxGaewynnDatePickerFormats, group: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGaewynnDatePickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxGaewynnDatePickerService>;
}
