import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MaterialModule, CommonModule],
})
export class SharedModule {}
