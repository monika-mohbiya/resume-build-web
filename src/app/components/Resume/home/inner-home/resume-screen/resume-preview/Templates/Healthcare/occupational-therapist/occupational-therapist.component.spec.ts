import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalTherapistComponent } from './occupational-therapist.component';

describe('OccupationalTherapistComponent', () => {
  let component: OccupationalTherapistComponent;
  let fixture: ComponentFixture<OccupationalTherapistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupationalTherapistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupationalTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
