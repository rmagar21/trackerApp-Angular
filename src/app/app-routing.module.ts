import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
  {path:"",component:TrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
