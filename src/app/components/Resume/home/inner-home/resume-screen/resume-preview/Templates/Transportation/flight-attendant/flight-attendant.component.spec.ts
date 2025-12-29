import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAttendantComponent } from './flight-attendant.component';

describe('FlightAttendantComponent', () => {
  let component: FlightAttendantComponent;
  let fixture: ComponentFixture<FlightAttendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightAttendantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
