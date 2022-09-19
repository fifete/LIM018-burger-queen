import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderSummaryComponent } from './order-summary.component';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';
import { By } from '@angular/platform-browser';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;
  let sendOrderSpy
  let confirmOrderBtn
  let cancelOrderBtn
  let menuItemsDummie
  let menuItemService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummaryComponent ],
      providers: [ 
        {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig},
        {provide:  MenuItemServiceTs}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    menuItemService = TestBed.inject(MenuItemServiceTs)

    confirmOrderBtn = fixture.debugElement.query(By.css('app-button'))                                    
    cancelOrderBtn = fixture.debugElement.query(By.css('app-button:last-child'))                                    
    sendOrderSpy = spyOn(component, 'sendOrder')
    menuItemsDummie = { 
      JFD: {
        "id": "JFD",
        "name" : "Jugo de frutas natural",
        "price" : "7",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663033271/JFD_ce6nhm.png',
        "category": "desayuno",
        "quantity": 2
      },
      HSH: {
        "id": "HSH",
        "name" : "Hamburguesa simple",
        "price" : "10",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/HSH_mk9pkq.png',
        "category": "hamburguesas",
        "quantity": 1
      },
      HSA: {
        "id": "HSA",
        "name" : "Aros de cebolla",
        "price" : "5",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/HSA_udyfqg.png',
        "category": "acompañamientos",
        "quantity": 3
      }
    }

    component.filteredItems = menuItemsDummie

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call sendOrder() when confirm btn is clicked', () => {
    confirmOrderBtn.triggerEventHandler('click', null)
    expect(sendOrderSpy.calls.count()).toBe(1);
  });

  it('should return true if filteredItems has more than 1 key', () => {
    expect(component.isArrayEmpty()).toBe(false);
  });

  it('should return the correct total price for the menuItemsDummie', () => {
    expect(component.calcTotal()).toBe(39);
  });

  it('should return the correct total price for an empty object', () => {
    component.filteredItems = {}
    fixture.detectChanges()
    expect(component.calcTotal()).toBe(0);
  });

  it('should remove all keys from filteredItems', () => {
    cancelOrderBtn.triggerEventHandler('click', null)
    expect(menuItemService.filteredItems).toEqual({});
  });

  it('should create the correct number of instances of app-summary-item component', () => {
    const rowMenuItem = fixture.nativeElement.querySelectorAll('app-summary-item')
    const menuItemsArr = []
    for(let row of rowMenuItem){
      menuItemsArr.push(row)
    }
    expect(menuItemsArr.length).toBe(3);
  });
});
