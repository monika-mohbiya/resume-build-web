import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRAssistantComponent } from './hr-assistant.component';

describe('HRAssistantComponent', () => {
  let component: HRAssistantComponent;
  let fixture: ComponentFixture<HRAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HRAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
