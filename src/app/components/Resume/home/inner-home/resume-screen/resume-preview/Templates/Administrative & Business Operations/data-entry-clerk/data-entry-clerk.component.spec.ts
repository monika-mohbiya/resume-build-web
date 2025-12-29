import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryClerkComponent } from './data-entry-clerk.component';

describe('DataEntryClerkComponent', () => {
  let component: DataEntryClerkComponent;
  let fixture: ComponentFixture<DataEntryClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEntryClerkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntryClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
