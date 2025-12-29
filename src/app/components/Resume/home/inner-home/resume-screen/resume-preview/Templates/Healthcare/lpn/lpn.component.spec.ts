import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPNComponent } from './lpn.component';

describe('LPNComponent', () => {
  let component: LPNComponent;
  let fixture: ComponentFixture<LPNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LPNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
