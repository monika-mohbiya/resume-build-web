import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistComponent } from './chemist.component';

describe('ChemistComponent', () => {
  let component: ChemistComponent;
  let fixture: ComponentFixture<ChemistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
