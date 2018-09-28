import { RemoveVideo, videoListReducer, AddVideo } from './videos.state';
import { Video } from './videos.types';

describe('App state', () => {
  it('should handle random', () => {
    expect(new RemoveVideo('1').type).toBe('REMOVE_VIDEO');
  });

  it('should add to list', () => {
    const curList: Video[] = [{
      id: '1324',
      author: 't1',
      title: 't1 title',
      viewDetails: []
    }];
    const newVideo: Video = {
      id: '3234',
      author: 't2',
      title: 't2 title',
      viewDetails: []
    };
    expect(videoListReducer(curList, new AddVideo(newVideo))).toContain(newVideo);
  });
});
