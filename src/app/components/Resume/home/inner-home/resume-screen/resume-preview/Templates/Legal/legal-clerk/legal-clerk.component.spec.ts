import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalClerkComponent } from './legal-clerk.component';

describe('LegalClerkComponent', () => {
  let component: LegalClerkComponent;
  let fixture: ComponentFixture<LegalClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalClerkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
