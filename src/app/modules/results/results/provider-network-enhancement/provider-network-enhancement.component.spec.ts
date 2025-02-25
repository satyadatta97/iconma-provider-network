import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderNetworkEnhancementComponent } from './provider-network-enhancement.component';

describe('ProviderNetworkEnhancementComponent', () => {
  let component: ProviderNetworkEnhancementComponent;
  let fixture: ComponentFixture<ProviderNetworkEnhancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderNetworkEnhancementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderNetworkEnhancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
