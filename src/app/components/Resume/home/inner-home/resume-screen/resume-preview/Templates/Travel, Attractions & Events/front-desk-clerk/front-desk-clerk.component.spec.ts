import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskClerkComponent } from './front-desk-clerk.component';

describe('FrontDeskClerkComponent', () => {
  let component: FrontDeskClerkComponent;
  let fixture: ComponentFixture<FrontDeskClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontDeskClerkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontDeskClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
