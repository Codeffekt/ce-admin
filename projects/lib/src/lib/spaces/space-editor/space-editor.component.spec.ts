import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceEditorComponent } from './space-editor.component';

describe('SpaceEditorComponent', () => {
  let component: SpaceEditorComponent;
  let fixture: ComponentFixture<SpaceEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceEditorComponent]
    });
    fixture = TestBed.createComponent(SpaceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
