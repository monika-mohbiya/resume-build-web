import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGradRNComponent } from './new-grad-rn.component';

describe('NewGradRNComponent', () => {
  let component: NewGradRNComponent;
  let fixture: ComponentFixture<NewGradRNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGradRNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGradRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
