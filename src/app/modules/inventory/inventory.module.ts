import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { InventoryRoutingModule } from './inventory-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [InventoryRoutingModule, SharedModule],
})
export class InventoryModule {}
