import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCounselorComponent } from './school-counselor.component';

describe('SchoolCounselorComponent', () => {
  let component: SchoolCounselorComponent;
  let fixture: ComponentFixture<SchoolCounselorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolCounselorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolCounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
