import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyComponent } from './why.component';

// const routes: Routes = [
//   { path: 'why', component: WhyComponent, pathMatch: 'full' },
//   { path: '**', redirectTo: 'why' }

// ];

const routes: Routes = [
  {
    path: '',
    component: WhyComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyRoutingModule { }
