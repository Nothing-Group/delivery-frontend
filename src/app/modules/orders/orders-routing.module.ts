import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order-list/order.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
