import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingGeneralComponent } from './nursing-general.component';

describe('NursingGeneralComponent', () => {
  let component: NursingGeneralComponent;
  let fixture: ComponentFixture<NursingGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursingGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
