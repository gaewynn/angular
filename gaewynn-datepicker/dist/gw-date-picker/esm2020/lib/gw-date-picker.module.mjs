import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { GWDatePickerComponent } from './gw-date-picker.component';
import * as i0 from "@angular/core";
export class GWDatePickerModule {
}
GWDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GWDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, declarations: [GWDatePickerComponent], imports: [MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule], exports: [GWDatePickerComponent] });
GWDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, imports: [MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GWDatePickerComponent
                    ],
                    imports: [
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule,
                        ReactiveFormsModule
                    ],
                    exports: [
                        GWDatePickerComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3ctZGF0ZS1waWNrZXIvc3JjL2xpYi9ndy1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBZ0JuRSxNQUFNLE9BQU8sa0JBQWtCOzsrR0FBbEIsa0JBQWtCO2dIQUFsQixrQkFBa0IsaUJBWjNCLHFCQUFxQixhQUdyQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxtQkFBbUIsYUFHbkIscUJBQXFCO2dIQUdaLGtCQUFrQixZQVQzQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxtQkFBbUI7MkZBTVYsa0JBQWtCO2tCQWQ5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7cUJBQ3RCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEdXRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZ3ctZGF0ZS1waWNrZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR1dEYXRlUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHV0RhdGVQaWNrZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBHV0RhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=