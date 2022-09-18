import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthtenticationService } from 'src/app/services/authtentication.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let firestoreService
  let authService
  let firestoreServiceStub: Partial<any>
  let authServiceStub: Partial<any>
  let expectedNavBarTabs
  // let tabsTitleArr = []

  beforeEach( async () => {
    //mocking services
    firestoreServiceStub = {
      getUserByUid: function (n) {
        return of({
          username: 'Stich',
          role: 'Chef'
        })
      }
    }

    authServiceStub = {
      userData: {uid: '1'}
    }
    
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [
       {provide:  FirestoreService, useValue: firestoreServiceStub },
       {provide:  AuthtenticationService, useValue: authServiceStub },
        // {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig}
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    firestoreService = TestBed.inject(FirestoreService)
    authService = TestBed.inject(AuthtenticationService)

    // Fake input for instance .nav-tab elements
    expectedNavBarTabs = [ 
      {textS: "RP", text: "Realizar pedido", link: "/order"},
      {textS: "PE", text: "Pedido por entregar", link: "/deliver"}
    ]
    component.navbarTabs = expectedNavBarTabs
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the right .nav-tab instances', () => {
    fixture.detectChanges();
    const heroTest = fixture.nativeElement.querySelectorAll('.nav-tab')
    expect(heroTest.length).toBe(2)
  });

  it('should display the correct tabs name', () => {
    let tabsTitleArr = []
    fixture.detectChanges();
    const tabsTitle = fixture.nativeElement.querySelectorAll('.nav-tab .link-text')
    
    for(let title of tabsTitle) {
      tabsTitleArr.push(title.innerText);
    }

    fixture.detectChanges();
    expect(tabsTitleArr).toEqual(["Realizar pedido", "Pedido por entregar"])
  });

  it('should show username and role from user db', () => {
    const userDataEl: HTMLElement = fixture.nativeElement.querySelector('.nav-item .link-text')
    fixture.detectChanges();
    expect(userDataEl.textContent)
      .withContext('"User data is: "')
      .toContain(`${component.username}-${component.role}`);
  });
});
