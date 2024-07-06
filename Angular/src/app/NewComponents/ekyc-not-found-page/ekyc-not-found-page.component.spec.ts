import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKycNotFoundPageComponent } from './ekyc-not-found-page.component';

describe('EKycNotFoundPageComponent', () => {
  let component: EKycNotFoundPageComponent;
  let fixture: ComponentFixture<EKycNotFoundPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EKycNotFoundPageComponent]
    });
    fixture = TestBed.createComponent(EKycNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
