import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsersSharedComponent } from './form-users-shared.component';

describe('FormAccountsComponent', () => {
  let component: FormUsersSharedComponent;
  let fixture: ComponentFixture<FormUsersSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUsersSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUsersSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
