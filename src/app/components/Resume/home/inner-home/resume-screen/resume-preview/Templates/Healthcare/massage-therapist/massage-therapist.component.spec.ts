import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageTherapistComponent } from './massage-therapist.component';

describe('MassageTherapistComponent', () => {
  let component: MassageTherapistComponent;
  let fixture: ComponentFixture<MassageTherapistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassageTherapistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassageTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
