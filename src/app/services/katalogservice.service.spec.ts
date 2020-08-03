import { TestBed } from '@angular/core/testing';

import { KatalogserviceService } from './katalogservice.service';

describe('KatalogserviceService', () => {
  let service: KatalogserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KatalogserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
