import { InjectionToken, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
GWDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GWDatePickerModule, imports: [ReactiveFormsModule,
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ctZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3ctZGF0ZS1waWNrZXIvc3JjL2xpYi9ndy1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVuRSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLGNBQWMsQ0FDNUQsOEJBQThCLEVBQzlCLFNBQVMsQ0FDVixDQUFDO0FBZUYsTUFBTSxPQUFPLHlCQUF5QjtJQUVwQyxZQUNTLFFBQTZDLEVBQzdDLE9BQStCO1FBRC9CLGFBQVEsR0FBUixRQUFRLENBQXFDO1FBQzdDLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQUksQ0FBQztDQUM5QztBQWlCRCxNQUFNLE9BQU8sa0JBQWtCOzsrR0FBbEIsa0JBQWtCO2dIQUFsQixrQkFBa0IsaUJBYjNCLHFCQUFxQixhQUdyQixtQkFBbUI7UUFFbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixjQUFjLGFBR2QscUJBQXFCO2dIQUdaLGtCQUFrQixZQVYzQixtQkFBbUI7UUFFbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixjQUFjOzJGQU1MLGtCQUFrQjtrQkFmOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUVuQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3FCQUN0QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuaW1wb3J0IHsgR1dEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9ndy1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgR1dfREFURV9QSUNLRVJfQ09ORklHVVJBVElPTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uPihcbiAgJ0dXX0RBVEVfUElDS0VSX0NPTkZJR1VSQVRJT04nLFxuICB1bmRlZmluZWRcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdXRGF0ZVBpY2tlckZvcm1hdHMge1xuICBsb2NhbGU6IHN0cmluZztcbiAgbW9tZW50RGF0ZUZvcm1hdHM6IHsgXG4gICAgICBwYXJzZTogeyBkYXRlSW5wdXQ6IHN0cmluZyB9LCBcbiAgICAgIGRpc3BsYXk6IHsgXG4gICAgICAgICAgZGF0ZUlucHV0OiBzdHJpbmc7XG4gICAgICAgICAgbW9udGhZZWFyTGFiZWw6IHN0cmluZztcbiAgICAgICAgICBkYXRlQTExeUxhYmVsOiBzdHJpbmc7XG4gICAgICAgICAgbW9udGhZZWFyQTExeUxhYmVsOiBzdHJpbmc7XG4gICAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBHV0RhdGVQaWNrZXJDb25maWd1cmF0aW9uIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5pdGlhbHM6IHsgZ3JvdXA6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcgfVtdLFxuICAgIHB1YmxpYyBmb3JtYXRzOiBJR1dEYXRlUGlja2VyRm9ybWF0c1tdKSB7IH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR1dEYXRlUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEdXRGF0ZVBpY2tlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdXRGF0ZVBpY2tlck1vZHVsZSB7IH1cbiJdfQ==