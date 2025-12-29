import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalTherapyAideComponent } from './occupational-therapy-aide.component';

describe('OccupationalTherapyAideComponent', () => {
  let component: OccupationalTherapyAideComponent;
  let fixture: ComponentFixture<OccupationalTherapyAideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupationalTherapyAideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupationalTherapyAideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
