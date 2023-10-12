import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSharingDialogComponent } from './form-sharing-dialog.component';

describe('FormSharingDialogComponent', () => {
  let component: FormSharingDialogComponent;
  let fixture: ComponentFixture<FormSharingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSharingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSharingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
