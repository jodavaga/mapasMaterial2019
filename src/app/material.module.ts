import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatChipsModule,
    MatProgressBarModule, 
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
