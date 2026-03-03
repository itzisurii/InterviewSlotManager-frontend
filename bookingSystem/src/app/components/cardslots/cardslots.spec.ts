import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardslots } from './cardslots';

describe('Cardslots', () => {
  let component: Cardslots;
  let fixture: ComponentFixture<Cardslots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardslots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardslots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
