import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTopbarComponent } from './forms-topbar.component';

describe('FormsTopbarComponent', () => {
  let component: FormsTopbarComponent;
  let fixture: ComponentFixture<FormsTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsTopbarComponent]
    });
    fixture = TestBed.createComponent(FormsTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
