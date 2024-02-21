import { TestBed } from '@angular/core/testing';

import { BuscaClimaService } from './busca-clima.service';

describe('BuscaClimaService', () => {
  let service: BuscaClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
