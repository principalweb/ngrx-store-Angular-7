import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShakesShinglesModalComponent } from './shakes-shingles-modal.component';
import { ShakesPerfectionComponent } from './shakes-perfection/shakes-perfection.component';
import { ShakesMultishakeComponent } from './shakes-multishake/shakes-multishake.component';

@NgModule({
  declarations: [ShakesShinglesModalComponent, ShakesPerfectionComponent, ShakesMultishakeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ShakesShinglesModalComponent
  ]
})
export class ShakesShinglesModalModule { }
