import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPropComponent } from './details-prop.component';

describe('DetailsPropComponent', () => {
  let component: DetailsPropComponent;
  let fixture: ComponentFixture<DetailsPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
