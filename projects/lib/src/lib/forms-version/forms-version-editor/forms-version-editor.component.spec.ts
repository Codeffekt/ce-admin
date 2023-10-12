import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsVersionEditorComponent } from './forms-version-editor.component';

describe('FormsVersionEditorComponent', () => {
  let component: FormsVersionEditorComponent;
  let fixture: ComponentFixture<FormsVersionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsVersionEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsVersionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
