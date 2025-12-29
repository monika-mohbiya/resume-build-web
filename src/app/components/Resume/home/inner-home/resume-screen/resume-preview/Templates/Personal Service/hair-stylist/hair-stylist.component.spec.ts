import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairStylistComponent } from './hair-stylist.component';

describe('HairStylistComponent', () => {
  let component: HairStylistComponent;
  let fixture: ComponentFixture<HairStylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairStylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
