import { TestBed } from '@angular/core/testing';

import { MenuItemServiceTs } from './menu-item.service';

xdescribe('MenuItemServiceTsService', () => {
  let service: MenuItemServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
