import { Injectable } from '@angular/core';

import { NgxGaewynnDatePickerService, INgxGaewynnDatePickerFormats } from 'NgxGaewynnDatePicker';

import { GaewynnDatePickerConfiguration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class MockService {

    public hintGroup1: string;
    public hintGroup2: string;
  
    public currentLocaleGroup1: string;
    public currentLocaleGroup2: string;

    constructor(private readonly _ngxGaewynnDatePickerService: NgxGaewynnDatePickerService) {

      this.currentLocaleGroup1 = "fr";
      this.currentLocaleGroup2 = "en";

      this.hintGroup1 = this._getNgxGaewynnDatePickerFormats(1).momentDateFormats.display.dateInput;
      this.hintGroup2 = this._getNgxGaewynnDatePickerFormats(2).momentDateFormats.display.dateInput;
    }

    public init(): void {
      this._ngxGaewynnDatePickerService.init();
    }

    public updateNgxGaewynnDatePickerDateFormats(groupNumber: number): void {

      if (groupNumber === 1) {

        this.currentLocaleGroup1 = this.currentLocaleGroup1 === "fr" ? "en" : "fr";
        const options = this._getNgxGaewynnDatePickerFormats(1);
        this.hintGroup1 = options.momentDateFormats.display.dateInput;
        this._ngxGaewynnDatePickerService.updateFormats("group1", this.currentLocaleGroup1);

      } else {

        this.currentLocaleGroup2 = this.currentLocaleGroup2 === "fr" ? "en" : "fr";
        const options = this._getNgxGaewynnDatePickerFormats(2);
        this.hintGroup2 = options.momentDateFormats.display.dateInput;
        this._ngxGaewynnDatePickerService.updateFormats("group2", this.currentLocaleGroup2);
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

    public getPlaceholder(groupNumber: number): string {
      
      return groupNumber === 1
        ? this.currentLocaleGroup1 === "fr" ? "Choisissez une date" : "Choose a date"
        : this.currentLocaleGroup2 === "fr" ? "Choisissez une date" : "Choose a date"
    }

    public getRangePlaceholder(groupNumber: number): string {
      
      return groupNumber === 1
        ? this.currentLocaleGroup1 === "fr" ? "Choisissez un intervalle de dates" : "Enter a date range"
        : this.currentLocaleGroup2 === "fr" ? "Choisissez un intervalle de dates" : "Enter a date range"
    }

    private _getNgxGaewynnDatePickerFormats(groupNumber: number): INgxGaewynnDatePickerFormats {

      return groupNumber === 1
          ? GaewynnDatePickerConfiguration.formats.filter(e => e.locale === this.currentLocaleGroup1)[0]
          : GaewynnDatePickerConfiguration.formats.filter(e => e.locale === this.currentLocaleGroup2)[0]
  }
}
