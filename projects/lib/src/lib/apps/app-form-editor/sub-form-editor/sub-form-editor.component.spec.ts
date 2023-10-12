import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormEditorComponent } from './sub-form-editor.component';

describe('SubFormEditorComponent', () => {
  let component: SubFormEditorComponent;
  let fixture: ComponentFixture<SubFormEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFormEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFormEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
