import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRootEditorComponent } from './form-root-editor.component';

describe('FormRootEditorComponent', () => {
  let component: FormRootEditorComponent;
  let fixture: ComponentFixture<FormRootEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRootEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRootEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
