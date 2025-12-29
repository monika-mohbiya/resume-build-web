import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeAssistantComponent } from './administrative-assistant.component';

describe('AdministrativeAssistantComponent', () => {
  let component: AdministrativeAssistantComponent;
  let fixture: ComponentFixture<AdministrativeAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
