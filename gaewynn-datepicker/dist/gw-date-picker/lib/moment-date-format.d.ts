export interface IMomentDateFormatParse {
    dateInput: string;
}
export interface IMomentDateFormatDisplay {
    dateInput: string;
    monthYearLabel: string;
    dateA11yLabel: string;
    monthYearA11yLabel: string;
}
export interface IMomentDateFormat {
    parse: IMomentDateFormatParse;
    display: IMomentDateFormatDisplay;
}
export interface IGWDatePickerOptions {
    locale: string;
    momentDateFormat: IMomentDateFormat;
}
