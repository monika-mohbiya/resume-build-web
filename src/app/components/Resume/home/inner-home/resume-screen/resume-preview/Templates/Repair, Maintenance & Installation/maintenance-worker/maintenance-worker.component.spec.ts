import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceWorkerComponent } from './maintenance-worker.component';

describe('MaintenanceWorkerComponent', () => {
  let component: MaintenanceWorkerComponent;
  let fixture: ComponentFixture<MaintenanceWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
