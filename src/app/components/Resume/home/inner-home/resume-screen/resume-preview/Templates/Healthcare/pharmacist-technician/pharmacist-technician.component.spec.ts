import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistTechnicianComponent } from './pharmacist-technician.component';

describe('PharmacistTechnicianComponent', () => {
  let component: PharmacistTechnicianComponent;
  let fixture: ComponentFixture<PharmacistTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacistTechnicianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacistTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
