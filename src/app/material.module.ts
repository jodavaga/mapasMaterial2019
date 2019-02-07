import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatChipsModule
  ],
  exports: [
    MatToolbarModule,
    MatChipsModule
  ],
  declarations: []
})
export class MaterialModule { }
