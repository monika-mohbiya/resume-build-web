import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketerComponent } from './digital-marketer.component';

describe('DigitalMarketerComponent', () => {
  let component: DigitalMarketerComponent;
  let fixture: ComponentFixture<DigitalMarketerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalMarketerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMarketerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
