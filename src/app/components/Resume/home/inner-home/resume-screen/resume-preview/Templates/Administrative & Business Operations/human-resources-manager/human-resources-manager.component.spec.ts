import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesManagerComponent } from './human-resources-manager.component';

describe('HumanResourcesManagerComponent', () => {
  let component: HumanResourcesManagerComponent;
  let fixture: ComponentFixture<HumanResourcesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanResourcesManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanResourcesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
