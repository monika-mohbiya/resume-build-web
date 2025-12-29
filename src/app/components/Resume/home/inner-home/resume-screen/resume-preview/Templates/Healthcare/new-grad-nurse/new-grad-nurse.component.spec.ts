import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGradNurseComponent } from './new-grad-nurse.component';

describe('NewGradNurseComponent', () => {
  let component: NewGradNurseComponent;
  let fixture: ComponentFixture<NewGradNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGradNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGradNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
