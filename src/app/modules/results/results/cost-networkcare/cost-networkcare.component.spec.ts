import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostNetworkcareComponent } from './cost-networkcare.component';

describe('CostNetworkcareComponent', () => {
  let component: CostNetworkcareComponent;
  let fixture: ComponentFixture<CostNetworkcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostNetworkcareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostNetworkcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
