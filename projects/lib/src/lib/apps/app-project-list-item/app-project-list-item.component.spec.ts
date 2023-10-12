import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProjectListItemComponent } from './app-project-list-item.component';

describe('AppProjectListItemComponent', () => {
  let component: AppProjectListItemComponent;
  let fixture: ComponentFixture<AppProjectListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProjectListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProjectListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
