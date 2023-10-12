import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorToolbarComponent } from './form-editor-toolbar.component';

describe('FormEditorToolbarComponent', () => {
  let component: FormEditorToolbarComponent;
  let fixture: ComponentFixture<FormEditorToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
