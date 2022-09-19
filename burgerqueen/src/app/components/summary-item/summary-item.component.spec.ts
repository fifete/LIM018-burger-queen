import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryItemComponent } from './summary-item.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SummaryItemComponent', () => {
  let component: SummaryItemComponent;
  let fixture: ComponentFixture<SummaryItemComponent>;
  let trashBtn: DebugElement
  let sumBtn: DebugElement
  let restBtn: DebugElement
  let menuItemDummie:{}
  let menuItemsDummie

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryItemComponent ],
      providers: [ {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryItemComponent);
    component = fixture.componentInstance;

    trashBtn = fixture.debugElement.query(By.css('fa-icon'))
    sumBtn = fixture.debugElement.query(By.css('span'))
    restBtn = fixture.debugElement.query(By.css('span:last-child'))

    menuItemDummie =  {
        "id": "JFD",
        "name" : "Jugo de frutas natural",
        "price" : "7",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663033271/JFD_ce6nhm.png',
        "category": "desayuno",
        "quantity": 2
    }
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
    component.itemsFromOrder = menuItemsDummie
    component.filteredItem = menuItemDummie 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete props when trash button is clicked', () => {
    const pickedProps = (({ HSH, HSA }) => ({ HSH, HSA }))(menuItemsDummie)
    trashBtn.triggerEventHandler('click', null)
    expect(component.itemsFromOrder).toEqual(pickedProps);
  });

  it('should change the quantity for the item JFD', () => {
    sumBtn.triggerEventHandler('click', null)
    sumBtn.triggerEventHandler('click', null)
    restBtn.triggerEventHandler('click', null)
    fixture.detectChanges();
    const quantityProp = menuItemsDummie['JFD'].quantity
    expect(quantityProp).toBe(3);
  });

  it('should display the subTotal price for the item JFD', () => {
    const sumItemTable = fixture.nativeElement.querySelector('td:nth-child(3n)')
    expect(sumItemTable.textContent).toBe('14');
  });
});
