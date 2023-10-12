import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserSharingsComponent } from './form-user-sharings.component';

describe('FormUserSharingsComponent', () => {
  let component: FormUserSharingsComponent;
  let fixture: ComponentFixture<FormUserSharingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserSharingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserSharingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
