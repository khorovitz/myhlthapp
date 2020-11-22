import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosymptomComponent } from './autosymptom.component';

describe('AutosymptomComponent', () => {
  let component: AutosymptomComponent;
  let fixture: ComponentFixture<AutosymptomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosymptomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
