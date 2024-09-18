import { TestBed } from '@angular/core/testing';

import { GraphsChartsService } from './graphs-charts.service';

describe('GraphsChartsService', () => {
  let service: GraphsChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphsChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
