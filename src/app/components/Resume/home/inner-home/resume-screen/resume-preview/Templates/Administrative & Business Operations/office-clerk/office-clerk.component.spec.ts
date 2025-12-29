import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeClerkComponent } from './office-clerk.component';

describe('OfficeClerkComponent', () => {
  let component: OfficeClerkComponent;
  let fixture: ComponentFixture<OfficeClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeClerkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
