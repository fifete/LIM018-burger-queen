import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagMakeOrderComponent } from './tag-make-order.component';

describe('TagMakeOrderComponent', () => {
  let component: TagMakeOrderComponent;
  let fixture: ComponentFixture<TagMakeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagMakeOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagMakeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
