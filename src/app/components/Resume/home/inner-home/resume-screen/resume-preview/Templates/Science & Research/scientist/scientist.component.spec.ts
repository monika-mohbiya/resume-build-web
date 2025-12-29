import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistComponent } from './scientist.component';

describe('ScientistComponent', () => {
  let component: ScientistComponent;
  let fixture: ComponentFixture<ScientistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScientistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
