import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessConsultantComponent } from './business-consultant.component';

describe('BusinessConsultantComponent', () => {
  let component: BusinessConsultantComponent;
  let fixture: ComponentFixture<BusinessConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessConsultantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
