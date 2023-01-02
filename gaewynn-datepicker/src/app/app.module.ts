import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { GWDatePickerModule, GW_DATE_PICKER_CONFIGURATION } from 'GWDatePicker';

import { AppComponent } from './app.component';
import { GWDatePickersConfiguration } from './configuration';
import { MockService } from './mock.service';

export const routes: Routes = [{
  path: 'page1',
  loadChildren: () => import('./page1/page1.module').then(m => m.Page1Module)
}, {
  path: 'page2',
  loadChildren: () => import('./page2/page2.module').then(m => m.Page2Module)
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,

    GWDatePickerModule
  ],
  providers: [
    MockService,
    { provide: GW_DATE_PICKER_CONFIGURATION, useValue: GWDatePickersConfiguration }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }