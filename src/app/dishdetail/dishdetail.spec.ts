import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dishdetail } from './dishdetail';

describe('Dishdetail', () => {
  let component: Dishdetail;
  let fixture: ComponentFixture<Dishdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dishdetail],
    }).compileComponents();

    fixture = TestBed.createComponent(Dishdetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
