import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyComponent } from './nanny.component';

describe('NannyComponent', () => {
  let component: NannyComponent;
  let fixture: ComponentFixture<NannyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NannyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NannyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
