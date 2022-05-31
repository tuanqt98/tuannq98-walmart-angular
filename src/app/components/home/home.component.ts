import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product, ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  bestSellers: Product[] = [];
  ballons: Product[] = [];
  category = [
    {
      title: 'Party Decorations & Party Supplies',
      image: '../../../assets/images/party-accessories/party-acc.jpeg',
      description:
        'With supporting text below as a natural lead-in to additional content',
    },
    {
      title: 'Health & Beauty',
      image:
        '../../../assets/images/skincare/snapshotimagehandler_1987838511.jpeg',
      description:
        'With supporting text below as a natural lead-in to additional content',
    },
    {
      title: 'DIY & Car Care',
      image: '../../../assets/images/car-case/car-case.jpeg',
      description:
        'With supporting text below as a natural lead-in to additional content',
    },
  ];
  ngOnInit(): void {}
  constructor(
    public cartService: CartService,
    private productService: ProductService
  ) {
    this.bestSellers = productService.filter('DIY & Car Care').splice(0, 5);
    this.ballons = productService.filter('Health & Beauty').splice(0, 5);
  }
}
