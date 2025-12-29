import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjunctProfessorComponent } from './adjunct-professor.component';

describe('AdjunctProfessorComponent', () => {
  let component: AdjunctProfessorComponent;
  let fixture: ComponentFixture<AdjunctProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjunctProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjunctProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
