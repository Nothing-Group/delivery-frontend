import { AgGridModule } from '@ag-grid-community/angular';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LoadControlsComponent } from './order-list/load-controls/load-controls.component';
import { OrderComponent } from './order-list/order.component';
import { ProductCellComponent } from './order-list/product-cell/item-list-cell.component';
import { ProductDialogComponent } from './order-list/product-dialog/product-dialog.component';
import { OrdersRoutingModule } from './order-loading-routing.module';
@NgModule({
  declarations: [
    OrderComponent,
    ProductCellComponent,
    LoadControlsComponent,
    ProductDialogComponent,
  ],
  imports: [OrdersRoutingModule, SharedModule, AgGridModule.withComponents([])],
  entryComponents: [ProductDialogComponent],
})
export class OrderLoadingModule {}
