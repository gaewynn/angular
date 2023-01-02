import { InjectionToken, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { GWDatePickerComponent } from './gw-date-picker.component';

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

@NgModule({
  declarations: [
    GWDatePickerComponent
  ],
  imports: [
    ReactiveFormsModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    GWDatePickerComponent
  ]
})
export class GWDatePickerModule { }
