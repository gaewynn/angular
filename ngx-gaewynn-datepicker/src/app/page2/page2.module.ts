import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxGaewynnDatePickerModule } from 'NgxGaewynnDatePicker';

import { Page2Component } from './page2.component';

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

        NgxGaewynnDatePickerModule
    ]
})
export class Page2Module { }