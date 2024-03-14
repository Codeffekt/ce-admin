import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTopbarComponent } from './project-topbar.component';

describe('ProjectsTopbarComponent', () => {
  let component: ProjectTopbarComponent;
  let fixture: ComponentFixture<ProjectTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTopbarComponent]
    });
    fixture = TestBed.createComponent(ProjectTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
