import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalNurseSpecialistComponent } from './clinical-nurse-specialist.component';

describe('ClinicalNurseSpecialistComponent', () => {
  let component: ClinicalNurseSpecialistComponent;
  let fixture: ComponentFixture<ClinicalNurseSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicalNurseSpecialistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicalNurseSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
