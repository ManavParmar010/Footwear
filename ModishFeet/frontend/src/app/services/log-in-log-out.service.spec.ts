import { TestBed } from '@angular/core/testing';

import { LogInLogOutService } from './log-in-log-out.service';

describe('LogInLogOutService', () => {
  let service: LogInLogOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInLogOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
