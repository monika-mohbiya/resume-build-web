import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalTechnicianComponent } from './surgical-technician.component';

describe('SurgicalTechnicianComponent', () => {
  let component: SurgicalTechnicianComponent;
  let fixture: ComponentFixture<SurgicalTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurgicalTechnicianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurgicalTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
