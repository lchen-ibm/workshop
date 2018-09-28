import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { VideoService } from './video.service';
import { Video } from './types';

fdescribe('VideoService', () => {

  let systemUnderTest: VideoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoService],
      imports: [HttpClientTestingModule]
    });

    systemUnderTest = TestBed.get(VideoService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('get data in base case', () => {
    let vl: Video[];
    systemUnderTest.getVideos().subscribe(videos => vl = videos);

    const req = httpTestingController.expectOne('https://api.angularbootcamp.com/videoList');
    req.flush([]);
    expect(vl).toEqual([]);
  });
});
