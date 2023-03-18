import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public detailPage = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.detailPage =  this.router.url.indexOf('detail') > -1 ? true: false;
  }

}
