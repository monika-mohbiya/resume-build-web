import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRGeneralistComponent } from './hr-generalist.component';

describe('HRGeneralistComponent', () => {
  let component: HRGeneralistComponent;
  let fixture: ComponentFixture<HRGeneralistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HRGeneralistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRGeneralistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
