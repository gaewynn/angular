import { Inject, Injectable } from '@angular/core';

import { Subject } from 'rxjs/internal/Subject';

import { GWDatePickerConfiguration, GW_DATE_PICKER_CONFIGURATION } from './gw-date-picker.module';

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

  public updateIndividualsOptions(group: string, locale: string): void {

    for (let index = 0; index < this._datePickerConfiguration.initials.length; index++) {
      
      const element = this._datePickerConfiguration.initials[index];
      if (element.group === group)
        element.locale = locale;
    }

    this.init();
  }
}
