import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {VideosComponent} from './videos.component';
import {filterReducer, selectedVideoIdReducer, videoListReducer, VideosState} from './videos.state';
import {VideoEffectsService} from './video-effects.service';
import {VideoListComponent} from './video-list/video-list.component';
import {VideoEmbedderComponent} from './video-embedder/video-embedder.component';
import {ViewGraphComponent} from './view-graph/view-graph.component';
import {ViewFilterComponent} from './view-filter/view-filter.component';
import {RouterModule, Routes} from '@angular/router';
import {VideosStateService} from './videos-state.service';
import {VideoService} from './video.service';
import { MatCardModule } from '@angular/material';

const routes: Routes = [
  {path: '', component: VideosComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    StoreModule.forRoot<VideosState>({
      videoList: videoListReducer,
      selectedVideoId: selectedVideoIdReducer,
      filter: filterReducer
    }),
    EffectsModule.forRoot([VideoEffectsService])
  ],
  declarations: [
    VideosComponent,
    VideoListComponent,
    VideoEmbedderComponent,
    ViewGraphComponent,
    ViewFilterComponent
  ],
  providers: [VideosStateService, VideoEffectsService, VideoService]
})
export class VideosModule {
}
