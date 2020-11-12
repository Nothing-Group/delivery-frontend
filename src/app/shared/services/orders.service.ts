import { Injectable } from '@angular/core';
import { BoxSize, ProductAndQuantity } from '@modules/order-loading/order-loading.types';
import { BoxNotFound, ProductNotFound } from '@shared/errors';
import { map } from 'rxjs/operators';
import { Orders_Insert_Input, SubmitOrdersGQL } from 'src/generated/graphql';

const boxes: BoxSize[] = [
  { id: 1, label: '20x10x10', fixedVolume: 1900 },
  { id: 2, label: '25x20x10', fixedVolume: 4900 },
  { id: 3, label: '35x20x15', fixedVolume: 8900 },
  { id: 4, label: '40x25x25', fixedVolume: 24900 },
];
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

  findBox(products: ProductAndQuantity[]): BoxSize {
    const volumen = products.reduce((acc, productAndQuantity) => {
      const { product, quantity } = productAndQuantity;
      if ('id' in product) {
        return acc + product.volume * quantity;
      }
      throw Error(ProductNotFound);
    }, 0);

    for (const box of boxes) {
      if (volumen <= box.fixedVolume) {
        return box;
      }
    }
    throw Error(BoxNotFound);
  }
}
