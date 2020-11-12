import { Injectable } from '@angular/core';
import { Product } from '@modules/order-loading/order-loading.types';
import { Maybe } from 'graphql/jsutils/Maybe';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { InventoryGQL } from 'src/generated/graphql';
import { InventoryCreateOneGQL } from '../../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {

  private products: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public products$ = this.products.asObservable();

  constructor(private inventoryGQL: InventoryGQL, private inventoryCreateOneGQL: InventoryCreateOneGQL) { }

  createProduct(objDB: any) {

    const { name, price, alto, ancho, largo } = objDB;
    const volumen = alto * ancho * largo;
    this.inventoryCreateOneGQL.mutate({
      input:
        { name, price, quantity: 15, volume: volumen, weight: 10, details: '', height: alto, width: ancho, length: largo }
    } as any)
      .subscribe(data => {

        if (data.data?.insert_inventories_one) {
          const estado = [...this.products.getValue(), data.data?.insert_inventories_one];
          this.products.next(estado);

        }


      });
  }

  fetchProducts() {
    this.inventoryGQL.fetch().subscribe((inventoryGQL) => {
      const products = inventoryGQL.data?.inventories;
      if (products) {
        this.products.next(products);

      }
    });
  }

  findProductByName(name: string): Maybe<Product> {
    return this.products.getValue().find((prod) => prod.name.toUpperCase() === name.toUpperCase());
  }

}
