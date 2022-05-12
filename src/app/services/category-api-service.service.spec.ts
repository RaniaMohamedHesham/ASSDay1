import { TestBed } from '@angular/core/testing';

import { CategoryApiServiceService } from './category-api-service.service';

describe('CategoryApiServiceService', () => {
  let service: CategoryApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
