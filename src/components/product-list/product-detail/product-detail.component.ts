import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  public imageIndex = 0;
  images = [
    'assets/images/slider-img.png',
    'assets/images/slider-img.png',
    'assets/images/slider-img.png',
  ];
}
