import { TestBed } from '@angular/core/testing';

import { FlashCardDataService } from './flash-card-data.service';

describe('FlashCardDataService', () => {
  let service: FlashCardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashCardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
