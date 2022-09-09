import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagOrderDeliveredComponent } from './tag-order-delivered.component';

describe('TagOrderDeliveredComponent', () => {
  let component: TagOrderDeliveredComponent;
  let fixture: ComponentFixture<TagOrderDeliveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagOrderDeliveredComponent ]
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
