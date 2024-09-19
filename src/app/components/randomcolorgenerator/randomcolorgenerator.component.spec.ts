import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcolorgeneratorComponent } from './randomcolorgenerator.component';

describe('RandomcolorgeneratorComponent', () => {
  let component: RandomcolorgeneratorComponent;
  let fixture: ComponentFixture<RandomcolorgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomcolorgeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomcolorgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
