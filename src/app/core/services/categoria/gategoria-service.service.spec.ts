import { TestBed } from '@angular/core/testing';

import { GategoriaServiceService } from './gategoria-service.service';

describe('GategoriaServiceService', () => {
  let service: GategoriaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GategoriaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
