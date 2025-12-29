import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitressComponent } from './waitress.component';

describe('WaitressComponent', () => {
  let component: WaitressComponent;
  let fixture: ComponentFixture<WaitressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
