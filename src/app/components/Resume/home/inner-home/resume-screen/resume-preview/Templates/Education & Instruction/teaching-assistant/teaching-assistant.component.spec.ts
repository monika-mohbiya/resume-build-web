import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingAssistantComponent } from './teaching-assistant.component';

describe('TeachingAssistantComponent', () => {
  let component: TeachingAssistantComponent;
  let fixture: ComponentFixture<TeachingAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
