import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemFormRootComponent } from './list-item-form-root.component';

describe('ListItemFormRootComponent', () => {
  let component: ListItemFormRootComponent;
  let fixture: ComponentFixture<ListItemFormRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemFormRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemFormRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
