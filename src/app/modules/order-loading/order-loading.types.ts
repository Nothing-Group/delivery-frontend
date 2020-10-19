export type Product = {
  id: number;
  name: string;
};

export type ProductAndQuantity = {
  product: Product | { name: string };
  quantity: number;
};
export type BoxSize = {
  id: number;
  label: string;
};
