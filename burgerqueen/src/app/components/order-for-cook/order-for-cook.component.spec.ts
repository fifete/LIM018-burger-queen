import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderForCookComponent } from './order-for-cook.component';
import { OrderTableComponent } from '../order-table/order-table.component';
import { orderItemsDummie } from 'src/assets/fakeFirestoreService'
import { FirestoreService } from 'src/app/services/firestore.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('OrderForCookComponent', () => {
  let component: OrderForCookComponent;
  let fixture: ComponentFixture<OrderForCookComponent>;
  // let fixtureChild
  let childComponent: OrderTableComponent
  let deliverDebugEl
  let mainEl
  let firestoreService
  let firestoreServiceStub

  beforeEach(async () => {
    // mock firestore
    firestoreServiceStub = {
      updateOrder: function (id, { state: state}) {
        orderItemsDummie[0].state = state
      },
      getOrdersByState: function (state) {
        return of([{
            payload: {
              doc: {
                data: function (){},
                id: '123'
              }
            }
        }])
      }
    }

    await TestBed.configureTestingModule({
      declarations: [ OrderForCookComponent, OrderTableComponent ],
      providers: [ 
        {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig},
        {provide:  FirestoreService, useValue: firestoreServiceStub },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderForCookComponent);
    // fixtureChild = TestBed.createComponent(OrderTableComponent);
    component = fixture.componentInstance;
    // component = fixtureChild.componentInstance;
    firestoreService = TestBed.inject(FirestoreService)
    fixture.detectChanges();
    // component.buttonAction = 'preparando'
    // component.state= 'preparando'
    component.orderItems= orderItemsDummie
    fixture.detectChanges();
    childComponent = fixture.debugElement.query(By.directive(OrderTableComponent)).componentInstance
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create childComponent', () => {
    expect(childComponent).toBeTruthy();
  });

  it('should call listOrdes() when component instantiates', () => {
    spyOn(component, 'listOrdes');
    component.ngOnInit();
    expect(component.listOrdes).toHaveBeenCalled();
  });

  it('should not display the table with state "preparando"', () => {
    mainEl = fixture.nativeElement.querySelector('main')
    fixture.detectChanges();
    console.log(mainEl);
    
    deliverDebugEl = fixture.debugElement.query(By.css('.deliver-btn'))   
    deliverDebugEl.triggerEventHandler('click', null)
    const test = mainEl.textContent.includes('Candas')
    expect(test).toBe(false);
  });
});
