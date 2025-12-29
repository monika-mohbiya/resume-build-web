import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEducationTeacherComponent } from './special-education-teacher.component';

describe('SpecialEducationTeacherComponent', () => {
  let component: SpecialEducationTeacherComponent;
  let fixture: ComponentFixture<SpecialEducationTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialEducationTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialEducationTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
