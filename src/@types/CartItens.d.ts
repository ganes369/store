export interface IProductsItens {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  qtde: number;
}

export interface IProducts {
  products: IProducts;
  count?: number;
}
