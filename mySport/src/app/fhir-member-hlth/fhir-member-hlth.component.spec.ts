import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhirMemberHlthComponent } from './fhir-member-hlth.component';

describe('FhirMemberHlthComponent', () => {
  let component: FhirMemberHlthComponent;
  let fixture: ComponentFixture<FhirMemberHlthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhirMemberHlthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FhirMemberHlthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
