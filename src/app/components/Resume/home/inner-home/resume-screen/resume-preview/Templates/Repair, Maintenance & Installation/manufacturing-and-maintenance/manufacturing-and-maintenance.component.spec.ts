import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingAndMaintenanceComponent } from './manufacturing-and-maintenance.component';

describe('ManufacturingAndMaintenanceComponent', () => {
  let component: ManufacturingAndMaintenanceComponent;
  let fixture: ComponentFixture<ManufacturingAndMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturingAndMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturingAndMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
