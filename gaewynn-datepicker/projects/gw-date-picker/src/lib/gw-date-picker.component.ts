import { Component, Inject, ContentChild, Input, NgZone, OnDestroy, OnInit, EnvironmentInjector, AfterViewInit } from '@angular/core';
import { FormControlDirective } from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Subject, Subscription, take } from 'rxjs';

import { IGWDatePickerOptions } from './moment-date-formats';

@Component({
  selector: 'gaewynn-datepicker',
  templateUrl: './gw-date-picker.component.html'
})
export class GWDatePickerComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ContentChild(MatDatepicker) 
  public datePicker!: MatDatepicker<Date>;

  @ContentChild(FormControlDirective)
  public formControl!: FormControlDirective;

  @Input()
  public options!: Subject<IGWDatePickerOptions>;

  private _calendarSubscription!: Subscription;
  private _dateFormatsSubscription!: Subscription;
  private _zoneSubscription!: Subscription;
  private _options!: IGWDatePickerOptions;

  constructor(
    private readonly _envInjector: EnvironmentInjector,
    private readonly _zone: NgZone,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private readonly _dateAdapter: DateAdapter<any>) { }
  
  public ngOnInit(): void {

    this._dateFormatsSubscription = this.options.subscribe((newOptions: IGWDatePickerOptions) => {

      this._options = newOptions;
      this._updateInputDateFormats();
    });
  }

  public ngAfterViewInit(): void {
    
    //  Handle calendar formats when it opened (allows to preserve independance between date pickers)
    this._calendarSubscription = this.datePicker.openedStream.subscribe(() => {

      this._locale = this._options.locale;
      this._dateAdapter.setLocale(this._options.locale);

      var records = (this._envInjector as any).records as Map<any, any>;
      records.get(MAT_DATE_FORMATS).value.display.dateInput = this._options.momentDateFormats.display.dateInput;
      records.get(MAT_DATE_FORMATS).value.display.dateA11yLabel = this._options.momentDateFormats.display.dateA11yLabel;
      records.get(MAT_DATE_FORMATS).value.display.monthYearLabel = this._options.momentDateFormats.display.monthYearLabel;
      records.get(MAT_DATE_FORMATS).value.display.monthYearA11yLabel = this._options.momentDateFormats.display.monthYearA11yLabel;
      records.get(MAT_DATE_FORMATS).value.parse.dateInput = this._options.momentDateFormats.parse.dateInput;
    });
  }

  public ngOnDestroy(): void {

    this._calendarSubscription.unsubscribe();
    this._dateFormatsSubscription.unsubscribe();
    this._zoneSubscription.unsubscribe();
  }

  private _updateInputDateFormats(): void {
    
    this._zoneSubscription = this._zone.onStable
      .pipe(take(1))
      .subscribe(() => {
        
        //  Handle input date formats
        (this.datePicker.datepickerInput as any)._dateFormats = this._options.momentDateFormats;

        //  Refresh the input value to use the new format
        const currentValue = this.formControl.form.value;
        this.formControl.form.patchValue(currentValue);
      });
  }
}
