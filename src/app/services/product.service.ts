import { Injectable } from '@angular/core';
import Data from '../product';
export interface Product {
  id?: string;
  name: string;
  price: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  getAllProduct() {
    return Data;
  }

  filter(str) {
    return Data.filter((value) => value.breadcrumbs.includes(str));
  }
  // getProduct(_id: string) {}
}
