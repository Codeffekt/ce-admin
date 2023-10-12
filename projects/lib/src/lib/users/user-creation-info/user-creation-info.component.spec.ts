import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationInfoComponent } from './user-creation-info.component';

describe('UserCreationInfoComponent', () => {
  let component: UserCreationInfoComponent;
  let fixture: ComponentFixture<UserCreationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
