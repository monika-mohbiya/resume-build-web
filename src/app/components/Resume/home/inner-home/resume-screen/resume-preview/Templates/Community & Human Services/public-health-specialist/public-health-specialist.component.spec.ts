import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHealthSpecialistComponent } from './public-health-specialist.component';

describe('PublicHealthSpecialistComponent', () => {
  let component: PublicHealthSpecialistComponent;
  let fixture: ComponentFixture<PublicHealthSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicHealthSpecialistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicHealthSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
