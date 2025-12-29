import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionWorkerComponent } from './construction-worker.component';

describe('ConstructionWorkerComponent', () => {
  let component: ConstructionWorkerComponent;
  let fixture: ComponentFixture<ConstructionWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
