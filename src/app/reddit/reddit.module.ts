import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditImageSearchComponent } from './reddit-image-search/reddit-image-search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo: 'images', pathMatch: 'full'},
  {path: '', component: RedditImageSearchComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RedditImageSearchComponent]
})
export class RedditModule { }
