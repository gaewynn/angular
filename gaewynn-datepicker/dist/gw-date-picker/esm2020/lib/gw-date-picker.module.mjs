import { InjectionToken, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GWDatePickerComponent } from './gw-date-picker.component';
import * as i0 from "@angular/core";
export const GW_DATE_PICKER_CONFIGURATION = new InjectionToken('GW_DATE_PICKER_CONFIGURATION', undefined);
export class GWDatePickerConfiguration {
    constructor(initials, formats) {
        this.initials = initials;
        this.formats = formats;
    }
}
export class GWDatePickerModule {
}
GWDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GWDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, declarations: [GWDatePickerComponent], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule], exports: [GWDatePickerComponent] });
GWDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, providers: [
        MomentDateAdapter,
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ], imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GWDatePickerComponent
                    ],
                    imports: [
                        ReactiveFormsModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule
                    ],
                    exports: [
                        GWDatePickerComponent
                    ],
                    providers: [
                        MomentDateAdapter,
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3ctZGF0ZS1waWNrZXIvc3JjL2xpYi9ndy1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLCtCQUErQixFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBRW5FLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFHLElBQUksY0FBYyxDQUM1RCw4QkFBOEIsRUFDOUIsU0FBUyxDQUNWLENBQUM7QUFlRixNQUFNLE9BQU8seUJBQXlCO0lBRXBDLFlBQ1MsUUFBNkMsRUFDN0MsT0FBK0I7UUFEL0IsYUFBUSxHQUFSLFFBQVEsQ0FBcUM7UUFDN0MsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7SUFBSSxDQUFDO0NBQzlDO0FBdUJELE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFuQjNCLHFCQUFxQixhQUdyQixtQkFBbUI7UUFFbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixjQUFjLGFBR2QscUJBQXFCO2dIQVNaLGtCQUFrQixhQVBsQjtRQUNULGlCQUFpQjtRQUVqQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQyxFQUFFO1FBQy9HLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTtLQUNqRSxZQWRDLG1CQUFtQjtRQUVuQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGNBQWM7MkZBWUwsa0JBQWtCO2tCQXJCOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUVuQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsaUJBQWlCO3dCQUVqQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQyxFQUFFO3dCQUMvRyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7cUJBQ2pFO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUywgTUFUX01PTUVOVF9EQVRFX0ZPUk1BVFMsIE1vbWVudERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5pbXBvcnQgeyBHV0RhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2d3LWRhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBHV19EQVRFX1BJQ0tFUl9DT05GSUdVUkFUSU9OID0gbmV3IEluamVjdGlvblRva2VuPEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24+KFxuICAnR1dfREFURV9QSUNLRVJfQ09ORklHVVJBVElPTicsXG4gIHVuZGVmaW5lZFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBJR1dEYXRlUGlja2VyRm9ybWF0cyB7XG4gIGxvY2FsZTogc3RyaW5nO1xuICBtb21lbnREYXRlRm9ybWF0czogeyBcbiAgICAgIHBhcnNlOiB7IGRhdGVJbnB1dDogc3RyaW5nIH0sIFxuICAgICAgZGlzcGxheTogeyBcbiAgICAgICAgICBkYXRlSW5wdXQ6IHN0cmluZztcbiAgICAgICAgICBtb250aFllYXJMYWJlbDogc3RyaW5nO1xuICAgICAgICAgIGRhdGVBMTF5TGFiZWw6IHN0cmluZztcbiAgICAgICAgICBtb250aFllYXJBMTF5TGFiZWw6IHN0cmluZztcbiAgICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEdXRGF0ZVBpY2tlckNvbmZpZ3VyYXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbml0aWFsczogeyBncm91cDogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyB9W10sXG4gICAgcHVibGljIGZvcm1hdHM6IElHV0RhdGVQaWNrZXJGb3JtYXRzW10pIHsgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHV0RhdGVQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgR1dEYXRlUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1vbWVudERhdGVBZGFwdGVyLFxuXG4gICAgeyBwcm92aWRlOiBEYXRlQWRhcHRlciwgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLCBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFLCBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TXSB9LFxuICAgIHsgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR1dEYXRlUGlja2VyTW9kdWxlIHsgfVxuIl19