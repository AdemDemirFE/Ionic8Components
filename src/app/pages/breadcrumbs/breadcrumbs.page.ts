import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.page.html',
  styleUrls: ['./breadcrumbs.page.scss'],
  standalone: false,
})
export class BreadcrumbsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Breadcrumb tıklama olayını dinlemek için
  breadcrumbClick(event: any) {
    console.log('Tıklanan breadcrumb:', event.detail);
  }
}
