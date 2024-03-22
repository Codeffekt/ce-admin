import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingsComponent } from './processings.component';

describe('ProcessingsComponent', () => {
  let component: ProcessingsComponent;
  let fixture: ComponentFixture<ProcessingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessingsComponent]
    });
    fixture = TestBed.createComponent(ProcessingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
