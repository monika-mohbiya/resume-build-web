import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingConsultantComponent } from './nursing-consultant.component';

describe('NursingConsultantComponent', () => {
  let component: NursingConsultantComponent;
  let fixture: ComponentFixture<NursingConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursingConsultantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursingConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
