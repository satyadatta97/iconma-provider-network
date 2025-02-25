import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';
import { AiPredictionAccuracyComponent } from './results/ai-prediction-accuracy/ai-prediction-accuracy.component';
import { BiasMitigationComponent } from './results/bias-mitigation/bias-mitigation.component';
import { CostNetworkcareComponent } from './results/cost-networkcare/cost-networkcare.component';
import { HealthOutcomesComponent } from './results/health-outcomes/health-outcomes.component';
import { NewHealthplanSuggestionsComponent } from './results/new-healthplan-suggestions/new-healthplan-suggestions.component';
import { OperationalEfficiencyComponent } from './results/operational-efficiency/operational-efficiency.component';
import { ProviderAlignmentComponent } from './results/provider-alignment/provider-alignment.component';
import { ProviderNetworkEnhancementComponent } from './results/provider-network-enhancement/provider-network-enhancement.component';
import { QualityOutcomesComponent } from './results/quality-outcomes/quality-outcomes.component';
import { RiskBasedContractMonitoringComponent } from './results/risk-based-contract-monitoring/risk-based-contract-monitoring.component';
import { UserEngagementMetricsComponent } from './results/user-engagement-metrics/user-engagement-metrics.component';
import { UserSatisfactionComponent } from './results/user-satisfaction/user-satisfaction.component';
import { PatientScoreComponent } from './results/quality-outcomes/patient-score/patient-score.component';
import { CostSavingsNetwrokComponent } from './results/cost-networkcare/cost-savings-netwrok/cost-savings-netwrok.component';




@NgModule({
  declarations: [
    //ResultsComponent   
    AiPredictionAccuracyComponent,BiasMitigationComponent,ResultsComponent, CostNetworkcareComponent, HealthOutcomesComponent, NewHealthplanSuggestionsComponent, OperationalEfficiencyComponent, ProviderAlignmentComponent, ProviderNetworkEnhancementComponent, QualityOutcomesComponent, RiskBasedContractMonitoringComponent, UserEngagementMetricsComponent, UserSatisfactionComponent, PatientScoreComponent, CostSavingsNetwrokComponent,
    
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
  ]
})
export class ResultsModule { }
