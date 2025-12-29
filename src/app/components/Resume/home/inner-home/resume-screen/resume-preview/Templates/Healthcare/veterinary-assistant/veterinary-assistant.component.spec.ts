import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryAssistantComponent } from './veterinary-assistant.component';

describe('VeterinaryAssistantComponent', () => {
  let component: VeterinaryAssistantComponent;
  let fixture: ComponentFixture<VeterinaryAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinaryAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinaryAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
