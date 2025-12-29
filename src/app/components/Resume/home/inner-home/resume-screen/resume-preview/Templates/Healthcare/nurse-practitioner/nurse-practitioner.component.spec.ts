import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePractitionerComponent } from './nurse-practitioner.component';

describe('NursePractitionerComponent', () => {
  let component: NursePractitionerComponent;
  let fixture: ComponentFixture<NursePractitionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursePractitionerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursePractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
