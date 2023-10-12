import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormEditorComponent } from './app-form-editor.component';

describe('AppFormEditorComponent', () => {
  let component: AppFormEditorComponent;
  let fixture: ComponentFixture<AppFormEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
