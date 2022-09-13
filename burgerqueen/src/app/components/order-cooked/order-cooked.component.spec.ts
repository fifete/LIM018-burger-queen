import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCookedComponent } from './order-cooked.component';

describe('OrderCookedComponent', () => {
  let component: OrderCookedComponent;
  let fixture: ComponentFixture<OrderCookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCookedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
