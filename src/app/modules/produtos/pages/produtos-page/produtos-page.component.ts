import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-page',
  templateUrl: './produtos-page.component.html',
  styleUrls: ['./produtos-page.component.scss']
})
export class ProdutosPageComponent implements OnInit {

  public products = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        title: 'Project #1',
        price: '$1280',
        image: 'assets/1.jpeg'
      },
      {
        title: 'Project #1',
        price: '$1280',
        image: 'assets/1.jpeg'
      },{
        title: 'Project #1',
        price: '$1280',
        image: 'assets/1.jpeg'
      },{
        title: 'Project #1Project #1Project #1Project #1Project #1Project #1Project #1Project #1Project #1Project #1Project #1Project #1Project #1Project #1',
        price: '$1280',
        image: 'assets/1.jpeg'
      },{
        title: 'Project #1',
        price: '$1280',
        image: 'assets/1.jpeg'
      },{
        title: 'Project #1',
        price: '$1280',
        image: 'assets/1.jpeg'
      }
    ]
  }

}
