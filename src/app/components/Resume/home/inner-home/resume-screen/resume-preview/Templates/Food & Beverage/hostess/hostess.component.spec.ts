import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostessComponent } from './hostess.component';

describe('HostessComponent', () => {
  let component: HostessComponent;
  let fixture: ComponentFixture<HostessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
