import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianAssistantComponent } from './physician-assistant.component';

describe('PhysicianAssistantComponent', () => {
  let component: PhysicianAssistantComponent;
  let fixture: ComponentFixture<PhysicianAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicianAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicianAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
