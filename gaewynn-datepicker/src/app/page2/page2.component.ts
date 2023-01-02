import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MockService } from '../mock.service';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html'
})
export class Page2Component implements OnInit {

    public get customDateFormControl(): FormControl { return this.gwDatePickerForm.controls['customDate'] as FormControl; }
    public get customDate1FormControl(): FormControl { return this.gwDatePickerForm.controls['customDate1'] as FormControl; }
    public get customDate2FormControl(): FormControl { return this.gwDatePickerForm.controls['customDate2'] as FormControl; }
  
    public gwDatePickerForm: FormGroup = this._formBuilder.group({ customDate: [''], customDate1: [''], customDate2: [''] });
  
    constructor(
        public mockService: MockService,
        private readonly _formBuilder: FormBuilder) { }

    public ngOnInit(): void {
        this.mockService.init();
    }
}