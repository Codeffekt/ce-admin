import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRootTopbarComponent } from './form-root-topbar.component';

describe('FormRootTopbarComponent', () => {
  let component: FormRootTopbarComponent;
  let fixture: ComponentFixture<FormRootTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRootTopbarComponent]
    });
    fixture = TestBed.createComponent(FormRootTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
