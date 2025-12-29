import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateResumeComponent } from './template-resume.component';

describe('TemplateResumeComponent', () => {
  let component: TemplateResumeComponent;
  let fixture: ComponentFixture<TemplateResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
