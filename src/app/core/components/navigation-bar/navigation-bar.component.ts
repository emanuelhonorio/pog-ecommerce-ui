import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from '../../models/api-models';
import { AuthService } from '../../services/auth.service';
import { Carrinho, CarrinhoService } from '../../services/carrinho.service';
import { ProdutoFilterStoreService } from '../../services/produto-filter-store.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  @Output()
  public toggle = new EventEmitter();

  searchValue: string;

  carrinho$: Subscription;
  carrinhoSize: number;

  user: Usuario = null;

  authContext$: Subscription;

  produtoFilter$: Subscription;

  constructor(
    private produtoFilterStore: ProdutoFilterStoreService,
    private carrinhoService: CarrinhoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.carrinho$ = this.carrinhoService.carrinho$.subscribe(
      (carrinho: Carrinho) => {
        if (carrinho?.items) {
          this.carrinhoSize = carrinho.items.length;
        }
      }
    );

    this.authContext$ = this.authService.userObservable.subscribe(
      (user: Usuario) => {
        this.user = user;
        console.log('obs user', user);
      }
    );

    this.produtoFilter$ = this.produtoFilterStore.produtoFilter$.subscribe(
      (filter) => {
        this.searchValue = filter?.nome;
      }
    );
  }

  ngOnDestroy() {
    if (this.carrinho$) this.carrinho$.unsubscribe();
    if (this.authContext$) this.authContext$.unsubscribe();
    if (this.produtoFilter$) this.produtoFilter$.unsubscribe();
  }

  search() {
    this.produtoFilterStore.produtoFilter = {
      ...this.produtoFilterStore.produtoFilter,
      nome: this.searchValue,
    };
  }

  logout() {
    this.authService.logoutAndRedirect();
  }
}
