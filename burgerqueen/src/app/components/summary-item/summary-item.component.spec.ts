import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryItemComponent } from './summary-item.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.module';

xdescribe('SummaryItemComponent', () => {
  let component: SummaryItemComponent;
  let fixture: ComponentFixture<SummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryItemComponent ],
      providers: [ {provide:  FIREBASE_OPTIONS, useValue: firebaseConfig}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
