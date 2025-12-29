import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchAssistantComponent } from './research-assistant.component';

describe('ResearchAssistantComponent', () => {
  let component: ResearchAssistantComponent;
  let fixture: ComponentFixture<ResearchAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
