import { Component, OnInit, HostListener } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    var windowScrollPosition = window.scrollY +0;
    if(windowScrollPosition > 0){
      $('#header').addClass('active');
    }else{
      $('#header').removeClass('active');
    }
  }

}
