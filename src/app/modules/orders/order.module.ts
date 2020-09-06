import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order-list/order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [OrdersRoutingModule, SharedModule],
})
export class OrderModule {}
