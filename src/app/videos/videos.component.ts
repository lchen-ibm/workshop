import { Component, OnInit } from '@angular/core';
import { Filter, Video } from './videos.types';
import { combineLatest, Observable } from 'rxjs';
import { VideosStateService } from './videos-state.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videoList: Observable<Video[]> = this.videosStateService.videos;
  selectedVideoId: Observable<string> = this.videosStateService.selectedVideoId;

  constructor(private videosStateService: VideosStateService) {
  }

  ngOnInit() {
  }

  getViews() {
    return this.videosStateService.getViews();
  }

  selectVideo(video: Video) {
    this.videosStateService.setSelectedVideoId(video.id);
  }

  setFilter(filter: Filter) {
    this.videosStateService.setFilter(filter);
  }

}
