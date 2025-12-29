import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeSupportComponent } from './administrative-support.component';

describe('AdministrativeSupportComponent', () => {
  let component: AdministrativeSupportComponent;
  let fixture: ComponentFixture<AdministrativeSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
