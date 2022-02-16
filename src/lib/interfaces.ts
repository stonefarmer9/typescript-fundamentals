export interface Product {
  id: number;
  name: string;
  icon: string;
  description?: string;
  validate?(): boolean; //function type for interface function name, param and return type
}

type ProductAlias =
  | string
  | number
  | {
      id: number;
      name: string;
      icon: string;
      description?: string;
      placeOrder?(id: number): boolean; //function type for interface function name, param and return type
    };

let prod: ProductAlias = 'new';

enum ProductType {
  Sporting,
  Home,
}
