import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRManagerComponent } from './hr-manager.component';

describe('HRManagerComponent', () => {
  let component: HRManagerComponent;
  let fixture: ComponentFixture<HRManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HRManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
