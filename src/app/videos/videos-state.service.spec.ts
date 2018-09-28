import { TestBed, inject } from '@angular/core/testing';

import { VideosStateService } from './videos-state.service';

describe('VideosStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideosStateService]
    });
  });

  it('should be created', inject([VideosStateService], (service: VideosStateService) => {
    expect(service).toBeTruthy();
  }));
});
