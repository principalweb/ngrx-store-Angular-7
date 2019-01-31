import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidingComponent } from './sliding.component';
import { YearhistoryComponent } from './yearhistory/yearhistory.component';
import { TrustedbyComponent } from './trustedby/trustedby.component';
import { RightChoiceComponent } from './right-choice/right-choice.component';
import { Over75Component } from './over75/over75.component';
import { ManyFinancingComponent } from './many-financing/many-financing.component';
import { FeatureBenefitsComponent } from './feature-benefits/feature-benefits.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { DesignYourComponent } from './design-your/design-your.component';
import { CostvsvalueComponent } from './costvsvalue/costvsvalue.component';
import { ComparingOptionsComponent } from './comparing-options/comparing-options.component';
import { ColorMaxComponent } from './color-max/color-max.component';
import { BeadBoardComponent } from './bead-board/bead-board.component';

const routes: Routes = [
  {
    path: '',
    component: SlidingComponent,
    children: [
      { path: 'evolution', component: EvolutionComponent, pathMatch: 'full', data: {animation: 'evolution'} },
      { path: 'costvsvalue', component: CostvsvalueComponent, pathMatch: 'full', data: {animation: 'costvsvalue'}},
      { path: 'history', component: YearhistoryComponent, pathMatch: 'full', data: {animation: 'history'}},
      { path: 'trusted', component: TrustedbyComponent, pathMatch: 'full', data: {animation: 'trusted'}},
      { path: 'recap', component: RightChoiceComponent, pathMatch: 'full', data: {animation: 'recap'}},
      { path: 'about', component: Over75Component, pathMatch: 'full', data: {animation: 'about'}},
      { path: 'features', component: FeatureBenefitsComponent, pathMatch: 'full', data: {animation: 'features'}},
      { path: 'financing', component: ManyFinancingComponent, pathMatch: 'full', data: {animation: 'financing'}},
      { path: 'vizualizer', component: DesignYourComponent, pathMatch: 'full', data: {animation: 'vizualizer'}},
      { path: 'aboutallura', component: ComparingOptionsComponent, pathMatch: 'full', data: {animation: 'aboutallura'}},
      { path: 'colormax', component: ColorMaxComponent, pathMatch: 'full', data: {animation: 'colormax'}},
      { path: 'products', component: BeadBoardComponent, pathMatch: 'full', data: {animation: 'products'}},
      { path: '**', redirectTo: 'evolution' },
      { path: '', redirectTo: 'evolution' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidingRoutingModule { }
