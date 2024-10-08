import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSpaceComponent } from './list-item-space.component';

describe('ListItemSpaceComponent', () => {
  let component: ListItemSpaceComponent;
  let fixture: ComponentFixture<ListItemSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListItemSpaceComponent]
    });
    fixture = TestBed.createComponent(ListItemSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
