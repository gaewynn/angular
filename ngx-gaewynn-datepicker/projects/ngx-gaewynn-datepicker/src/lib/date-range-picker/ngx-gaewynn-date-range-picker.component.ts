import { Component, Inject, ContentChild, Input, NgZone, OnDestroy, EnvironmentInjector, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { FormControlDirective } from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { Subscription, take } from 'rxjs';

import { NgxGaewynnDatePickerConfiguration, NgxGaewynnDatePickerService, INgxGaewynnDatePickerFormats } from '../ngx-gaewynn-datepicker.service';

@Component({
  selector: 'ngx-gaewynn-date-range-picker',
  templateUrl: './ngx-gaewynn-date-range-picker.component.html'
})
export class NgxGaewynnDateRangePickerComponent implements AfterViewInit, OnDestroy {
  
  @ContentChild(MatDateRangePicker) 
  public dateRangePicker!: MatDateRangePicker<Date>;

  @ContentChildren(FormControlDirective, { descendants: true })
  public formControls!: QueryList<FormControlDirective>;

  @Input()
  public group!: string;

  private _calendarSubscription!: Subscription;
  private _configurationSubscription!: Subscription;
  private _zoneSubscription!: Subscription;
  private _configuration!: NgxGaewynnDatePickerConfiguration;
  private _formats!: INgxGaewynnDatePickerFormats;

  constructor(
    private readonly _envInjector: EnvironmentInjector,
    private readonly _zone: NgZone,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private readonly _dateAdapter: DateAdapter<any>,
    private readonly _ngxGaewynnDatePickerService: NgxGaewynnDatePickerService) { 

    this._configurationSubscription = this._ngxGaewynnDatePickerService.configuration$.subscribe((configuration: NgxGaewynnDatePickerConfiguration) => {

      this._configuration = configuration;

      //  During initialization, the MatDateRangePicker does not exist yet
      if (!this.dateRangePicker)
        return;
      
      this._apply();
    })
  }
  
  public ngAfterViewInit(): void {
    
    this._apply();

    //  Handle calendar formats when it opened (allows to preserve independance between date pickers)
    this._calendarSubscription = this.dateRangePicker.openedStream.subscribe(() => {

      this._locale = this._formats.locale;
      this._dateAdapter.setLocale(this._formats.locale);

      var records = (this._envInjector as any).records as Map<any, any>;
      records.get(MAT_DATE_FORMATS).value.display.dateInput = this._formats.momentDateFormats.display.dateInput;
      records.get(MAT_DATE_FORMATS).value.display.dateA11yLabel = this._formats.momentDateFormats.display.dateA11yLabel;
      records.get(MAT_DATE_FORMATS).value.display.monthYearLabel = this._formats.momentDateFormats.display.monthYearLabel;
      records.get(MAT_DATE_FORMATS).value.display.monthYearA11yLabel = this._formats.momentDateFormats.display.monthYearA11yLabel;
      records.get(MAT_DATE_FORMATS).value.parse.dateInput = this._formats.momentDateFormats.parse.dateInput;
    });
  }

  public ngOnDestroy(): void {

    this._calendarSubscription.unsubscribe();
    this._configurationSubscription.unsubscribe();
    this._zoneSubscription.unsubscribe();
  }

  private _apply(): void {

    for (let index = 0; index < this._configuration.initials.length; index++) {
      
      const link = this._configuration.initials[index];
      if (this.group === link.group) {

        this._formats = this._configuration.formats.filter(e => e.locale === this._configuration.initials.filter(value => value.group === this.group)[0].locale)[0];;
        this._updateInputDateFormats();
      }
    }
  }

  private _updateInputDateFormats(): void {

    this._zoneSubscription = this._zone.onStable
      .pipe(take(1))
      .subscribe(() => {
        
        //  Handle inputs date formats
        ((this.dateRangePicker.datepickerInput as any)._startInput as any)._dateFormats = this._formats.momentDateFormats;
        ((this.dateRangePicker.datepickerInput as any)._endInput as any)._dateFormats = this._formats.momentDateFormats;

        //  Refresh the input value to use the new format
        const currentValueFrom = this.formControls.first.value;
        this.formControls.first.form.patchValue(currentValueFrom);

        const currentValueTo = this.formControls.last.value;
        this.formControls.last.form.patchValue(currentValueTo);
      });
  }
}
