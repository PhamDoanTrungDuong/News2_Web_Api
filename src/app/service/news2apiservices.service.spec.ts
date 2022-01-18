import { TestBed } from '@angular/core/testing';

import { News2apiservicesService } from './news2apiservices.service';

describe('News2apiservicesService', () => {
  let service: News2apiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(News2apiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
