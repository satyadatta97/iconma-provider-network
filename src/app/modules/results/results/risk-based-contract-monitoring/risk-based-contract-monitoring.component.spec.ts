import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskBasedContractMonitoringComponent } from './risk-based-contract-monitoring.component';

describe('RiskBasedContractMonitoringComponent', () => {
  let component: RiskBasedContractMonitoringComponent;
  let fixture: ComponentFixture<RiskBasedContractMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskBasedContractMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskBasedContractMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
