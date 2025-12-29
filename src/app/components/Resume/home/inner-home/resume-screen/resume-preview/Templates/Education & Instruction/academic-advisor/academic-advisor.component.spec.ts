import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicAdvisorComponent } from './academic-advisor.component';

describe('AcademicAdvisorComponent', () => {
  let component: AcademicAdvisorComponent;
  let fixture: ComponentFixture<AcademicAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicAdvisorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
