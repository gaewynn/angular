import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgxGaewynnDatePickerComponent } from './ngx-gaewynn-datepicker.component';

@NgModule({
  declarations: [
    NgxGaewynnDatePickerComponent
  ],
  imports: [
    ReactiveFormsModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    NgxGaewynnDatePickerComponent
  ],
  providers: [
    MomentDateAdapter,

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class NgxGaewynnDatePickerModule { }
