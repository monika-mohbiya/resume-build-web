import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingCoordinatorComponent } from './marketing-coordinator.component';

describe('MarketingCoordinatorComponent', () => {
  let component: MarketingCoordinatorComponent;
  let fixture: ComponentFixture<MarketingCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingCoordinatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
