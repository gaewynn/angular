import { Injectable } from '@angular/core';

import { GWDatePickerService, IGWDatePickerFormats } from 'GWDatePicker';

import { GWDatePickersConfiguration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class MockService {

    public hintGroup1: string;
    public hintGroup2: string;
  
    public currentLocaleGroup1: string;
    public currentLocaleGroup2: string;

    constructor(private readonly _gwDatePickerService: GWDatePickerService) {

      this.currentLocaleGroup1 = "fr";
      this.currentLocaleGroup2 = "en";

      this.hintGroup1 = this.getGWDatepickerFormats(1).momentDateFormats.display.dateInput;
      this.hintGroup2 = this.getGWDatepickerFormats(2).momentDateFormats.display.dateInput;
    }

    public init(): void {
      this._gwDatePickerService.init();
    }

    public getGWDatepickerFormats(groupNumber: number): IGWDatePickerFormats {

        return groupNumber === 1
            ? GWDatePickersConfiguration.formats.filter(e => e.locale === this.currentLocaleGroup1)[0]
            : GWDatePickersConfiguration.formats.filter(e => e.locale === this.currentLocaleGroup2)[0]
    }

    public updateGWDatePickerDateFormats(groupNumber: number): void {

      if (groupNumber === 1) {

        this.currentLocaleGroup1 = this.currentLocaleGroup1 === "fr" ? "en" : "fr";
        const options = this.getGWDatepickerFormats(1);
        this.hintGroup1 = options.momentDateFormats.display.dateInput;
        this._gwDatePickerService.updateFormats("group1", this.currentLocaleGroup1);

      } else {

        this.currentLocaleGroup2 = this.currentLocaleGroup2 === "fr" ? "en" : "fr";
        const options = this.getGWDatepickerFormats(2);
        this.hintGroup2 = options.momentDateFormats.display.dateInput;
        this._gwDatePickerService.updateFormats("group2", this.currentLocaleGroup2);
      }
    }

    public getCurrentLanguage(groupNumber: number): string {
      return groupNumber === 1 ? this.currentLocaleGroup1 : this.currentLocaleGroup2;
    }

    public getSwitchToLabel(groupNumber: number): string {
      
      return groupNumber === 1
        ? this.currentLocaleGroup1 === "fr" ? "en" : "fr"
        : this.currentLocaleGroup2 === "fr" ? "en" : "fr";
    }
}
