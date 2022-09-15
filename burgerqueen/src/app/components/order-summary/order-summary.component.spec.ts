import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderSummaryComponent } from './order-summary.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummaryComponent ],
      providers: [ {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
