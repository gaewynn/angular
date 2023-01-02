import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { GWDatePickerService, IGWDatePickerFormats } from 'GWDatePicker';
import { GWDatePickersConfiguration } from './configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public get customDateFormControl(): FormControl { return this.gwDatePickerForm.controls['customDate'] as FormControl; }
  public get customDate1FormControl(): FormControl { return this.gwDatePickerForm.controls['customDate1'] as FormControl; }
  public get customDate2FormControl(): FormControl { return this.gwDatePickerForm.controls['customDate2'] as FormControl; }

  public gwDatePickerForm: FormGroup = this._formBuilder.group({ customDate: [''], customDate1: [''], customDate2: [''] });

  public hint = '';
  public hint2 = '';

  private _currentLocale1 = "fr";
  private _currentLocale2 = "en";
  
  constructor(
    private readonly _formBuilder: FormBuilder,
    private _gwDatePickerService: GWDatePickerService) {
  
    const options1 = this._getGWDatepickerFormats(this._currentLocale1);
    const options2 = this._getGWDatepickerFormats(this._currentLocale2);

    this.hint = options1.momentDateFormats.display.dateInput;
    this.hint2 = options2.momentDateFormats.display.dateInput;
  }

  public ngOnInit(): void {
    this._gwDatePickerService.init();
  }
  
  public updateGWDatePickerDateFormats(): void {

    this._currentLocale1 = this._currentLocale1 === "fr" ? "en" : "fr";

    const options = this._getGWDatepickerFormats(this._currentLocale1);
    this.hint = options.momentDateFormats.display.dateInput;
    
    this._gwDatePickerService.updateIndividualsOptions("group1", this._currentLocale1);
  }

  public updateGWDatePickerDateFormats2(): void {

    this._currentLocale2 = this._currentLocale2 === "fr" ? "en" : "fr";

    const options = this._getGWDatepickerFormats(this._currentLocale2);
    this.hint2 = options.momentDateFormats.display.dateInput;

    this._gwDatePickerService.updateIndividualsOptions("group2", this._currentLocale2);
  }

  public getCurrentLanguage1(): string {
    return this._currentLocale1;
  }

  public getCurrentLanguage2(): string {
    return this._currentLocale2;
  }

  public getSwitchToLabel1(): string {
    return this._currentLocale1 === "fr" ? "en" : "fr";
  }

  public getSwitchToLabel2(): string {
    return this._currentLocale2 === "fr" ? "en" : "fr";
  }

  private _getGWDatepickerFormats(locale: string): IGWDatePickerFormats {
    return GWDatePickersConfiguration.formats.filter(e => e.locale === locale)[0];
}
}
