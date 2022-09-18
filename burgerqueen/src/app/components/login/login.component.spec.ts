import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthtenticationService } from 'src/app/services/authtentication.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService
  let SignInSpy
  let signInBtnDe
  let errorTextEl

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('authService', ['SignIn'])
    SignInSpy = authServiceSpy.SignIn

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ 
        {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig},
        {provide:  AuthtenticationService, useValue: authServiceSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthtenticationService)
    fixture.detectChanges();

    signInBtnDe = fixture.debugElement.query(By.css('button'))                                    
    errorTextEl = fixture.nativeElement.querySelector('.login-error-txt')                    
    let email = fixture.nativeElement.querySelector('input[type=email]')
    let password = fixture.nativeElement.querySelector('input[type=password]')
    email.value = 'mesero@gmail.com'
    password.value = '1234454'                                                                                                                                                                                                          
                                                                                                                             
  });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message for invalid password', fakeAsync(() => {
    SignInSpy.and.callFake(()=> Promise.reject({message: 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).'}))
    signInBtnDe.triggerEventHandler('click', null)
    tick()
    fixture.detectChanges();
    expect(errorTextEl.textContent).toBe('Ingrese una contraseña correcta');
    expect(SignInSpy.calls.count()).toEqual(1)
  }));

  it('should display error message for invalid email', fakeAsync(() => {
    SignInSpy.and.callFake(()=> Promise.reject({message: 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).'}))
    signInBtnDe.triggerEventHandler('click', null)
    tick()
    fixture.detectChanges();
    expect(errorTextEl.textContent).toBe('Ingrese un correo valido');
  }));
});
