import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeManagerComponent } from './office-manager.component';

describe('OfficeManagerComponent', () => {
  let component: OfficeManagerComponent;
  let fixture: ComponentFixture<OfficeManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
