export type Product = {
  id: number;
  price: number;
  name: string;
  width: number;
  height: number;
  length: number;
  volume: number;
  weight: number;
};

export type ProductAndQuantity = {
  product: Product | { name: string };
  quantity: number;
};
export type BoxSize = {
  id: number;
  label: string;
  fixedVolume: number;
};
