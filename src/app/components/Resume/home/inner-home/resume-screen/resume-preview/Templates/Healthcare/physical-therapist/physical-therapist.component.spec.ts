import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalTherapistComponent } from './physical-therapist.component';

describe('PhysicalTherapistComponent', () => {
  let component: PhysicalTherapistComponent;
  let fixture: ComponentFixture<PhysicalTherapistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalTherapistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
