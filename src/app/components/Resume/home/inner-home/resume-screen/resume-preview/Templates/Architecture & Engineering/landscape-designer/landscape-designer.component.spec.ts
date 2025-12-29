import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeDesignerComponent } from './landscape-designer.component';

describe('LandscapeDesignerComponent', () => {
  let component: LandscapeDesignerComponent;
  let fixture: ComponentFixture<LandscapeDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapeDesignerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandscapeDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
