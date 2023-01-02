import { GWDatePickerConfiguration } from "projects/gw-date-picker/src/public-api";

export const GWDatePickersConfiguration: GWDatePickerConfiguration = {
    initials: [{ group: "group1", locale: "fr" }, { group: "group2", locale: "en" }],
    formats: [{
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