import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-card-a',
  templateUrl: './produto-card-a.component.html',
  styleUrls: ['./produto-card-a.component.scss']
})
export class ProdutoCardAComponent implements OnInit {

  @Input()
  public product = {
    image: 'assets/1.jpeg',
    title: 'Great item name goes here',
    price: '$1280'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
