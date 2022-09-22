import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';
import { OrdersHistoryComponent } from './orders-history.component';

describe('OrdersHistoryComponent', () => {
  let component: OrdersHistoryComponent;
  let fixture: ComponentFixture<OrdersHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersHistoryComponent ],
      providers: [ 
        {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listOrdes when component is instantiate', () => {
    spyOn(component, 'listOrdes');
    component.ngOnInit();
    expect(component.listOrdes).toHaveBeenCalled();
  });

  it('should display correct hrs elapsed', () => {
    const initial = '18:00'
    const final = '20:05'
    const timeElapsed = component.getTime(initial, final)
    expect(timeElapsed).toBe('2:05 hrs');
  });

  it('should display correct minutes elapsed', () => {
    const initial = '19:50'
    const final = '20:05'
    const timeElapsed = component.getTime(initial, final)
    expect(timeElapsed).toBe('15 min');
  });
});
