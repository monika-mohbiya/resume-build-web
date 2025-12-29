import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffNurseComponent } from './staff-nurse.component';

describe('StaffNurseComponent', () => {
  let component: StaffNurseComponent;
  let fixture: ComponentFixture<StaffNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
