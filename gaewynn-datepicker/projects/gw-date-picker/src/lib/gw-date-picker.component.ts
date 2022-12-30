import { Component, Inject, ContentChild, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormControlDirective, FormGroupDirective } from '@angular/forms';

import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Subject, Subscription, take } from 'rxjs';

import { IGWDatePickerOptions } from './moment-date-format';

@Component({
  selector: 'gaewynn-datepicker',
  templateUrl: './gw-date-picker.component.html',
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class GWDatePickerComponent implements OnInit, OnDestroy {
  
  @ContentChild(MatDatepicker) 
  public datePicker!: MatDatepicker<Date>;

  @ContentChild(FormControlDirective)
  public formControl!: FormControlDirective;

  @Input()
  public options!: Subject<IGWDatePickerOptions>;

  @Input()
  public pickerName!: string;

  private _dateFormatSubscription!: Subscription;
  private _zoneSubscription!: Subscription;

  constructor(
    private readonly _zone: NgZone,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private readonly _dateAdapter: DateAdapter<any>) { }

  public ngOnInit(): void {

    this._dateFormatSubscription = this.options.subscribe((newOptions: IGWDatePickerOptions) => {
      this._updatePicker(newOptions);
    });
  }

  public ngOnDestroy(): void {

      this._dateFormatSubscription.unsubscribe();
      this._zoneSubscription.unsubscribe();
  }

  private _updatePicker(options: IGWDatePickerOptions): void {
    
    this._zoneSubscription = this._zone.onStable
      .pipe(take(1))
      .subscribe(() => {
        
        this._updateFormat(options);
        const currentValue = this.formControl.form.value;
        this.formControl.form.patchValue(currentValue);
      });
  }

  private _updateFormat(options: IGWDatePickerOptions): void {

    this._locale = options.locale;
    this._dateAdapter.setLocale(options.locale);
    (this.datePicker.datepickerInput as any)._dateFormats = options.momentDateFormat;
  }
}

