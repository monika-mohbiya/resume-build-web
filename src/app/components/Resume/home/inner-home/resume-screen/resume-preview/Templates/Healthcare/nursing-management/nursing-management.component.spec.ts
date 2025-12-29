import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingManagementComponent } from './nursing-management.component';

describe('NursingManagementComponent', () => {
  let component: NursingManagementComponent;
  let fixture: ComponentFixture<NursingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursingManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
