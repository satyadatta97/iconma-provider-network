import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostSavingsNetwrokComponent } from './cost-savings-netwrok.component';

describe('CostSavingsNetwrokComponent', () => {
  let component: CostSavingsNetwrokComponent;
  let fixture: ComponentFixture<CostSavingsNetwrokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostSavingsNetwrokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostSavingsNetwrokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
