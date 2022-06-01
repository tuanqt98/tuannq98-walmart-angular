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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      this.product = this.productService.getProductById(p._id);
    });
  }
}
