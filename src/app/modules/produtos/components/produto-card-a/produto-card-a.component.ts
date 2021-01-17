import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-card-a',
  templateUrl: './produto-card-a.component.html',
  styleUrls: ['./produto-card-a.component.scss'],
})
export class ProdutoCardAComponent implements OnInit {
  defaultImage = 'assets/1.jpeg';

  @Input()
  public produto: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.produto);
  }
}
