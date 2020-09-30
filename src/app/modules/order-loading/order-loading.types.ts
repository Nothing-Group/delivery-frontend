export type Product = {
  id: number;
  name: string;
};

export type ProductAndQuantity = {
  product: Product;
  quantity: number;
};
export type BoxSize = {
  id: number;
  label: string;
};
