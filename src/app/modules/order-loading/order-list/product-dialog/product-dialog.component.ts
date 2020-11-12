import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Maybe } from 'graphql/jsutils/Maybe';
import { productValidator } from '../../../../shared/validators';
import { Product, ProductAndQuantity } from '../../order-loading.types';

export type ProductDialogResult = Maybe<{
  idx: Maybe<number>;
  productAndQuantity?: Maybe<ProductAndQuantity>;
}>;

export type ProductDialogData = {
  idx: Maybe<number>;
  productAndQuantity?: Maybe<ProductAndQuantity>;
  products: Product[];
  title: string;
};

@Component({
  selector: 'app-dialog-component',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent {
  minQuantity = 1;
  maxQuantity = 10;

  title = '';
  productList: Product[] = [];
  productEditForm = this.fb.group({
    product: [null, productValidator],
    quantity: [
      null,
      [Validators.required, Validators.min(this.minQuantity), Validators.max(this.maxQuantity)],
    ],
  });
  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent, ProductDialogResult>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ProductDialogData,
  ) {
    this.productEditForm.valueChanges.subscribe(data => console.log(this.productEditForm.getRawValue(), this.productEditForm.controls.product.errors));
    this.productList = data.products;
    this.title = data.title;
    console.log(data.title);
    if (data.productAndQuantity) {
      this.productEditForm.setValue(data.productAndQuantity);
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.productEditForm.controls;
  }

  handleClickOk(): void {
    if (!this.productEditForm.valid) {
      this.productEditForm.markAllAsTouched();
      return;
    }
    const formValue = this.productEditForm.getRawValue();
    const result = {
      idx: this.data.idx,
      productAndQuantity: {
        product: formValue.product,
        quantity: formValue.quantity,
      },
    };
    this.dialogRef.close(result);
  }

  handleClickOnCancel(): void {
    this.dialogRef.close(null);
  }
}
