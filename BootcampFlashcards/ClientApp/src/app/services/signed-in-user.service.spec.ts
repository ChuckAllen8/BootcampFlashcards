import { TestBed } from '@angular/core/testing';

import { SignedInUserService } from './signed-in-user.service';

describe('SignedInUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignedInUserService = TestBed.get(SignedInUserService);
    expect(service).toBeTruthy();
  });
});
