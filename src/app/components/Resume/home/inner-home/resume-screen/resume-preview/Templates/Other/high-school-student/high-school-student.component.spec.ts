import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSchoolStudentComponent } from './high-school-student.component';

describe('HighSchoolStudentComponent', () => {
  let component: HighSchoolStudentComponent;
  let fixture: ComponentFixture<HighSchoolStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighSchoolStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighSchoolStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
