import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationOfficerComponent } from './probation-officer.component';

describe('ProbationOfficerComponent', () => {
  let component: ProbationOfficerComponent;
  let fixture: ComponentFixture<ProbationOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProbationOfficerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbationOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
