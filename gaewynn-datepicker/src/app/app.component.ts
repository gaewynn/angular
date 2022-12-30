import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';

import { IGWDatePickerOptions } from 'dist/gw-date-picker/lib/moment-date-format';

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

  private _currentLocale = "fr";
  
  constructor(private readonly _formBuilder: FormBuilder) {
  
    const options = this._getGWDatepickerOptions(this._currentLocale);
    this.hint = options.momentDateFormat.display.dateInput;
    this.hint2 = options.momentDateFormat.display.dateInput;
  }
  
  public ngAfterViewInit(): void {

    this.gwDatePickerOptions.next(this._getGWDatepickerOptions(this._currentLocale));
    this.gwDatePickerOptions2.next(this._getGWDatepickerOptions(this._currentLocale));
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

  public updateGWDatePickerDateFormat(): void {

    this._currentLocale = this._currentLocale === "fr" ? "en" : "fr";

    const options = this._getGWDatepickerOptions(this._currentLocale);
    this.hint = options.momentDateFormat.display.dateInput;
    this.gwDatePickerOptions.next(options);
  }

  public updateGWDatePickerDateFormat2(): void {

    this._currentLocale = this._currentLocale === "fr" ? "en" : "fr";

    const options = this._getGWDatepickerOptions(this._currentLocale);
    this.hint2 = options.momentDateFormat.display.dateInput;
    this.gwDatePickerOptions2.next(options);
  }

  private _getGWDatepickerOptions(language: string): IGWDatePickerOptions {

    return {
      locale: language,
      momentDateFormat: {
        parse: {
          dateInput: language === "en" ? "YYYY-MM-DD" : "DD.MM.YYYY",
        },
        display: {
          dateInput: language === "en" ? "YYYY-MM-DD" : "DD.MM.YYYY",
          monthYearLabel: language === "en" ? "MMMM YYYY" : "MMMM YYYY",
          dateA11yLabel: language === "en" ? "YYYY-MM-DD" : "DD.MM.YYYY",
          monthYearA11yLabel: language === "en" ? "MMMM YYYY" : "MMMM YYYY",
        }
      }
    };
  }
}
