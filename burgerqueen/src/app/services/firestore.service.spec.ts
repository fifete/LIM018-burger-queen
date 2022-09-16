import { TestBed } from '@angular/core/testing';
import { FirestoreService } from './firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

describe('FirestoreService', () => {
  let service: FirestoreService;
  let firestore: AngularFirestore;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('FirestoreService', ['setUserData'] )
    TestBed.configureTestingModule({
      providers: [{provide:  AngularFirestore, useValue: spy}]
    });
    service = TestBed.inject(FirestoreService);
   // firestore = TestBed.inject(FirestoreService) as jasmine.SpyObj<FirestoreService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoul be a function', () => {
    console.log(typeof service.setUserData)
    expect(typeof service.setUserData).toBe('function')
    /* expect(typeof service.setUserData(
      {email: "chef@gmail.com",
      fullname: "Pedro Gomez",
      role: "chef",
      username: "pedro"}, 'omdQTlIfzcaMny3PYdAmAN8Mkom2' 
    )).toBe('function') */
  });
});
