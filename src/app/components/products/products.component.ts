import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product, ProductService } from 'src/app/services/product.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  bestSeller: Product[] = [];
  filtered: Product[];

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    private spinner: NgxSpinnerService
  ) {
    this.products = productService.getAllProduct();
    this.bestSeller = productService.filter('DIY & Car Care');
  }

  ngOnInit(): void {
    this.filtered = this.productService.getAllProduct();
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  onKeyUp(value: string) {
    this.filtered = this.products.filter((item) =>
      item.name.toLowerCase().includes(value.trim().toLowerCase())
    );
  }
}
