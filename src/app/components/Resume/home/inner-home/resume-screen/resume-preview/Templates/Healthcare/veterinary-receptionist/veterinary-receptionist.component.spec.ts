import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryReceptionistComponent } from './veterinary-receptionist.component';

describe('VeterinaryReceptionistComponent', () => {
  let component: VeterinaryReceptionistComponent;
  let fixture: ComponentFixture<VeterinaryReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinaryReceptionistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinaryReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
