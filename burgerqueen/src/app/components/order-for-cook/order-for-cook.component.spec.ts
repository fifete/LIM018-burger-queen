import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderForCookComponent } from './order-for-cook.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';

describe('OrderForCookComponent', () => {
  let component: OrderForCookComponent;
  let fixture: ComponentFixture<OrderForCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderForCookComponent ],
      providers: [ {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig}]
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
