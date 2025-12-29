import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckDriverComponent } from './truck-driver.component';

describe('TruckDriverComponent', () => {
  let component: TruckDriverComponent;
  let fixture: ComponentFixture<TruckDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckDriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
