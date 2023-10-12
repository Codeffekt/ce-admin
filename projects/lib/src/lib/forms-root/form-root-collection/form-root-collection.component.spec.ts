import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRootCollectionComponent } from './form-root-collection.component';

describe('FormsRootCollectionComponent', () => {
  let component: FormRootCollectionComponent;
  let fixture: ComponentFixture<FormRootCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRootCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRootCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
