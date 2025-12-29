import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssuranceSpecialistComponent } from './quality-assurance-specialist.component';

describe('QualityAssuranceSpecialistComponent', () => {
  let component: QualityAssuranceSpecialistComponent;
  let fixture: ComponentFixture<QualityAssuranceSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityAssuranceSpecialistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityAssuranceSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
