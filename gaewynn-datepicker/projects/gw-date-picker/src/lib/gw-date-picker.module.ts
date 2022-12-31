import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { GWDatePickerComponent } from './gw-date-picker.component';

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
