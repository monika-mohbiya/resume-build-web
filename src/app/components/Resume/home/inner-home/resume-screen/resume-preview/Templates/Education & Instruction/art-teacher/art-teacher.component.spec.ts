import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTeacherComponent } from './art-teacher.component';

describe('ArtTeacherComponent', () => {
  let component: ArtTeacherComponent;
  let fixture: ComponentFixture<ArtTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
