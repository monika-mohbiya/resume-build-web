import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodServiceWorkerComponent } from './food-service-worker.component';

describe('FoodServiceWorkerComponent', () => {
  let component: FoodServiceWorkerComponent;
  let fixture: ComponentFixture<FoodServiceWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodServiceWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodServiceWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
