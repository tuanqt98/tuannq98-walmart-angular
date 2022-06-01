import { Injectable } from '@angular/core';
import Data from '../product';
export interface Product {
  id?: string;
  name: string;
  images?: string;
  price: number | null;
  currency: string;
  brand: string;
  availability: string;
  condition: string;
  avg_rating?: string | number;
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
  getProductById(id) {
    return Data.find((product) => product._id === id);
  }
}
