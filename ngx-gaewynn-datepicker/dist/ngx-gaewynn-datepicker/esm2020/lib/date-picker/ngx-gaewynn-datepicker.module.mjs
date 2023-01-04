import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxGaewynnDatePickerComponent } from './ngx-gaewynn-datepicker.component';
import * as i0 from "@angular/core";
export class NgxGaewynnDatePickerModule {
}
NgxGaewynnDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxGaewynnDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerModule, declarations: [NgxGaewynnDatePickerComponent], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule], exports: [NgxGaewynnDatePickerComponent] });
NgxGaewynnDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerModule, providers: [
        MomentDateAdapter,
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxGaewynnDatePickerComponent
                    ],
                    imports: [
                        ReactiveFormsModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule
                    ],
                    exports: [
                        NgxGaewynnDatePickerComponent
                    ],
                    providers: [
                        MomentDateAdapter,
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ2Fld3lubi1kYXRlcGlja2VyL3NyYy9saWIvZGF0ZS1waWNrZXIvbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvSCxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUF1Qm5GLE1BQU0sT0FBTywwQkFBMEI7O3VIQUExQiwwQkFBMEI7d0hBQTFCLDBCQUEwQixpQkFuQm5DLDZCQUE2QixhQUc3QixtQkFBbUI7UUFFbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixjQUFjLGFBR2QsNkJBQTZCO3dIQVNwQiwwQkFBMEIsYUFQMUI7UUFDVCxpQkFBaUI7UUFFakIsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUMsRUFBRTtRQUMvRyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7S0FDakUsWUFkQyxtQkFBbUI7UUFFbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixjQUFjOzJGQVlMLDBCQUEwQjtrQkFyQnRDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFFbkIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDZCQUE2QjtxQkFDOUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGlCQUFpQjt3QkFFakIsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUMsRUFBRTt3QkFDL0csRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFO3FCQUNqRTtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUywgTUFUX01PTUVOVF9EQVRFX0ZPUk1BVFMsIE1vbWVudERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5pbXBvcnQgeyBOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ3hHYWV3eW5uRGF0ZVBpY2tlckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNb21lbnREYXRlQWRhcHRlcixcblxuICAgIHsgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlciwgZGVwczogW01BVF9EQVRFX0xPQ0FMRSwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU10gfSxcbiAgICB7IHByb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVfRk9STUFUUyB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhZXd5bm5EYXRlUGlja2VyTW9kdWxlIHsgfVxuIl19