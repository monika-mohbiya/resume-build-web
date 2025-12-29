import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesGeneralistComponent } from './human-resources-generalist.component';

describe('HumanResourcesGeneralistComponent', () => {
  let component: HumanResourcesGeneralistComponent;
  let fixture: ComponentFixture<HumanResourcesGeneralistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanResourcesGeneralistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanResourcesGeneralistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
