import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemComponent } from './menu-item.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';

xdescribe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemComponent ],
      providers: [ {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
