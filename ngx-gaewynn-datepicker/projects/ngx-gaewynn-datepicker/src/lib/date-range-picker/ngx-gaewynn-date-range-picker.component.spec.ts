import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGaewynnDateRangePickerComponent } from './ngx-gaewynn-date-range-picker.component';

describe('GWDateRangePickerComponent', () => {
  let component: NgxGaewynnDateRangePickerComponent;
  let fixture: ComponentFixture<NgxGaewynnDateRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGaewynnDateRangePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGaewynnDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
