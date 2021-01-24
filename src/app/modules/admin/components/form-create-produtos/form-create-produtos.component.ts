import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria, Produto } from 'src/app/core/models/api-models';
import { CategoriasService } from 'src/app/core/services/categorias.service';

@Component({
  selector: 'app-form-create-produtos',
  templateUrl: './form-create-produtos.component.html',
  styleUrls: ['./form-create-produtos.component.scss'],
})
export class FormCreateProdutosComponent implements OnInit {
  @Output()
  public create = new EventEmitter();

  @Output()
  public update = new EventEmitter();

  @Input()
  get loading() {
    return this._loading;
  }

  set loading(isLoading: boolean) {
    this._loading = isLoading;

    if (isLoading) {
      this.produtoForm.disable();
    } else {
      this.produtoForm.enable();
    }
  }

  @Input()
  get produto() {
    return this._produto;
  }

  set produto(produto: Produto) {
    this._produto = produto;

    if (produto) {
      this.initForm();
    }
  }

  public _produto: Produto;

  public _loading: boolean;

  public produtoForm = this.fb.group({
    nome: ['', [Validators.required]],
    descricao: [''],
    marca: ['', [Validators.required]],
    modelo: [''],
    valorBase: [99999999],
    peso: [null],
    fotos: [[], Validators.required],
    categorias: [[], [Validators.minLength(1)]],
  });

  categorias: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit() {
    this.loadCategorias();
  }

  initForm() {
    const { nome, descricao, marca, modelo, valorBase, peso } = this.produto;
    const fotos = this.produto.fotos.map((f) => f.imageUrl);
    const categorias = this.produto.categorias.map((c) => c.id);

    const value = {
      nome,
      descricao,
      marca,
      modelo,
      valorBase,
      peso,
      fotos,
      categorias,
    };

    this.produtoForm.setValue(value);
  }

  async loadCategorias() {
    this.categorias = await this.categoriasService.list();
  }

  async createProduto() {
    if (this.produto?.id) {
      this.update.emit(this.produtoForm.value);
    } else {
      this.create.emit(this.produtoForm.value);
    }
  }

  getErrorMessage(fieldName) {
    const field = this.produtoForm.get(fieldName);

    if (field.hasError('required')) {
      return 'campo obrigatório';
    }

    if (field.hasError('email')) {
      return 'email inválido';
    }

    return '';
  }
}
