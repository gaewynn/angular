import { TestBed } from '@angular/core/testing';

import { GWDatePickerService } from './gw-date-picker.service';

describe('GWDatePickerService', () => {
  let service: GWDatePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GWDatePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
