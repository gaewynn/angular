export interface IMomentDateFormatsParse {
    dateInput: string;
}
export interface IMomentDateFormatsDisplay {
    dateInput: string;
    monthYearLabel: string;
    dateA11yLabel: string;
    monthYearA11yLabel: string;
}
export interface IMomentDateFormats {
    parse: IMomentDateFormatsParse;
    display: IMomentDateFormatsDisplay;
}
export interface IGWDatePickerOptions {
    locale: string;
    momentDateFormats: IMomentDateFormats;
}
