import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManagerComponent } from './case-manager.component';

describe('CaseManagerComponent', () => {
  let component: CaseManagerComponent;
  let fixture: ComponentFixture<CaseManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
