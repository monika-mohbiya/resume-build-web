import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAssistantComponent } from './library-assistant.component';

describe('LibraryAssistantComponent', () => {
  let component: LibraryAssistantComponent;
  let fixture: ComponentFixture<LibraryAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
