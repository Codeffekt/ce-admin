import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRunnerComponent } from './app-runner.component';

describe('AppRunnerComponent', () => {
  let component: AppRunnerComponent;
  let fixture: ComponentFixture<AppRunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRunnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
