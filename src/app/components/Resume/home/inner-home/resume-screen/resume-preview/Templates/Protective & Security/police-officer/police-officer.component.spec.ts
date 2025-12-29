import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceOfficerComponent } from './police-officer.component';

describe('PoliceOfficerComponent', () => {
  let component: PoliceOfficerComponent;
  let fixture: ComponentFixture<PoliceOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliceOfficerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
