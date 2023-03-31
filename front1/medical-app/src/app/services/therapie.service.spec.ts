import { TestBed } from '@angular/core/testing';

import { TherapieService } from './therapie.service';

describe('TherapieService', () => {
  let service: TherapieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TherapieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
