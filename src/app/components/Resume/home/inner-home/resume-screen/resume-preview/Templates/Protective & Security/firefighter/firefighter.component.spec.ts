import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefighterComponent } from './firefighter.component';

describe('FirefighterComponent', () => {
  let component: FirefighterComponent;
  let fixture: ComponentFixture<FirefighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirefighterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirefighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
