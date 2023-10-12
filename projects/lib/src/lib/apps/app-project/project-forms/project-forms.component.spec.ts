import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFormsComponent } from './project-forms.component';

describe('ProjectFormsComponent', () => {
  let component: ProjectFormsComponent;
  let fixture: ComponentFixture<ProjectFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
