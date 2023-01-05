import { INgxGaewynnDatePickerConfiguration } from "NgxGaewynnDatePicker";

export const GaewynnDatePickerConfiguration: INgxGaewynnDatePickerConfiguration = {
    initials: [{ group: "group1", format: "format-1" }, { group: "group2", format: "format-2" }],
    formats: [{
        format: "format-1",
        locale: "fr",
        momentDateFormats: {
            parse: {
                dateInput: "DD.MM.YYYY",
            },
            display: {
                dateInput: "DD.MM.YYYY",
                monthYearLabel: "MMM.YYYY",
                dateA11yLabel: "DD.MM.YYYY",
                monthYearA11yLabel: "MMM.YYYY",
            }
        }
    }, {
        format: "format-2",
        locale: "en",
        momentDateFormats: {
            parse: {
                dateInput: "YYYY-MM-DD",
            },
            display: {
                dateInput: "YYYY-MM-DD",
                monthYearLabel: "MMM/YYYY",
                dateA11yLabel: "YYYY-MM-DD",
                monthYearA11yLabel: "MMM/YYYY",
            }
        }
    }]
};