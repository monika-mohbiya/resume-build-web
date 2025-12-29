import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMTComponent } from './emt.component';

describe('EMTComponent', () => {
  let component: EMTComponent;
  let fixture: ComponentFixture<EMTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EMTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
