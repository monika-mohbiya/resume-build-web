import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncologyNurseComponent } from './oncology-nurse.component';

describe('OncologyNurseComponent', () => {
  let component: OncologyNurseComponent;
  let fixture: ComponentFixture<OncologyNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OncologyNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OncologyNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
