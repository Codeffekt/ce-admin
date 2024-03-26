import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsToolbarComponent } from './forms-toolbar.component';

describe('FormsToolbarComponent', () => {
  let component: FormsToolbarComponent;
  let fixture: ComponentFixture<FormsToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsToolbarComponent]
    });
    fixture = TestBed.createComponent(FormsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
