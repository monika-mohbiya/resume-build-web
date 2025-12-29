import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolNurseComponent } from './school-nurse.component';

describe('SchoolNurseComponent', () => {
  let component: SchoolNurseComponent;
  let fixture: ComponentFixture<SchoolNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
