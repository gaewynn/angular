import { InjectionToken, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

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
  ],
  providers: [
    MomentDateAdapter,

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class GWDatePickerModule { }
