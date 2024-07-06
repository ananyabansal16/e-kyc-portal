import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKycPageComponent } from './search-kyc-page.component';

describe('SearchKycPageComponent', () => {
  let component: SearchKycPageComponent;
  let fixture: ComponentFixture<SearchKycPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchKycPageComponent]
    });
    fixture = TestBed.createComponent(SearchKycPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
