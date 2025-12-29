import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricOccupationalTherapistComponent } from './pediatric-occupational-therapist.component';

describe('PediatricOccupationalTherapistComponent', () => {
  let component: PediatricOccupationalTherapistComponent;
  let fixture: ComponentFixture<PediatricOccupationalTherapistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PediatricOccupationalTherapistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatricOccupationalTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
