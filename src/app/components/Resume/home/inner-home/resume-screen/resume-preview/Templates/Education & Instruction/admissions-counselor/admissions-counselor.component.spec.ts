import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsCounselorComponent } from './admissions-counselor.component';

describe('AdmissionsCounselorComponent', () => {
  let component: AdmissionsCounselorComponent;
  let fixture: ComponentFixture<AdmissionsCounselorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionsCounselorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionsCounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
