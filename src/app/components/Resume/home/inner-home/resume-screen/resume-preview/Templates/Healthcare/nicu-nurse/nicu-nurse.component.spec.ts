import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NICUNurseComponent } from './nicu-nurse.component';

describe('NICUNurseComponent', () => {
  let component: NICUNurseComponent;
  let fixture: ComponentFixture<NICUNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NICUNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NICUNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
