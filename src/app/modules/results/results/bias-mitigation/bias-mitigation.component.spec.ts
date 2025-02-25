import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiasMitigationComponent } from './bias-mitigation.component';

describe('BiasMitigationComponent', () => {
  let component: BiasMitigationComponent;
  let fixture: ComponentFixture<BiasMitigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiasMitigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiasMitigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
