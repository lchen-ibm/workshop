import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Video } from '../videos.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Input() selectedVideoId: string;
  @Output() selectVideo = new EventEmitter<Video>();

  constructor() {
  }

  ngOnInit() {
  }

  setVideo(v: Video) {
    this.selectVideo.emit(v);
  }

}
