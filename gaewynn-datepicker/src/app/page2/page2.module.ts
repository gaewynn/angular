import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page2Component } from './page2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GWDatePickerModule } from 'GWDatePicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

export const routes: Routes = [{
    path: '',
    component: Page2Component
}];

@NgModule({
    declarations: [
        Page2Component
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
export class Page2Module { }