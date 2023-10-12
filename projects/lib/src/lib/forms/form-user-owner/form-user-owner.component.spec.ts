import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserOwnerComponent } from './form-user-owner.component';

describe('FormUserOwnerComponent', () => {
  let component: FormUserOwnerComponent;
  let fixture: ComponentFixture<FormUserOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
