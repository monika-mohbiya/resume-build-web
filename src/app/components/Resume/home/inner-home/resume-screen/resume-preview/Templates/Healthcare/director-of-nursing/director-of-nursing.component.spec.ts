import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOfNursingComponent } from './director-of-nursing.component';

describe('DirectorOfNursingComponent', () => {
  let component: DirectorOfNursingComponent;
  let fixture: ComponentFixture<DirectorOfNursingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorOfNursingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorOfNursingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
