import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKycPageComponent } from './create-kyc-page.component';

describe('CreateKycPageComponent', () => {
  let component: CreateKycPageComponent;
  let fixture: ComponentFixture<CreateKycPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateKycPageComponent]
    });
    fixture = TestBed.createComponent(CreateKycPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
