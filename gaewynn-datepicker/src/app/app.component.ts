import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';

import { IGWDatePickerOptions } from 'dist/gw-date-picker/lib/moment-date-formats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  public gwDatePickerForm: FormGroup = this._formBuilder.group({ customDate: [''], customDate1: [''], customDate2: [''] });

  public gwDatePickerOptions: Subject<IGWDatePickerOptions> = new Subject<IGWDatePickerOptions>();
  public gwDatePickerOptions2: Subject<IGWDatePickerOptions> = new Subject<IGWDatePickerOptions>();

  public hint = '';
  public hint2 = '';

  private _currentLocale1 = "fr";
  private _currentLocale2 = "en";
  
  constructor(private readonly _formBuilder: FormBuilder) {
  
    const options1 = this._getGWDatepickerOptions(this._currentLocale1);
    const options2 = this._getGWDatepickerOptions(this._currentLocale2);

    this.hint = options1.momentDateFormats.display.dateInput;
    this.hint2 = options2.momentDateFormats.display.dateInput;
  }
  
  public ngAfterViewInit(): void {

    this.gwDatePickerOptions.next(this._getGWDatepickerOptions(this._currentLocale1));
    this.gwDatePickerOptions2.next(this._getGWDatepickerOptions(this._currentLocale2));
  }
  
  public getCustomDateFormControl(): FormControl {
    return this.gwDatePickerForm.controls['customDate'] as FormControl;
  }

  public getCustomDate1FormControl(): FormControl {
    return this.gwDatePickerForm.controls['customDate1'] as FormControl;
  }

  public getCustomDate2FormControl(): FormControl {
    return this.gwDatePickerForm.controls['customDate2'] as FormControl;
  }

  public updateGWDatePickerDateFormats(): void {

    this._currentLocale1 = this._currentLocale1 === "fr" ? "en" : "fr";

    const options = this._getGWDatepickerOptions(this._currentLocale1);
    this.hint = options.momentDateFormats.display.dateInput;
    this.gwDatePickerOptions.next(options);
  }

  public updateGWDatePickerDateFormats2(): void {

    this._currentLocale2 = this._currentLocale2 === "fr" ? "en" : "fr";

    const options = this._getGWDatepickerOptions(this._currentLocale2);
    this.hint2 = options.momentDateFormats.display.dateInput;
    this.gwDatePickerOptions2.next(options);
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

  private _getGWDatepickerOptions(language: string): IGWDatePickerOptions {

    return {
      locale: language,
      momentDateFormats: {
        parse: {
          dateInput: language === "en" ? "YYYY-MM-DD" : "DD.MM.YYYY",
        },
        display: {
          dateInput: language === "en" ? "YYYY-MM-DD" : "DD.MM.YYYY",
          monthYearLabel: language === "en" ? "MMMM YY" : "MMM YYYY",
          dateA11yLabel: language === "en" ? "YYYY-MM-DD" : "DD.MM.YYYY",
          monthYearA11yLabel: language === "en" ? "MMMM YY" : "MMM YYYY",
        }
      }
    };
  }
}
