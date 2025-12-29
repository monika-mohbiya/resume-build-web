import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricNurseComponent } from './pediatric-nurse.component';

describe('PediatricNurseComponent', () => {
  let component: PediatricNurseComponent;
  let fixture: ComponentFixture<PediatricNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PediatricNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatricNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
