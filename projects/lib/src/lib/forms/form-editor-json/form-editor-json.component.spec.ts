import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorJsonDialogComponent } from './form-editor-json.component';

describe('FormEditorJsonComponent', () => {
  let component: FormEditorJsonDialogComponent;
  let fixture: ComponentFixture<FormEditorJsonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorJsonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorJsonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
