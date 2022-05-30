import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
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
}
