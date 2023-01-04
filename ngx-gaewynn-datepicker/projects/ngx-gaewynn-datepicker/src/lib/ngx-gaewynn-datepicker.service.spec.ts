import { TestBed } from '@angular/core/testing';

import { NgxGaewynnDatePickerService } from './ngx-gaewynn-datepicker.service';

describe('GWDatePickerService', () => {
  let service: NgxGaewynnDatePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGaewynnDatePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
