import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMasksComponent } from './app-masks.component';

describe('AppMasksComponent', () => {
  let component: AppMasksComponent;
  let fixture: ComponentFixture<AppMasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
