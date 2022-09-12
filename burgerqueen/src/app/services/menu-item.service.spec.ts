import { TestBed } from '@angular/core/testing';

import { MenuItemServiceTsService } from './menu-item.service';

describe('MenuItemServiceTsService', () => {
  let service: MenuItemServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
