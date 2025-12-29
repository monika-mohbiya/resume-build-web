import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmetologistComponent } from './cosmetologist.component';

describe('CosmetologistComponent', () => {
  let component: CosmetologistComponent;
  let fixture: ComponentFixture<CosmetologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosmetologistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmetologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
