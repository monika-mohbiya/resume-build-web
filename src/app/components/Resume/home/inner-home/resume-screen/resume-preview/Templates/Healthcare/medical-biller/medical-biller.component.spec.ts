import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBillerComponent } from './medical-biller.component';

describe('MedicalBillerComponent', () => {
  let component: MedicalBillerComponent;
  let fixture: ComponentFixture<MedicalBillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalBillerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
