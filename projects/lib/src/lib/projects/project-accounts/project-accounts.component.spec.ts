import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAccountsComponent } from './project-accounts.component';

describe('ProjectAccountsComponent', () => {
  let component: ProjectAccountsComponent;
  let fixture: ComponentFixture<ProjectAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
