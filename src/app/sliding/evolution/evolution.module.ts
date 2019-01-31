import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvolutionComponent } from './evolution.component';

@NgModule({
  declarations: [EvolutionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EvolutionComponent
  ]
})
export class EvolutionModule { }
