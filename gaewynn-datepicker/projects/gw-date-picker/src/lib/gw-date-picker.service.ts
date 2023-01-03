import { Inject, Injectable, InjectionToken } from '@angular/core';

import { Subject } from 'rxjs/internal/Subject';

export const GW_DATE_PICKER_CONFIGURATION = new InjectionToken<GWDatePickerConfiguration>(
  'GW_DATE_PICKER_CONFIGURATION',
  undefined
);

export interface IGWDatePickerFormats {
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

export class GWDatePickerConfiguration {

  constructor(
    public initials: { group: string, locale: string }[],
    public formats: IGWDatePickerFormats[]) { }
}

@Injectable({
  providedIn: 'root'
})
export class GWDatePickerService {

  public configuration$: Subject<GWDatePickerConfiguration> = new Subject<GWDatePickerConfiguration>();

  private _datePickerConfiguration!: GWDatePickerConfiguration;

  constructor(@Inject(GW_DATE_PICKER_CONFIGURATION) private _configuration: GWDatePickerConfiguration) {
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
