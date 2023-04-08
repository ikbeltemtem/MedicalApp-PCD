import { TestBed } from '@angular/core/testing';

import { SecAuthGuard } from './sec-auth.guard';

describe('SecAuthGuard', () => {
  let guard: SecAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
