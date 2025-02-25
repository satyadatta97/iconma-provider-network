import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientScoreComponent } from './patient-score.component';

describe('PatientScoreComponent', () => {
  let component: PatientScoreComponent;
  let fixture: ComponentFixture<PatientScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
