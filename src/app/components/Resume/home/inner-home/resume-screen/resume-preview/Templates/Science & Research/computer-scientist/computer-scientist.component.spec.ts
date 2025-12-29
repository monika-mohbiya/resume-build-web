import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerScientistComponent } from './computer-scientist.component';

describe('ComputerScientistComponent', () => {
  let component: ComputerScientistComponent;
  let fixture: ComponentFixture<ComputerScientistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerScientistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerScientistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
