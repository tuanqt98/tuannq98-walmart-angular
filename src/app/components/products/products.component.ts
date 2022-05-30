import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    public cartService: CartService
  ) {
    // this.products = productService.filter('DIY & Car Care');
    this.products = productService.getAllProduct();
  }

  ngOnInit(): void {}
  paginate(event) {}
}
