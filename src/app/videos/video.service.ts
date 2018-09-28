import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Video } from './videos.types';

const API_URL = 'https://api.angularbootcamp.com';

@Injectable()
export class VideoService {

  constructor(private http: HttpClient) {
  }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(API_URL + '/videos');
  }
}
