import { TestBed } from '@angular/core/testing';

import { ReviewRegisterService } from './review-register.service';

describe('ReviewRegisterService', () => {
  let service: ReviewRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
