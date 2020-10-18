import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Orders_Insert_Input, SubmitOrdersGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private submitOrdersGQL: SubmitOrdersGQL) {}

  submitOrders(orders: Orders_Insert_Input[]) {
    return this.submitOrdersGQL
      .mutate({
        input: orders,
      })
      .pipe(map((res) => res.data?.insert_orders?.returning));
  }
}
