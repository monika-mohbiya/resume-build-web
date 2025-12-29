import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOpNurseComponent } from './pre-op-nurse.component';

describe('PreOpNurseComponent', () => {
  let component: PreOpNurseComponent;
  let fixture: ComponentFixture<PreOpNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreOpNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreOpNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
