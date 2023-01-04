import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxGaewynnDatePickerModule } from 'NgxGaewynnDatePicker';

import { Page1Component } from './page1.component';

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

        NgxGaewynnDatePickerModule
    ]
})
export class Page1Module { }