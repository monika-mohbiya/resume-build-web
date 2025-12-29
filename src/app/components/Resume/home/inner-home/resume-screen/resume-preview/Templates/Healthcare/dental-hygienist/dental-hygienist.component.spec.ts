import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalHygienistComponent } from './dental-hygienist.component';

describe('DentalHygienistComponent', () => {
  let component: DentalHygienistComponent;
  let fixture: ComponentFixture<DentalHygienistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentalHygienistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentalHygienistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
