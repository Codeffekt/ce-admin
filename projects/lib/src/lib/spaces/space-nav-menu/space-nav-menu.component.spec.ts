import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceNavMenuComponent } from './space-nav-menu.component';

describe('SpaceNavMenuComponent', () => {
  let component: SpaceNavMenuComponent;
  let fixture: ComponentFixture<SpaceNavMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpaceNavMenuComponent]
    });
    fixture = TestBed.createComponent(SpaceNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
