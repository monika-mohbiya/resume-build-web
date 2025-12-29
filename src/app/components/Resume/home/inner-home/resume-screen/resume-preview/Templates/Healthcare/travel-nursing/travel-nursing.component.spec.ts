import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelNursingComponent } from './travel-nursing.component';

describe('TravelNursingComponent', () => {
  let component: TravelNursingComponent;
  let fixture: ComponentFixture<TravelNursingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelNursingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelNursingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
