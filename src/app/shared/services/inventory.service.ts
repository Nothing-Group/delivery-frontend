import { Injectable } from '@angular/core';
import { BoxSize, Product, ProductAndQuantity } from '@modules/order-loading/order-loading.types';
import { Maybe } from 'graphql/jsutils/Maybe';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { InventoryGQL } from 'src/generated/graphql';
import { InventoryCreateOneGQL } from '../../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
   /*private inventoryProducts: Product[] = [
    {
      name: 'Mani',
      id: 7,
    },
    {
      name: 'Peras al vapor',
      id: 9,
    },
    {
      name: 'Nueces importadas',
      id: 10,
    },
    {
      id: 7,
      name: 'PRODUCTO 1',
    },
    {
      id: 7,
      name: 'Papa rellena',
    }, 
  ];*/

  private products: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public products$ = this.products.asObservable();

  constructor(private inventoryGQL: InventoryGQL, private inventoryCreateOneGQL: InventoryCreateOneGQL) {}

  createProduct(objDB:any ){
    
    const {name, price, alto, ancho,largo} = objDB;
    const volumen = alto*ancho*largo;
    this.inventoryCreateOneGQL.mutate({"input":{ "name": name, "price": price, "quantity": 15, "volume": volumen, "weight": 10, "details": "", "height":alto,"width":ancho,"length":largo}} as any)
    .subscribe(data => {
      
      if(data.data?.insert_inventories_one){
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

  findBoxSize(productsWithQuantity: ProductAndQuantity[]): Maybe<BoxSize> {
    return { label: '20 X 50 X 12', id: 7 };
  }
}
