import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingAssistantComponent } from './nursing-assistant.component';

describe('NursingAssistantComponent', () => {
  let component: NursingAssistantComponent;
  let fixture: ComponentFixture<NursingAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursingAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursingAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
