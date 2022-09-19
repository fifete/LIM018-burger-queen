import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let expectedMenuITems
  let breakfastBtn
  let LunchDinnerBtn

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    breakfastBtn = fixture.debugElement.query(By.css('app-button-menu'))   
    LunchDinnerBtn = fixture.debugElement.query(By.css('app-button-menu:last-child'))   
    // Fake input for instance .nav-tab elements
    expectedMenuITems = [ 
      {
        "id": "JFD",
        "name" : "Jugo de frutas natural",
        "price" : "7",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663033271/JFD_ce6nhm.png',
        "category": "desayuno",
        "quantity": 1
      },
      {
        "id": "HSH",
        "name" : "Hamburguesa simple",
        "price" : "10",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/HSH_mk9pkq.png',
        "category": "hamburguesas",
        "quantity": 1
      },
      {
        "id": "HSA",
        "name" : "Aros de cebolla",
        "price" : "5",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/HSA_udyfqg.png',
        "category": "acompañamientos",
        "quantity": 1
      }
    ]

    component.menu = expectedMenuITems
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display items with category "breakfast"', () => {
    breakfastBtn.triggerEventHandler('click', null)
    fixture.detectChanges();
    const [expectedBreakfastITem] = component.items
    expect(expectedBreakfastITem).toEqual(expectedMenuITems[0])
  });

  it('should display items with category "lunch and dinner"', () => {
    LunchDinnerBtn.triggerEventHandler('click', null)
    fixture.detectChanges();
    const expectedBreakfastITem = component.items
    expect(expectedBreakfastITem).toEqual(expectedMenuITems.slice(1))
  });

  it("should create correct number of app-menu-item's instances", () => {
    let menuItemsArr = []
    fixture.detectChanges();
    LunchDinnerBtn.triggerEventHandler('click', null)
    fixture.detectChanges();
    const menuItems = fixture.nativeElement.querySelectorAll('app-menu-item')
    
    for(let item of menuItems) {
      menuItemsArr.push(item);
    }

    fixture.detectChanges();
    expect(menuItemsArr.length).toEqual(2);
  });

});
