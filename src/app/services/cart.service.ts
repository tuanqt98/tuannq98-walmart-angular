import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from '../services/product.service';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  private cart = [];
  constructor() {
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }
  getCart() {
    return this.cart;
  }
  addItem(p) {
    let index = this.cart.findIndex((c) => c._id == p._id);
    if (index == -1) {
      p.quantity = 1;
      this.cart.push(p);
    } else {
      this.cart[index].quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  removeItem(p) {
    let index = this.cart.findIndex((c) => c._id == p._id);
    if (index !== -1) {
      this.cart[index].quantity--;
      if (this.cart[index].quantity == 0) {
        this.cart.splice(index, 1);
      }
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  getCartQuantity() {
    return this.cart.reduce((accu, p) => {
      return accu + p.quantity;
    }, 0);
  }
  getItemQuantity(p) {
    let index = this.cart.findIndex((c) => c._id == p._id);

    if (index !== -1) {
      return this.cart[index].quantity;
    }
    return 0;
  }

  getCartTotalPrice() {
    return this.cart.reduce((accu, p) => {
      return accu + p.quantity * p.price;
    }, 0);
  }

  addToCart(product: Product) {
    let local_storage = [];
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  removeItemCart(item) {
    this.items = this.items.filter((i) => i !== item);
  }
}
