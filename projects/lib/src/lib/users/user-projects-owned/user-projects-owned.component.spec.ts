import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectsOwnedComponent } from './user-projects-owned.component';

describe('UserProjectsOwnedComponent', () => {
  let component: UserProjectsOwnedComponent;
  let fixture: ComponentFixture<UserProjectsOwnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProjectsOwnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProjectsOwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
