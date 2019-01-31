import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DialogModule} from 'primeng/dialog';

@NgModule({
	imports: [
    CommonModule,
    DialogModule
	],
	exports: [
    DialogModule
	],
	declarations: []
})

export class PrimeModules {}