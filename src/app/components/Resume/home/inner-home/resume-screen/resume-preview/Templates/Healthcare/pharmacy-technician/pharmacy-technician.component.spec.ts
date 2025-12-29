import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyTechnicianComponent } from './pharmacy-technician.component';

describe('PharmacyTechnicianComponent', () => {
  let component: PharmacyTechnicianComponent;
  let fixture: ComponentFixture<PharmacyTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyTechnicianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
