import { TestBed } from '@angular/core/testing';

import { ToiletRegisterService } from './toilet-register.service';

describe('ToiletRegisterService', () => {
  let service: ToiletRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToiletRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
