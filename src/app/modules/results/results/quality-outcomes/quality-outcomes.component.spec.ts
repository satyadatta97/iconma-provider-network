import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityOutcomesComponent } from './quality-outcomes.component';

describe('QualityOutcomesComponent', () => {
  let component: QualityOutcomesComponent;
  let fixture: ComponentFixture<QualityOutcomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityOutcomesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
