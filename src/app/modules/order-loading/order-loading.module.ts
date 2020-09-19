import { AgGridModule } from '@ag-grid-community/angular';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LoadControlsComponent } from './load-controls/load-controls.component';
import {
  DialogOverviewExampleDialog,
  ProductCellComponent,
} from './order-list/item-list-cell.component';
import { OrderComponent } from './order-list/order.component';
import { OrdersRoutingModule } from './order-loading-routing.module';
@NgModule({
  declarations: [
    OrderComponent,
    ProductCellComponent,
    LoadControlsComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [OrdersRoutingModule, SharedModule, AgGridModule.withComponents([])],
  entryComponents: [DialogOverviewExampleDialog],
})
export class OrderLoadingModule {}
