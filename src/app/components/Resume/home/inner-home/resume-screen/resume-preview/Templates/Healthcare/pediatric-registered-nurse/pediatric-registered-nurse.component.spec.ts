import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricRegisteredNurseComponent } from './pediatric-registered-nurse.component';

describe('PediatricRegisteredNurseComponent', () => {
  let component: PediatricRegisteredNurseComponent;
  let fixture: ComponentFixture<PediatricRegisteredNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PediatricRegisteredNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatricRegisteredNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
