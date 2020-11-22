import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrscreenComponent } from './drscreen.component';

describe('DrscreenComponent', () => {
  let component: DrscreenComponent;
  let fixture: ComponentFixture<DrscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
