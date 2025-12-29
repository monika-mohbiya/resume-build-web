import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborAndDeliveryNurseComponent } from './labor-and-delivery-nurse.component';

describe('LaborAndDeliveryNurseComponent', () => {
  let component: LaborAndDeliveryNurseComponent;
  let fixture: ComponentFixture<LaborAndDeliveryNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborAndDeliveryNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborAndDeliveryNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
