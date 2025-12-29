import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAdvisorComponent } from './financial-advisor.component';

describe('FinancialAdvisorComponent', () => {
  let component: FinancialAdvisorComponent;
  let fixture: ComponentFixture<FinancialAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialAdvisorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
