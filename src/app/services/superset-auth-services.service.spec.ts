import { TestBed } from '@angular/core/testing';

import { SupersetAuthServicesService } from './superset-auth-services.service';

describe('SupersetAuthServicesService', () => {
  let service: SupersetAuthServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupersetAuthServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
