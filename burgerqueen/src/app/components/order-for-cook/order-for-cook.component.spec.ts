import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderForCookComponent } from './order-for-cook.component';
import { OrderTableComponent } from '../order-table/order-table.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';
import { By } from '@angular/platform-browser';

  describe('OrderForCookComponent', () => {
  let component: OrderForCookComponent;
  let fixture: ComponentFixture<OrderForCookComponent>;
  let childComponent: OrderTableComponent

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ OrderForCookComponent, OrderTableComponent ],
      providers: [ 
        {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderForCookComponent);
    component = fixture.componentInstance;
    childComponent = fixture.debugElement.query(By.directive(OrderTableComponent)).componentInstance
    fixture.detectChanges();
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
});
