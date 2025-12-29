import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskReceptionistComponent } from './front-desk-receptionist.component';

describe('FrontDeskReceptionistComponent', () => {
  let component: FrontDeskReceptionistComponent;
  let fixture: ComponentFixture<FrontDeskReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontDeskReceptionistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontDeskReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
