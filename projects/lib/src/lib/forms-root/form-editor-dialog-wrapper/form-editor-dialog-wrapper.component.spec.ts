import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorDialogWrapperComponent } from './form-editor-dialog-wrapper.component';

describe('FormEditorDialogWrapperComponent', () => {
  let component: FormEditorDialogWrapperComponent;
  let fixture: ComponentFixture<FormEditorDialogWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorDialogWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorDialogWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
