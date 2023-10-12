import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatorDialogComponent } from './form-creator-dialog.component';

describe('FormCreatorDialogComponent', () => {
  let component: FormCreatorDialogComponent;
  let fixture: ComponentFixture<FormCreatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
