import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAssistantComponent } from './office-assistant.component';

describe('OfficeAssistantComponent', () => {
  let component: OfficeAssistantComponent;
  let fixture: ComponentFixture<OfficeAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
