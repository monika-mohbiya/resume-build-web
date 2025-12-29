import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseWorkerComponent } from './warehouse-worker.component';

describe('WarehouseWorkerComponent', () => {
  let component: WarehouseWorkerComponent;
  let fixture: ComponentFixture<WarehouseWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarehouseWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
