import { TestBed } from '@angular/core/testing';

import { PriceChartService } from './price-chart.service';

describe('PriceChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceChartService = TestBed.get(PriceChartService);
    expect(service).toBeTruthy();
  });
});
