import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingManagerComponent } from './accounting-manager.component';

describe('AccountingManagerComponent', () => {
  let component: AccountingManagerComponent;
  let fixture: ComponentFixture<AccountingManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
