import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGaewynnDatePickerComponent } from './ngx-gaewynn-datepicker.component';

describe('GWDatePickerComponent', () => {
  let component: NgxGaewynnDatePickerComponent;
  let fixture: ComponentFixture<NgxGaewynnDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGaewynnDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGaewynnDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
