import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public products = [
    {
      id: 1,
      title: 'Shirt',
      subTitle: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
      img: 'assets/images/prod_img.png ',
      description: 'Description'
    },
    {
      id: 2,
      title: 'Shirt',
      subTitle: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
      img: 'assets/images/prod_img.png ',
      description: 'Description'
    },
    {
      id: 3,
      title: 'Shirt',
      subTitle: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
      img: 'assets/images/prod_img.png ',
      description: 'Description'
    },
    {
      id: 4,
      title: 'Shirt',
      subTitle: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
      img: 'assets/images/prod_img.png ',
      description: 'Description'
    },
    {
      id: 5,
      title: 'Shirt',
      subTitle: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
      img: 'assets/images/prod_img.png ',
      description: 'Description'
    },
    {
      id: 6,
      title: 'Shirt',
      subTitle: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
      img: 'assets/images/prod_img.png ',
      description: 'Description'
    },
    {
      id: 7,
      title: 'Shirt',
      subTitle: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
      img: 'assets/images/prod_img.png ',
      description: 'Description'
    },
  ]
  gotoDetails(product: any) {
    this.router.navigate([`detail/${product.id}`])
  }
}
