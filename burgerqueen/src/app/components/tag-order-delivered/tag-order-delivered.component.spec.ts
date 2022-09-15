import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagOrderDeliveredComponent } from './tag-order-delivered.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';

describe('TagOrderDeliveredComponent', () => {
  let component: TagOrderDeliveredComponent;
  let fixture: ComponentFixture<TagOrderDeliveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagOrderDeliveredComponent ],
      providers: [ {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagOrderDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
