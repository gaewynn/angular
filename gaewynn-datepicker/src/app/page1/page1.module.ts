import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GWDatePickerModule, GW_DATE_PICKER_CONFIGURATION } from 'GWDatePicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GWDatePickersConfiguration } from '../configuration';

export const routes: Routes = [{
    path: '',
    component: Page1Component
}];

@NgModule({
    declarations: [
        Page1Component
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,

        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,

        GWDatePickerModule
    ]
})
export class Page1Module { }