import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNAComponent } from './cna.component';

describe('CNAComponent', () => {
  let component: CNAComponent;
  let fixture: ComponentFixture<CNAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CNAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
