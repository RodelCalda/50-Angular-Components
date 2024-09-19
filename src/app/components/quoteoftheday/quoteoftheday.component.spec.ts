import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteofthedayComponent } from './quoteoftheday.component';

describe('QuoteofthedayComponent', () => {
  let component: QuoteofthedayComponent;
  let fixture: ComponentFixture<QuoteofthedayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteofthedayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteofthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
