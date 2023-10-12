import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemProjectComponent } from './list-item-project.component';

describe('ListItemProjectComponent', () => {
  let component: ListItemProjectComponent;
  let fixture: ComponentFixture<ListItemProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
