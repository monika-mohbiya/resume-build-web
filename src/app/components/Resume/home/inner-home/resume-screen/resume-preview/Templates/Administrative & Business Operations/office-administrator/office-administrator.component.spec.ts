import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAdministratorComponent } from './office-administrator.component';

describe('OfficeAdministratorComponent', () => {
  let component: OfficeAdministratorComponent;
  let fixture: ComponentFixture<OfficeAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeAdministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
