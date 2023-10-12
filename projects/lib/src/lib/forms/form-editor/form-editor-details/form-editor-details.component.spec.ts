import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorDetailsComponent } from './form-editor-details.component';

describe('FormEditorDetailsComponent', () => {
  let component: FormEditorDetailsComponent;
  let fixture: ComponentFixture<FormEditorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
