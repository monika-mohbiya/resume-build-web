import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaprofessionalComponent } from './paraprofessional.component';

describe('ParaprofessionalComponent', () => {
  let component: ParaprofessionalComponent;
  let fixture: ComponentFixture<ParaprofessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParaprofessionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaprofessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
