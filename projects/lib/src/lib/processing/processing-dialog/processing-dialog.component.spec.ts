import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingDialogComponent } from './processing-dialog.component';

describe('ProcessingDialogComponent', () => {
  let component: ProcessingDialogComponent;
  let fixture: ComponentFixture<ProcessingDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessingDialogComponent]
    });
    fixture = TestBed.createComponent(ProcessingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
