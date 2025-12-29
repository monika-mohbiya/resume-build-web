import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantWorkerComponent } from './restaurant-worker.component';

describe('RestaurantWorkerComponent', () => {
  let component: RestaurantWorkerComponent;
  let fixture: ComponentFixture<RestaurantWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
