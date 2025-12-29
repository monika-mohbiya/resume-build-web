import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstheticianComponent } from './esthetician.component';

describe('EstheticianComponent', () => {
  let component: EstheticianComponent;
  let fixture: ComponentFixture<EstheticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstheticianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstheticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
