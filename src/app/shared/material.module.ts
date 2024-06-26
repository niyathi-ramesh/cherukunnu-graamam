import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  exports: [MatButtonModule, MatMenuModule],
})
export class MaterialModule {}
