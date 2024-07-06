import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTypeCreateComponent } from './client-type-create.component';

describe('ClientTypeCreateComponent', () => {
  let component: ClientTypeCreateComponent;
  let fixture: ComponentFixture<ClientTypeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientTypeCreateComponent]
    });
    fixture = TestBed.createComponent(ClientTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
