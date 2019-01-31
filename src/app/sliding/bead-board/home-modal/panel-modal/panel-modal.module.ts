import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModalComponent } from './panel-modal.component';
import { PanelTraditionalComponent } from './panel-traditional/panel-traditional.component';
import { PanelContemporaryComponent } from './panel-contemporary/panel-contemporary.component';

@NgModule({
  declarations: [PanelModalComponent, PanelTraditionalComponent, PanelContemporaryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PanelModalComponent
  ]
})
export class PanelModalModule { }
