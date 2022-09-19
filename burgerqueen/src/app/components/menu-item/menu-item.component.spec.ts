import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service';
import { MenuItemComponent } from './menu-item.component';
import { Item } from 'src/assets/menu';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;
  let expectedMenuItem: Item
  let addItemBtn: DebugElement
  let menuItemService
  let menuItemToAdd: {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemComponent ],
      providers: [ 
        {provide:  MenuItemServiceTs}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    menuItemService = TestBed.inject(MenuItemServiceTs)

    addItemBtn = fixture.debugElement.query(By.css('.add-menu-item'))   

    // Fake 
    expectedMenuItem = {
        "id": "JFD",
        "name" : "Jugo de frutas natural",
        "price" : "7",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663033271/JFD_ce6nhm.png',
        "category": "desayuno",
        "quantity": 1
    }

    menuItemToAdd = {
      JFD: expectedMenuItem
    }

    component.item = expectedMenuItem
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the item to the filteredItems object', () => {
    addItemBtn.triggerEventHandler('click', null)
    fixture.detectChanges();
    expect(menuItemService.filteredItems).toEqual(menuItemToAdd);
  });
});
