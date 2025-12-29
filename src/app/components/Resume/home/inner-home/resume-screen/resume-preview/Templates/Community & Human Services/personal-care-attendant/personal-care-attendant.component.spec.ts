import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCareAttendantComponent } from './personal-care-attendant.component';

describe('PersonalCareAttendantComponent', () => {
  let component: PersonalCareAttendantComponent;
  let fixture: ComponentFixture<PersonalCareAttendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalCareAttendantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCareAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
