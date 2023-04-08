import { TestBed } from '@angular/core/testing';

import { MedAuthGuard } from './med-auth.guard';

describe('MedAuthGuard', () => {
  let guard: MedAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MedAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
