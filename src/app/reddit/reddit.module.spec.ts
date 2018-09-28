import { RedditModule } from './reddit.module';

describe('RedditModule', () => {
  let risModule: RedditModule;

  beforeEach(() => {
    risModule = new RedditModule();
  });

  it('should create an instance', () => {
    expect(risModule).toBeTruthy();
  });
});
