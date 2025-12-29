import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialServicesWorkerComponent } from './social-services-worker.component';

describe('SocialServicesWorkerComponent', () => {
  let component: SocialServicesWorkerComponent;
  let fixture: ComponentFixture<SocialServicesWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialServicesWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialServicesWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
