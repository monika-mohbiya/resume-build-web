import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalReceptionistComponent } from './medical-receptionist.component';

describe('MedicalReceptionistComponent', () => {
  let component: MedicalReceptionistComponent;
  let fixture: ComponentFixture<MedicalReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalReceptionistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
