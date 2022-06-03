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
  carCare: Product[] = [];
  party: Product[] = [];
  health: Product[] = [];
  filtered: Product[];

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    private spinner: NgxSpinnerService
  ) {
    this.products = productService.getAllProduct();
  }

  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.filtered = this.productService.getAllProduct();
    //filter
    this.carCare = this.productService.filter('DIY & Car Care');
    console.log(this.carCare);

    this.party = this.productService.filter(
      'Party Decorations & Party Supplies'
    );
    this.health = this.productService.filter('Health & Beauty');
    //spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    //paginator
    this.totalLength = this.products.length;
    console.log(this.products);

    // Default sort order on page load
    this.products = this.products.sort((low, high) => low.price - high.price);
  }
  sort(event: any) {
    switch (event.target.value) {
      case 'low': {
        this.products = this.products.sort(
          (low, high) => low.price - high.price
        );
        break;
      }

      case 'high': {
        this.products = this.products.sort(
          (low, high) => high.price - low.price
        );
        break;
      }
      case 'rating': {
        {
          this.products = this.products.sort(function (low, high) {
            if (low.avg_rating > high.avg_rating) {
              return -1;
            } else if (low.avg_rating < high.avg_rating) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        }
      }

      default: {
        this.products = this.products.sort(
          (low, high) => low.price - high.price
        );
        break;
      }
    }
    return this.products;
  }

  onKeyUp(value: string) {
    this.filtered = this.products.filter((item) =>
      item.name.toLowerCase().includes(value.trim().toLowerCase())
    );
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
