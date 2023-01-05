import { Inject, Injectable, InjectionToken } from '@angular/core';

import { Subject } from 'rxjs/internal/Subject';

/**
 * InjectionToken for gaewynn-datepicker that can be used to configure the format used by each datepicker.
 * @see {@link INgxGaewynnDatePickerConfiguration}
 */
export const NGX_GAEWYNN_DATEPICKER_CONFIGURATION = new InjectionToken<INgxGaewynnDatePickerConfiguration>(
  'NGX_GAEWYNN_DATEPICKER_CONFIGURATION',
  undefined
);

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
      parse: { dateInput: string }, 
      display: { 
          dateInput: string;
          monthYearLabel: string;
          dateA11yLabel: string;
          monthYearA11yLabel: string;
      }
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
    format: string, 
    /**
     * The name of the group of datepickers on which apply the format
     */
    group: string 
  }[];
  /**
   * The list of formats provided by the application
   */
  formats: INgxGaewynnDatePickerFormats[];
}

@Injectable({
  providedIn: 'root'
})
export class NgxGaewynnDatePickerService {

  /**
   * Dispatches the new configuration when a format update is requested using @see {@link updateFormat}
   * @internal
   */
  public configuration$: Subject<INgxGaewynnDatePickerConfiguration> = new Subject<INgxGaewynnDatePickerConfiguration>();

  private _datePickerConfiguration!: INgxGaewynnDatePickerConfiguration;

  /**
   * @internal
   */
  constructor(@Inject(NGX_GAEWYNN_DATEPICKER_CONFIGURATION) private _configuration: INgxGaewynnDatePickerConfiguration) {
    this._datePickerConfiguration = JSON.parse(JSON.stringify(_configuration));
  }

  /**
   * Initializes all datepickers with the configuration provided in {@link NGX_GAEWYNN_DATEPICKER_CONFIGURATION}
   * @remarks this function should be called in each component using <ngx-gaewynn-datepicker> or <mgx-gaewynn-date-range-picker> during ngOnInit
   * @public
   */
  public init(): void {
    this.configuration$.next(this._datePickerConfiguration);
  }

  /**
   * Updates the given group of datepickers to the specified format (@see {@link INgxGaewynnDatePickerConfiguration})
   * 
   * @param format Date formats to appliy
   * @param group The name of a group of datepickers on which apply the specified format
   * @public
   */
  public updateFormat(format: string, group: string): void {

    for (let index = 0; index < this._datePickerConfiguration.initials.length; index++) {
      
      const element = this._datePickerConfiguration.initials[index];
      if (element.group === group)
        element.format = format;
    }

    this.init();
  }
}
