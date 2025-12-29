import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawEnforcementComponent } from './law-enforcement.component';

describe('LawEnforcementComponent', () => {
  let component: LawEnforcementComponent;
  let fixture: ComponentFixture<LawEnforcementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawEnforcementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawEnforcementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
