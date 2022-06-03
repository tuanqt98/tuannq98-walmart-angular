import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  product: Product;
  // cartArr = [];
  constructor(
    public cartService: CartService,
    public authService: AuthService,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    // console.log(this.items);
    // this.route.params.subscribe((p) => {
    //   this.product = this.productService.getProductById(p._id);
    // });
  }
  removeItem(prod) {
    // Swal.fire('Success', 'You have deleted item from the cart', 'success');
    this.items.splice(this.items.indexOf(prod), 1);
  }

  onCheckOut() {
    // Swal.fire('Success', 'Process completed', 'success');
    this.cartService.clearCart();
  }

  getTotalItem(items) {
    return items.quantity * items.price;
  }
  remove(item) {
    this.cartService.removeItemCart(item);
    this.items = this.cartService.getItems();
  }
}
