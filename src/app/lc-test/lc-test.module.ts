import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LcTestComponent } from './lc-test/lc-test.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LcTestComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LcTestComponent]
})
export class LcTestModule {
}
