import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreatorDialogComponent } from './project-creator-dialog.component';

describe('ProjectCreatorDialogComponent', () => {
  let component: ProjectCreatorDialogComponent;
  let fixture: ComponentFixture<ProjectCreatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreatorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
