import { AgGridModule } from '@ag-grid-community/angular';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { InventoryControlsComponent } from './inventory-controls/inventory-controls.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent, InventoryControlsComponent],
  imports: [InventoryRoutingModule, SharedModule, AgGridModule.withComponents([])],
})
export class InventoryModule {}
