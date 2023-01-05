import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MockService } from './mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  public get customDateFormControl(): FormControl { return this.ngxGaewynnDatePickerForm.controls['customDate'] as FormControl; }
  public get customDate1FormControl(): FormControl { return this.ngxGaewynnDatePickerForm.controls['customDate1'] as FormControl; }
  public get customDate2FormControl(): FormControl { return this.ngxGaewynnDatePickerForm.controls['customDate2'] as FormControl; }
  public get customRangeDateFromFormControl1(): FormControl { return this.ngxGaewynnDatePickerForm.controls['customRangeDateFromFormControl1'] as FormControl; }
  public get customRangeDateToFormControl1(): FormControl { return this.ngxGaewynnDatePickerForm.controls['customRangeDateToFormControl1'] as FormControl; }

  public ngxGaewynnDatePickerForm: FormGroup = this._formBuilder.group({ customDate: [''], customDate1: [''], customDate2: [''], customRangeDateFromFormControl1: [], customRangeDateToFormControl1: [] });

  constructor(
    public mockService: MockService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router) { }

  public ngOnInit(): void {
    this.mockService.init();
  }
  
  public goToPage(pageNumber: number): void {
    this._router.navigateByUrl("page" + pageNumber);
  }
}
