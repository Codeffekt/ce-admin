import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemFormVersionComponent } from './list-item-form-version.component';

describe('ListItemFormVersionComponent', () => {
  let component: ListItemFormVersionComponent;
  let fixture: ComponentFixture<ListItemFormVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemFormVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemFormVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
