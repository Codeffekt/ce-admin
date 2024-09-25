import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRootSelectionDialogComponent } from './forms-root-selection-dialog.component';

describe('FormsRootSelectionDialogComponent', () => {
  let component: FormsRootSelectionDialogComponent;
  let fixture: ComponentFixture<FormsRootSelectionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsRootSelectionDialogComponent]
    });
    fixture = TestBed.createComponent(FormsRootSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
