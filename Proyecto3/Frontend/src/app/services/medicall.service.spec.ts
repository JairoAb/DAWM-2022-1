import { TestBed } from '@angular/core/testing';

import { MedicallService } from './medicall.service';

describe('MedicallService', () => {
  let service: MedicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
