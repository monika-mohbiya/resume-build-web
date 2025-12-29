import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTellerComponent } from './bank-teller.component';

describe('BankTellerComponent', () => {
  let component: BankTellerComponent;
  let fixture: ComponentFixture<BankTellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankTellerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
