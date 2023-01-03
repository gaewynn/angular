import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GWDatePickerComponent } from './gw-date-picker.component';

describe('GWDatePickerComponent', () => {
  let component: GWDatePickerComponent;
  let fixture: ComponentFixture<GWDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GWDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GWDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
