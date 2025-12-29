import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementaryTeacherComponent } from './elementary-teacher.component';

describe('ElementaryTeacherComponent', () => {
  let component: ElementaryTeacherComponent;
  let fixture: ComponentFixture<ElementaryTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementaryTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementaryTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
