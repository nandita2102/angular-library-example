import { TestBed } from '@angular/core/testing';

import { NaLibExampleService } from './na-lib-example.service';

describe('NaLibExampleService', () => {
  let service: NaLibExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaLibExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
