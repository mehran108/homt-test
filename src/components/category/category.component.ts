import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {name: 'Category', img: "http://placehold.it/350x150/000000"},
    {name: 'Flight', img: "http://placehold.it/350x150/111111"},
    {name: 'Bill', img: "http://placehold.it/350x150/333333"},
    {name: 'Data Plan', img: "http://placehold.it/350x150/666666"},
    {name: 'Top Up', img: "http://placehold.it/350x150/000000"},
    {name: 'Category', img: "http://placehold.it/350x150/000000"},
    {name: 'Flight', img: "http://placehold.it/350x150/111111"},
    {name: 'Bill', img: "http://placehold.it/350x150/333333"},
    {name: 'Data Plan', img: "http://placehold.it/350x150/666666"},
    {name: 'Top Up', img: "http://placehold.it/350x150/000000"},
  ];
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    autoplay: false
  };
  addSlide() {
    // this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
