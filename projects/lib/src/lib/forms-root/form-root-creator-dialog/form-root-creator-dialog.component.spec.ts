import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRootCreatorDialogComponent } from './form-root-creator-dialog.component';

describe('FormRootCreatorDialogComponent', () => {
  let component: FormRootCreatorDialogComponent;
  let fixture: ComponentFixture<FormRootCreatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRootCreatorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRootCreatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
