import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationsClerkComponent } from './communications-clerk.component';

describe('CommunicationsClerkComponent', () => {
  let component: CommunicationsClerkComponent;
  let fixture: ComponentFixture<CommunicationsClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationsClerkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationsClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
