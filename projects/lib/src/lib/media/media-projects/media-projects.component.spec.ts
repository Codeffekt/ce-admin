import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaProjectsComponent } from './media-projects.component';

describe('MediaProjectsComponent', () => {
  let component: MediaProjectsComponent;
  let fixture: ComponentFixture<MediaProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
