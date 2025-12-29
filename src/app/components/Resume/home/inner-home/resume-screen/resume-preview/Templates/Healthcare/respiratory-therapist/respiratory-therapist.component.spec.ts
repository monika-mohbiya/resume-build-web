import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiratoryTherapistComponent } from './respiratory-therapist.component';

describe('RespiratoryTherapistComponent', () => {
  let component: RespiratoryTherapistComponent;
  let fixture: ComponentFixture<RespiratoryTherapistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespiratoryTherapistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespiratoryTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
