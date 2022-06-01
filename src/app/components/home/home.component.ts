import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product, ProductService } from 'src/app/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  carCare: Product[] = [];
  health: Product[] = [];
  party: Product[] = [];
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
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
  constructor(
    public cartService: CartService,
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) {
    this.carCare = productService.filter('DIY & Car Care').splice(0, 4);
    this.health = productService.filter('Health & Beauty').splice(0, 4);
    this.party = productService
      .filter('Party Decorations & Party Supplies')
      .splice(0, 4);
  }
}
