import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseConsultantComponent } from './nurse-consultant.component';

describe('NurseConsultantComponent', () => {
  let component: NurseConsultantComponent;
  let fixture: ComponentFixture<NurseConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseConsultantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
