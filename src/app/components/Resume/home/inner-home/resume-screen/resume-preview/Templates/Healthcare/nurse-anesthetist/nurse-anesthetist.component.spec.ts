import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAnesthetistComponent } from './nurse-anesthetist.component';

describe('NurseAnesthetistComponent', () => {
  let component: NurseAnesthetistComponent;
  let fixture: ComponentFixture<NurseAnesthetistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseAnesthetistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseAnesthetistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
