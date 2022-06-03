import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.product = this.productService.getProductById(p._id);
    });
    // this.route.params.subscribe((p) => {
    //   this.product = this.productService[+params.get]
    // })
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
