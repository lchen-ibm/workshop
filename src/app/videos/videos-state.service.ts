import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SetFilter, SetSeletedVideoId, VideosState } from './videos.state';
import { combineLatest, Observable } from 'rxjs';
import { Filter, Video, View } from './videos.types';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class VideosStateService {
  videos: Observable<Video[]> = this.store.pipe(select(state => state.videoList));
  selectedVideoId: Observable<string> = this.store.pipe(select(state => state.selectedVideoId));
  filter: Observable<Filter> = this.store.pipe(select(state => state.filter));

  constructor(private store: Store<VideosState>) {
  }

  setSelectedVideoId(id: string) {
    this.store.dispatch(new SetSeletedVideoId(id));
  }

  setFilter(filter: Filter) {
    this.store.dispatch(new SetFilter(filter));
  }

  getViews(): Observable<View[]> {
    return this.videos.pipe(
      switchMap(videos => combineLatest(this.selectedVideoId, this.filter).pipe(
        map(([id, filter]) => {
          const selectedVideo = videos.find(video => video.id === id);
          return selectedVideo ? selectedVideo.viewDetails.filter(viewDetail => this.filterView(viewDetail, filter)) : [];
        })
        )
      ));
  }

  private filterView(viewDetail: View, filter: Filter): boolean {
    return this.inRegion(viewDetail, filter.region) && this.inAgeGroup(viewDetail, filter);
  }

  private inRegion(viewDetail: View, region: string): boolean {
    return region === 'All' || region === viewDetail.region;
  }

  private inAgeGroup(viewDetail: View, filter: Filter): boolean {
    const {age} = viewDetail;
    return (filter.ageGroupTeens && age < 18) ||
      (filter.ageGroupYoungAdults && age >= 18 && age <= 40) ||
      (filter.ageGroupAdults && age > 40 && age <= 60) ||
      (filter.ageGroupSeniors && age > 60);
  }
}
