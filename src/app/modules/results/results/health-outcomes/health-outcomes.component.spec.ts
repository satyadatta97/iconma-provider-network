import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthOutcomesComponent } from './health-outcomes.component';

describe('HealthOutcomesComponent', () => {
  let component: HealthOutcomesComponent;
  let fixture: ComponentFixture<HealthOutcomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthOutcomesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
