import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemAccountComponent } from './list-item-account.component';

describe('ListItemAccountComponent', () => {
  let component: ListItemAccountComponent;
  let fixture: ComponentFixture<ListItemAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
