import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAlignmentComponent } from './provider-alignment.component';

describe('ProviderAlignmentComponent', () => {
  let component: ProviderAlignmentComponent;
  let fixture: ComponentFixture<ProviderAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderAlignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
