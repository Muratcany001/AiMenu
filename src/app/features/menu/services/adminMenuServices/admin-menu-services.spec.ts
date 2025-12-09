import { TestBed } from '@angular/core/testing';

import { AdminMenuServices } from './admin-menu-services';

describe('AdminMenuServices', () => {
  let service: AdminMenuServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMenuServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
