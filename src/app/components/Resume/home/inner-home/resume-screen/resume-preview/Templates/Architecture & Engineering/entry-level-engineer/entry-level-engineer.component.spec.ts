import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLevelEngineerComponent } from './entry-level-engineer.component';

describe('EntryLevelEngineerComponent', () => {
  let component: EntryLevelEngineerComponent;
  let fixture: ComponentFixture<EntryLevelEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryLevelEngineerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryLevelEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
