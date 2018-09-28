import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'videos', pathMatch: 'full'},
  {path: 'videos', loadChildren: './videos/videos.module#VideosModule'},
  {path: 'lctest', loadChildren: './lc-test/lc-test.module#LcTestModule'},
  {path: 'reddit', loadChildren: './reddit/reddit.module#RedditModule'}
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRouterModule {}
