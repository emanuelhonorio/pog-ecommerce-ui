import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { CategoriaI } from 'src/app/core/models/api-models';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-form-create-produtos',
  templateUrl: './form-create-produtos.component.html',
  styleUrls: ['./form-create-produtos.component.scss']
})
export class FormCreateProdutosComponent implements OnInit {

  @Output()
  public save = new EventEmitter();

  public produtoForm = this.fb.group({
    nome: ['', [Validators.required]],
    descricao: [''],
    marca: ['', [Validators.required]],
    modelo: [''],
    valorBase: [0],
    peso: [null],
    fotos: [['https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTUdm-mABqcTZmnkAEM2CbuhGiAmi6nsWloZQz6-dzmlGJNw7GIB-21AYGIgm1fOEQzDUODU9pyaE&usqp=CAc']],
    categorias: [[]],
  });

  categorias: CategoriaI[] = [{id: 1, nome: 'Categoria #1'}, {id: 2, nome: 'Categoria #2'}];

  public loading = false;

  constructor(private fb: FormBuilder, private produtoService: ProdutosService, private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.loadCategorias()
  }

  async loadCategorias() {
    this.categorias = await this.categoriasService.list();
  }

  async createProduto(formDir: FormGroupDirective) {
    this.loading = true;
    this.produtoForm.disable();

    await this.produtoService.create(this.produtoForm.value);
    this.save.emit({...this.produtoForm.value});
    
    formDir.resetForm();
    this.produtoForm.reset();
    this.produtoForm.enable();
    this.loading = false;
  }

  getErrorMessage(fieldName) {
    const field = this.produtoForm.get(fieldName);

    if (field.hasError('required')) {
      return 'campo obrigatório';
    }

    if (field.hasError('email')) {
      return 'email inválido'
    }

    return ''
  }
}
