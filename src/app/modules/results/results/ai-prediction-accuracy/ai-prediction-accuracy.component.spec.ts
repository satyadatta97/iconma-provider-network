import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPredictionAccuracyComponent } from './ai-prediction-accuracy.component';

describe('AiPredictionAccuracyComponent', () => {
  let component: AiPredictionAccuracyComponent;
  let fixture: ComponentFixture<AiPredictionAccuracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiPredictionAccuracyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPredictionAccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
