import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateAssistantComponent } from './graduate-assistant.component';

describe('GraduateAssistantComponent', () => {
  let component: GraduateAssistantComponent;
  let fixture: ComponentFixture<GraduateAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduateAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduateAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
