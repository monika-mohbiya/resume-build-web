import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTechnicianComponent } from './maintenance-technician.component';

describe('MaintenanceTechnicianComponent', () => {
  let component: MaintenanceTechnicianComponent;
  let fixture: ComponentFixture<MaintenanceTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceTechnicianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
