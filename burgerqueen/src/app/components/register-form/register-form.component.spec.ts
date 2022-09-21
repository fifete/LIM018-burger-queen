import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFormComponent } from './register-form.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';
import { By } from '@angular/platform-browser';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let deliverDebugEl

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      providers: [ 
        {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createUserFirestore() when component instantiates', () => {
    spyOn(component, 'createUserFirestore');
    fixture.detectChanges();
    deliverDebugEl = fixture.debugElement.query(By.css('button'))   
    deliverDebugEl.triggerEventHandler('click', null)
    expect(component.createUserFirestore).toHaveBeenCalled();
  });
});
