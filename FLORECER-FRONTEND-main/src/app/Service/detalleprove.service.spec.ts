import { TestBed } from '@angular/core/testing';

import { DetalleproveService } from './detalleprove.service';

describe('DetalleproveService', () => {
  let service: DetalleproveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleproveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
