import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatricNursePractitionerComponent } from './psychiatric-nurse-practitioner.component';

describe('PsychiatricNursePractitionerComponent', () => {
  let component: PsychiatricNursePractitionerComponent;
  let fixture: ComponentFixture<PsychiatricNursePractitionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychiatricNursePractitionerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychiatricNursePractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
