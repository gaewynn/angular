import { Inject, Injectable, InjectionToken } from '@angular/core';

import { Subject } from 'rxjs/internal/Subject';

export const NGX_GAEWYNN_DATEPICKER_CONFIGURATION = new InjectionToken<NgxGaewynnDatePickerConfiguration>(
  'NGX_GAEWYNN_DATEPICKER_CONFIGURATION',
  undefined
);

export interface INgxGaewynnDatePickerFormats {
  locale: string;
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

export class NgxGaewynnDatePickerConfiguration {

  constructor(
    public initials: { group: string, locale: string }[],
    public formats: INgxGaewynnDatePickerFormats[]) { }
}

@Injectable({
  providedIn: 'root'
})
export class NgxGaewynnDatePickerService {

  public configuration$: Subject<NgxGaewynnDatePickerConfiguration> = new Subject<NgxGaewynnDatePickerConfiguration>();

  private _datePickerConfiguration!: NgxGaewynnDatePickerConfiguration;

  constructor(@Inject(NGX_GAEWYNN_DATEPICKER_CONFIGURATION) private _configuration: NgxGaewynnDatePickerConfiguration) {
    this._datePickerConfiguration = JSON.parse(JSON.stringify(_configuration));
  }

  public init(): void {
    this.configuration$.next(this._datePickerConfiguration);
  }

  public updateFormats(group: string, locale: string): void {

    for (let index = 0; index < this._datePickerConfiguration.initials.length; index++) {
      
      const element = this._datePickerConfiguration.initials[index];
      if (element.group === group)
        element.locale = locale;
    }

    this.init();
  }
}
