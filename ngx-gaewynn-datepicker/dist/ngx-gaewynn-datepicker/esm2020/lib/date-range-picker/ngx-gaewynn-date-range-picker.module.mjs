import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxGaewynnDateRangePickerComponent } from './ngx-gaewynn-date-range-picker.component';
import * as i0 from "@angular/core";
export class NgxGaewynnDateRangePickerModule {
}
NgxGaewynnDateRangePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxGaewynnDateRangePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerModule, declarations: [NgxGaewynnDateRangePickerComponent], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule], exports: [NgxGaewynnDateRangePickerComponent] });
NgxGaewynnDateRangePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerModule, providers: [
        MomentDateAdapter,
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxGaewynnDateRangePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxGaewynnDateRangePickerComponent
                    ],
                    imports: [
                        ReactiveFormsModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule
                    ],
                    exports: [
                        NgxGaewynnDateRangePickerComponent
                    ],
                    providers: [
                        MomentDateAdapter,
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhZXd5bm4tZGF0ZS1yYW5nZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdhZXd5bm4tZGF0ZXBpY2tlci9zcmMvbGliL2RhdGUtcmFuZ2UtcGlja2VyL25neC1nYWV3eW5uLWRhdGUtcmFuZ2UtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ILE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQXVCL0YsTUFBTSxPQUFPLCtCQUErQjs7NEhBQS9CLCtCQUErQjs2SEFBL0IsK0JBQStCLGlCQW5CeEMsa0NBQWtDLGFBR2xDLG1CQUFtQjtRQUVuQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGNBQWMsYUFHZCxrQ0FBa0M7NkhBU3pCLCtCQUErQixhQVAvQjtRQUNULGlCQUFpQjtRQUVqQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQyxFQUFFO1FBQy9HLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTtLQUNqRSxZQWRDLG1CQUFtQjtRQUVuQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGNBQWM7MkZBWUwsK0JBQStCO2tCQXJCM0MsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0NBQWtDO3FCQUNuQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUVuQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0NBQWtDO3FCQUNuQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsaUJBQWlCO3dCQUVqQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQyxFQUFFO3dCQUMvRyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7cUJBQ2pFO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TLCBNQVRfTU9NRU5UX0RBVEVfRk9STUFUUywgTW9tZW50RGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5cbmltcG9ydCB7IE5neEdhZXd5bm5EYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1nYWV3eW5uLWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neEdhZXd5bm5EYXRlUmFuZ2VQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4R2Fld3lubkRhdGVSYW5nZVBpY2tlckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNb21lbnREYXRlQWRhcHRlcixcblxuICAgIHsgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlciwgZGVwczogW01BVF9EQVRFX0xPQ0FMRSwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU10gfSxcbiAgICB7IHByb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVfRk9STUFUUyB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhZXd5bm5EYXRlUmFuZ2VQaWNrZXJNb2R1bGUgeyB9XG4iXX0=