import { ComponentFixture, TestBed } from '@angular/core/testing';
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Este segundo test no funciona pero el tercero q es parecido si funciona
  it('should display the correct tabs name', () => {
    const expectedNavBarTabs = [ {textS: "RP", text: "Realizar pedido", link: "/order"}]
    fixture.detectChanges();
    component.navbarTabs = expectedNavBarTabs
    const hostElement: HTMLElement = fixture.nativeElement;

    // const anchorTabEl = fixture.nativeElement.querySelector('.nav-tab .link-text')
    const heroDe: HTMLElement = hostElement.querySelector('.nav-tab .link-text');
    // const heroEl = heroDe.nativeElement;
    console.log(heroDe);
    
    expect(heroDe.textContent).toContain(expectedNavBarTabs[0].text)
  });

  it('should show username and role from user db', () => {
    const userDataEl: HTMLElement = fixture.nativeElement.querySelector('.nav-item .link-text')
    fixture.detectChanges();
    const content = userDataEl.textContent;
    expect(content)
      .withContext('"User data is: "')
      .toContain(`${component.username}-${component.role}`);
  });


  /* async SignOut() {
    await this.auth.signOut()
    await this.router.navigate(['login']);
  } */
});
