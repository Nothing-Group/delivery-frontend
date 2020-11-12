export type Product = {
  id: number;
  name: string;
  width: number;
  height: number;
  length: number;
  volume: number;
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
