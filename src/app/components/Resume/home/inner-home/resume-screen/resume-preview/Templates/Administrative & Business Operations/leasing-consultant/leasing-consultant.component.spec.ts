import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingConsultantComponent } from './leasing-consultant.component';

describe('LeasingConsultantComponent', () => {
  let component: LeasingConsultantComponent;
  let fixture: ComponentFixture<LeasingConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeasingConsultantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeasingConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
