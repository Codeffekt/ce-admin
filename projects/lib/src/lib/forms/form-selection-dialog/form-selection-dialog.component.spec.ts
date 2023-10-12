import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectionDialogComponent } from './form-selection-dialog.component';

describe('FormSelectionDialogComponent', () => {
  let component: FormSelectionDialogComponent;
  let fixture: ComponentFixture<FormSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSelectionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
