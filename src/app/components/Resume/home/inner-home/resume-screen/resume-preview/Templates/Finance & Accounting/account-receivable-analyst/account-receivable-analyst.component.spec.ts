import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReceivableAnalystComponent } from './account-receivable-analyst.component';

describe('AccountReceivableAnalystComponent', () => {
  let component: AccountReceivableAnalystComponent;
  let fixture: ComponentFixture<AccountReceivableAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountReceivableAnalystComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountReceivableAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
