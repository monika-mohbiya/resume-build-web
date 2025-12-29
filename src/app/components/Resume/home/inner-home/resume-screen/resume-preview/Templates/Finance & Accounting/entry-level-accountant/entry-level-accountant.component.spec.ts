import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLevelAccountantComponent } from './entry-level-accountant.component';

describe('EntryLevelAccountantComponent', () => {
  let component: EntryLevelAccountantComponent;
  let fixture: ComponentFixture<EntryLevelAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryLevelAccountantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryLevelAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
