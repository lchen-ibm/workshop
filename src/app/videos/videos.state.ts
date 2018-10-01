import { Action } from '@ngrx/store';

import { Video, Filter } from './videos.types';

const SET_VIDEOS = 'SET_VIDEOS';

export class SetVideos implements Action {
  readonly type = SET_VIDEOS;

  constructor(readonly videos: Video[]) {
  }
}

const SET_FILTER = 'SET_FILTER';

export class SetFilter implements Action {
  readonly type = SET_FILTER;

  constructor(readonly filter: Filter) {
  }
}

const SET_SELECTED_VIDEO_ID = 'SET_SELECTED_VIDEO_ID';

export class SetSeletedVideoId implements Action {
  readonly type = SET_SELECTED_VIDEO_ID;

  constructor(readonly id: string) {
  }
}

const ADD_VIDEO = 'ADD_VIDEO';

export class AddVideo implements Action {
  readonly type = ADD_VIDEO;

  constructor(readonly video: Video) {
  }
}

const REMOVE_VIDEO = 'REMOVE_VIDEO';

export class RemoveVideo implements Action {
  readonly type = REMOVE_VIDEO;

  constructor(readonly id: string) {
  }
}

export interface VideosState {
  videoList: Video[];
  selectedVideoId: string;
  filter: Filter;
}

export function videoListReducer(previousList: Video[] = [], action: Action) {
  switch (action.type) {
    case SET_VIDEOS:
      return (action as SetVideos).videos;
    case ADD_VIDEO:
      return [...previousList, (action as AddVideo).video];
    case REMOVE_VIDEO:
      return previousList.filter(video => video.id !== (action as RemoveVideo).id);
    default:
      return previousList;
  }
}

export function selectedVideoIdReducer(previousId: string, action: Action) {
  switch (action.type) {
    case SET_SELECTED_VIDEO_ID:
      return (action as SetSeletedVideoId).id;
    case SET_VIDEOS:
      return (action as SetVideos).videos[0].id;
    default:
      return previousId;
  }
}

export function filterReducer(previousFilter: Filter = defaultFilter, action: Action) {
  const {filter, type} = action as SetFilter;
  switch (type) {
    case SET_FILTER:
      return filter;
    default:
      return previousFilter;
  }
}

const defaultFilter: Filter = {
  region: 'All',
  ageGroupTeens: true,
  ageGroupYoungAdults: true,
  ageGroupAdults: true,
  ageGroupSeniors: true
};
