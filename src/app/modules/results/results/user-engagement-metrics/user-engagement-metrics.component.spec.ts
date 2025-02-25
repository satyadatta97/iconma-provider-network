import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEngagementMetricsComponent } from './user-engagement-metrics.component';

describe('UserEngagementMetricsComponent', () => {
  let component: UserEngagementMetricsComponent;
  let fixture: ComponentFixture<UserEngagementMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEngagementMetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEngagementMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
