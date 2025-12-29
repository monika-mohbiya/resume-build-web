import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingStudentComponent } from './nursing-student.component';

describe('NursingStudentComponent', () => {
  let component: NursingStudentComponent;
  let fixture: ComponentFixture<NursingStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursingStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
