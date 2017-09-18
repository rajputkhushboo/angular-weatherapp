import { TestBed, inject } from '@angular/core/testing';

import { WeatherUpdateService } from './weather-update.service';

describe('WeatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherUpdateService]
    });
  });

  it('should be created', inject([WeatherUpdateService], (service: WeatherUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
