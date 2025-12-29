import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareAdministratorComponent } from './healthcare-administrator.component';

describe('HealthcareAdministratorComponent', () => {
  let component: HealthcareAdministratorComponent;
  let fixture: ComponentFixture<HealthcareAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthcareAdministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
