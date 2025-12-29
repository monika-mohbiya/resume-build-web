import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCoordinatorComponent } from './program-coordinator.component';

describe('ProgramCoordinatorComponent', () => {
  let component: ProgramCoordinatorComponent;
  let fixture: ComponentFixture<ProgramCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramCoordinatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
