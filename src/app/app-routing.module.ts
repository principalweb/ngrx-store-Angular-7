import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'siding', loadChildren: './sliding/sliding.module#SlidingModule' },
  { path: 'why', loadChildren: './why/why.module#WhyModule'},
  { path: '', redirectTo: 'why', pathMatch: 'full' },
  { path: '**', redirectTo: 'why' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
