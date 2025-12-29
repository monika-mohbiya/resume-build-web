import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerScienceInternComponent } from './computer-science-intern.component';

describe('ComputerScienceInternComponent', () => {
  let component: ComputerScienceInternComponent;
  let fixture: ComponentFixture<ComputerScienceInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerScienceInternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerScienceInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
