import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstituteTeacherComponent } from './substitute-teacher.component';

describe('SubstituteTeacherComponent', () => {
  let component: SubstituteTeacherComponent;
  let fixture: ComponentFixture<SubstituteTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubstituteTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstituteTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
