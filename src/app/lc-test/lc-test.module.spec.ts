import { LcTestModule } from './lc-test.module';

describe('LcTestModule', () => {
  let lcTestModule: LcTestModule;

  beforeEach(() => {
    lcTestModule = new LcTestModule();
  });

  it('should create an instance', () => {
    expect(lcTestModule).toBeTruthy();
  });
});
