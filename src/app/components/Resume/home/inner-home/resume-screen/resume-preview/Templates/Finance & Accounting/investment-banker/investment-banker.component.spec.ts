import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentBankerComponent } from './investment-banker.component';

describe('InvestmentBankerComponent', () => {
  let component: InvestmentBankerComponent;
  let fixture: ComponentFixture<InvestmentBankerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentBankerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentBankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
