import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthtenticationService } from 'src/app/services/authtentication.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let angularFirestore
  let authService

  beforeEach( async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [ 
       {provide:  FirestoreService, useValue: {} },
       {provide:  AuthtenticationService, useValue: {} },
        // {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig}
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    angularFirestore = TestBed.inject(FirestoreService)
    authService = TestBed.inject(AuthtenticationService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('success', () => {
    // const angularFirestore = new FirestoreService(AngularFirestore)
    spyOn(angularFirestore, 'getUserByUid').and.callThrough()
    spyOn(authService, 'userData').and.returnValue({uid: "nxrfX3NsEL85ixGKZHx3"})
    console.log(authService.userData)
  
    // expect(service.method()).toEqual(...);
    //expect(angularFirestore.getUserByUid).toHaveBeenCalled();
    expect(angularFirestore.getUserByUid("nxrfX3NsEL85ixGKZHx3")).toHaveBeenCalled();
  });
});
