import { TestBed } from '@angular/core/testing';

import { MedSAuthGuard } from './med-sauth.guard';

describe('MedSAuthGuard', () => {
  let guard: MedSAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MedSAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
