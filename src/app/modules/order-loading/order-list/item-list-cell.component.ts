import { ValueFormatterParams } from '@ag-grid-community/all-modules';
import { ICellEditorAngularComp } from '@ag-grid-community/angular';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductAndQuantity } from '../order-loading.types';

// <button
//   matTooltip="PRODUCTO NO SE ENCUENTRA EN INVENTARIO"
//   mat-raised-button
//   color="primary"
//   *ngIf="!item.product.id"
// >
//   ( ! )
// </button>
@Component({
  selector: 'app-product-quantity-cell',
  template: `
    <ul>
      <li *ngFor="let item of items">
        <span *ngIf="item.product.id" (dblclick)="handleClick($event)">
          {{ item.product.name }}</span
        >

        <span
          *ngIf="!item.product.id"
          matTooltip="PRODUCTO NO SE ENCUENTRA EN INVENTARIO"
          (dblclick)="handleClick($event)"
        >
          <button mat-raised-button color="primary">!</button>
          {{ item.product.name }}</span
        >
        - {{ item.quantity }}
      </li>
    </ul>
  `,
  styleUrls: ['./item-list-cell.component.scss'],
})
export class ProductCellComponent implements ICellEditorAngularComp {
  public items: Array<ProductAndQuantity> = [];
  public showSelect = false;

  constructor(public dialog: MatDialog) {}
  agInit(params: ValueFormatterParams): void {
    this.items = params.value;
    console.log(this.items);
  }

  getValue() {
    return '';
  }

  handleClick() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      data: {},
    });
  }
}

@Component({
  selector: 'app-dialog-component',
  template: `
    <h1 mat-dialog-title>Corregir Producto</h1>
    <div mat-dialog-content>
      <p>Selecciona un producto de tu inventario</p>
      <mat-form-field>
        <mat-label>Producto</mat-label>
        <mat-select panelClass="ag-custom-component-popup">
          <mat-option value="veg"> vegetable </mat-option>
          <mat-option value="man"> mani </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button>Cancelar</button>
    </div>
  `,
})
export class DialogOverviewExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
