import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsVersionComponent } from './forms-version.component';

describe('FormsVersionComponent', () => {
  let component: FormsVersionComponent;
  let fixture: ComponentFixture<FormsVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
