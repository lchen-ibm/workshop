import {Injectable} from '@angular/core';
import {Effect, Actions, ROOT_EFFECTS_INIT, ofType} from '@ngrx/effects';
import {VideoService} from './video.service';
import {switchMap, map} from 'rxjs/operators';
import {SetVideos} from './videos.state';

@Injectable()
export class VideoEffectsService {

  @Effect() init = this.actions.pipe(
    ofType(ROOT_EFFECTS_INIT),
    switchMap(() => this.videoService.getVideos()),
    map(videos => new SetVideos(videos))
  );

  constructor(private videoService: VideoService, private actions: Actions) {}
}
