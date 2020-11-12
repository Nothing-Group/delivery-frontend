import { AbstractControl } from '@angular/forms';
import { Product } from '@modules/order-loading/order-loading.types';
import { Maybe } from 'graphql/jsutils/Maybe';

export const productValidator = (control: AbstractControl): { [key: string]: any } | null => {
    const product: Maybe<Product> = control.value;
    return product?.id ? null : { invalidProduct: { value: control.value } };
};

