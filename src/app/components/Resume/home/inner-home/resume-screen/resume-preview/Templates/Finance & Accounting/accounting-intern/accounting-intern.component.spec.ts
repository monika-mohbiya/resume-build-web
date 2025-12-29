import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingInternComponent } from './accounting-intern.component';

describe('AccountingInternComponent', () => {
  let component: AccountingInternComponent;
  let fixture: ComponentFixture<AccountingInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingInternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
