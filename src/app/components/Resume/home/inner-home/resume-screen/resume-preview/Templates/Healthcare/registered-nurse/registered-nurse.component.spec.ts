import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredNurseComponent } from './registered-nurse.component';

describe('RegisteredNurseComponent', () => {
  let component: RegisteredNurseComponent;
  let fixture: ComponentFixture<RegisteredNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
