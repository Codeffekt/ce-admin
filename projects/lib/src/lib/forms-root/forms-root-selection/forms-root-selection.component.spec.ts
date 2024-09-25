import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRootSelectionComponent } from './forms-root-selection.component';

describe('FormsRootSelectionComponent', () => {
  let component: FormsRootSelectionComponent;
  let fixture: ComponentFixture<FormsRootSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsRootSelectionComponent]
    });
    fixture = TestBed.createComponent(FormsRootSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
