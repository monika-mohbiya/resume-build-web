import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSNNursingComponent } from './bsn-nursing.component';

describe('BSNNursingComponent', () => {
  let component: BSNNursingComponent;
  let fixture: ComponentFixture<BSNNursingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BSNNursingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BSNNursingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
