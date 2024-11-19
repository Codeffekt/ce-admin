import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceEntriesComponent } from './space-entries.component';

describe('SpaceEntriesComponent', () => {
  let component: SpaceEntriesComponent;
  let fixture: ComponentFixture<SpaceEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceEntriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
