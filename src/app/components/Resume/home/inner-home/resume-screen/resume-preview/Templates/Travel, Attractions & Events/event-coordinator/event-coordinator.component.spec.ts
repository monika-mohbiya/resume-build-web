import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCoordinatorComponent } from './event-coordinator.component';

describe('EventCoordinatorComponent', () => {
  let component: EventCoordinatorComponent;
  let fixture: ComponentFixture<EventCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCoordinatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
