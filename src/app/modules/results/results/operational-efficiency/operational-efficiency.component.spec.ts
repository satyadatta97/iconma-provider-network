import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalEfficiencyComponent } from './operational-efficiency.component';

describe('OperationalEfficiencyComponent', () => {
  let component: OperationalEfficiencyComponent;
  let fixture: ComponentFixture<OperationalEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationalEfficiencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
