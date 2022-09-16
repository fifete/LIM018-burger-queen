import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderCookedComponent } from './order-cooked.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';

describe('OrderCookedComponent', () => {
  let component: OrderCookedComponent;
  let fixture: ComponentFixture<OrderCookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCookedComponent ],
      providers: [ {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig}]
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
