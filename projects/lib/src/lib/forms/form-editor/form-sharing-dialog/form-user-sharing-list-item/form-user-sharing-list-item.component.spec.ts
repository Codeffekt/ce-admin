import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserSharingListItemComponent } from './form-user-sharing-list-item.component';

describe('FormUserSharingListItemComponent', () => {
  let component: FormUserSharingListItemComponent;
  let fixture: ComponentFixture<FormUserSharingListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserSharingListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserSharingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
