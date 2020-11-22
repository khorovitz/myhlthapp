import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembselComponent } from './membsel.component';

describe('MembselComponent', () => {
  let component: MembselComponent;
  let fixture: ComponentFixture<MembselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
