import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHealthplanSuggestionsComponent } from './new-healthplan-suggestions.component';

describe('NewHealthplanSuggestionsComponent', () => {
  let component: NewHealthplanSuggestionsComponent;
  let fixture: ComponentFixture<NewHealthplanSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewHealthplanSuggestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHealthplanSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
