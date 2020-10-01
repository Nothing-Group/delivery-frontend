import { ValueFormatterParams } from '@ag-grid-community/all-modules';
import { ICellEditorAngularComp } from '@ag-grid-community/angular';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ProductDialogComponent,
  ProductDialogData,
  ProductDialogResult,
} from '@modules/order-loading/order-list/product-dialog/product-dialog.component';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Product, ProductAndQuantity } from '../../order-loading.types';

@Component({
  selector: 'app-product-quantity-cell',
  template: `
    <ul>
      <li *ngFor="let x of productsWithQuantity; let i = index">
        <span *ngIf="!x.product.id" matTooltip="PRODUCTO NO SE ENCUENTRA EN INVENTARIO">
          <button
            mat-raised-button
            color="warn"
            class="exclamation-button"
            (click)="handleWarningClicked(i)"
          >
            !
          </button>
        </span>
        <span (dblclick)="handleProductClicked(i)"> {{ x.product.name }} - {{ x.quantity }}</span>
      </li>
    </ul>
  `,
  styleUrls: ['./item-list-cell.component.scss'],
})
export class ProductCellComponent implements ICellEditorAngularComp {
  public productsWithQuantity: Array<ProductAndQuantity> = [];
  public showSelect = false;
  private params: ValueFormatterParams;
  private inventoryProducts: Product[] = [];
  constructor(public dialog: MatDialog) {}
  agInit(params: ValueFormatterParams): void {
    this.params = params;
    this.productsWithQuantity = params.value;
    this.inventoryProducts = (params as any).inventoryProducts;
  }

  getValue() {
    return '';
  }

  handleProductClicked(idx: number) {
    this.openProductDialog(idx, 'Modificar Producto');
  }

  handleWarningClicked(idx: number) {
    this.openProductDialog(idx, 'Corregir Producto');
  }

  handleAddProductClicked() {
    this.openProductDialog(null, 'Añadir Producto');
  }

  openProductDialog(idx: Maybe<number>, title: string) {
    const dialogRef = this.dialog.open<
      ProductDialogComponent,
      ProductDialogData,
      ProductDialogResult
    >(ProductDialogComponent, {
      width: '450px',
      data: {
        idx,
        title,
        productAndQuantity:
          idx === null || idx === undefined ? null : this.productsWithQuantity[idx],
        products: this.inventoryProducts,
      },
    });
    dialogRef.afterClosed().subscribe((result) => this.handleProductSelected(result));
  }

  handleProductSelected(dialogResult: ProductDialogResult) {
    if (!dialogResult?.productAndQuantity) {
      return;
    }
    const { idx, productAndQuantity } = dialogResult;
    const updated = [...this.productsWithQuantity];
    if (idx === null || idx === undefined) {
      updated.push(productAndQuantity);
    } else {
      updated[idx] = productAndQuantity;
    }
    this.params.node.setDataValue(this.params.colDef as any, updated);
  }
}
