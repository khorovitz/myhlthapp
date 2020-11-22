import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqsymtomsComponent } from './seqsymtoms.component';

describe('SeqsymtomsComponent', () => {
  let component: SeqsymtomsComponent;
  let fixture: ComponentFixture<SeqsymtomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeqsymtomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeqsymtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
