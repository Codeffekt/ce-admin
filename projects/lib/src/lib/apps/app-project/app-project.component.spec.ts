import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProjectComponent } from './app-project.component';

describe('AppProjectComponent', () => {
  let component: AppProjectComponent;
  let fixture: ComponentFixture<AppProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
