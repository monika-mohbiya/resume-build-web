import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreschoolTeacherComponent } from './preschool-teacher.component';

describe('PreschoolTeacherComponent', () => {
  let component: PreschoolTeacherComponent;
  let fixture: ComponentFixture<PreschoolTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreschoolTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreschoolTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
