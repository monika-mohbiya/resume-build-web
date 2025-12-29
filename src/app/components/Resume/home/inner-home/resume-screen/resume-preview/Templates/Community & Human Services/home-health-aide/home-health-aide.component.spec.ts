import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHealthAideComponent } from './home-health-aide.component';

describe('HomeHealthAideComponent', () => {
  let component: HomeHealthAideComponent;
  let fixture: ComponentFixture<HomeHealthAideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHealthAideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHealthAideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
