import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveAssistantComponent } from './executive-assistant.component';

describe('ExecutiveAssistantComponent', () => {
  let component: ExecutiveAssistantComponent;
  let fixture: ComponentFixture<ExecutiveAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
