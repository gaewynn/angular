import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { GWDatePickerComponent } from './gw-date-picker.component';

@NgModule({
  declarations: [
    GWDatePickerComponent
  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    GWDatePickerComponent
  ]
})
export class GWDatePickerModule { }
