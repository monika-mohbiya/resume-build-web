import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalNurseComponent } from './practical-nurse.component';

describe('PracticalNurseComponent', () => {
  let component: PracticalNurseComponent;
  let fixture: ComponentFixture<PracticalNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticalNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
