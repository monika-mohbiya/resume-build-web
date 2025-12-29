import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCoordinatorComponent } from './project-coordinator.component';

describe('ProjectCoordinatorComponent', () => {
  let component: ProjectCoordinatorComponent;
  let fixture: ComponentFixture<ProjectCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCoordinatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
