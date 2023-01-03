import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GWDateRangePickerComponent } from './gw-date-range-picker.component';

describe('GWDateRangePickerComponent', () => {
  let component: GWDateRangePickerComponent;
  let fixture: ComponentFixture<GWDateRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GWDateRangePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GWDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
