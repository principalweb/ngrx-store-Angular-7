import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { NpmModulesModule } from './npm-modules/npm-modules.module';
import { PrimeModules } from './prime/prime-modules.module';

@NgModule({
	exports: [
		FormsModule,
    ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		NpmModulesModule,
		MaterialModule,
		PrimeModules
	],
	declarations: [],
	providers: []
})
export class SharedModule {}
