import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectsSharedComponent } from './user-projects-apps.component';

describe('UserProjectsAppsComponent', () => {
  let component: UserProjectsSharedComponent;
  let fixture: ComponentFixture<UserProjectsSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProjectsSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProjectsSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
