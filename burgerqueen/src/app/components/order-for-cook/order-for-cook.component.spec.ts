import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderForCookComponent } from './order-for-cook.component';

describe('OrderForCookComponent', () => {
  let component: OrderForCookComponent;
  let fixture: ComponentFixture<OrderForCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderForCookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderForCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
