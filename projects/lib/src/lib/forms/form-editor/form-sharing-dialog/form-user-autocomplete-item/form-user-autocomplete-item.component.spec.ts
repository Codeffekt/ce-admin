import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserAutocompleteItemComponent } from './form-user-autocomplete-item.component';

describe('FormUserAutocompleteItemComponent', () => {
  let component: FormUserAutocompleteItemComponent;
  let fixture: ComponentFixture<FormUserAutocompleteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserAutocompleteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserAutocompleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
