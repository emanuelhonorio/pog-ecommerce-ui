import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CoresService } from 'src/app/core/services/cores.service';
import { TamanhosService } from 'src/app/core/services/tamanhos.service';

import { CorI, FotoI, TamanhoI } from '../../../../core/models/api-models';

@Component({
  selector: 'app-produto-estoque-form',
  templateUrl: './produto-estoque-form.component.html',
  styleUrls: ['./produto-estoque-form.component.scss']
})
export class ProdutoEstoqueFormComponent implements OnInit, OnDestroy {

  @Input()
  produtoId: number;

  @Input()
  cores: CorI[] = [];

  @Input()
  tamanhos: TamanhoI[] = [];

  @Input()
  produtoEstoque: any;

  @Output()
  save = new EventEmitter();

  loading = false;

  produtoEstoqueForm = this.fb.group({
    cor: [null],
    tamanho: [null],
    qtdEstoque: [0, [Validators.required, Validators.min(0)]],
    acrescimoValor: [0, [Validators.required, Validators.min(0)]],
    fotos: this.fb.array([
      this.fb.control('', [Validators.required])
    ])
  })

  corCtrl = this.fb.control('', [Validators.required]);
  tamanhoCtrl = this.fb.control('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private coresService: CoresService,
    private tamanhosService: TamanhosService
    ) { }

  ngOnInit(): void {
    //this.loadCores();
    //this.loadTamanhos();
    console.log(this.produtoEstoque)
    console.log((this.produtoEstoque.fotos.length === 0 ? [""] : this.produtoEstoque.fotos.map(f => f.imageUrl || "")))
    if (this.produtoEstoque) {

      const peValues = {
        cor: this.produtoEstoque.cor.id,
        tamanho: this.produtoEstoque.tamanho.id,
        quantidadeEstoque: this.produtoEstoque.quantidadeEstoque,
        valor: this.produtoEstoque.valor,
        fotos: [""]
      }
      this.produtoEstoqueForm.setValue(peValues)
      this.produtoEstoque.fotos.forEach(foto => {
        this.addFoto(foto.imageUrl)
      });
      if (this.produtoEstoque.fotos.length > 0) {
        this.deleteFoto(0)
      }
    }
  }

  log(el) {
    console.log(el);
  }


  ngOnDestroy() {
    
  }

  get fotos() {
    return this.produtoEstoqueForm.get('fotos') as FormArray;
  }

  async loadCores() {
    this.loading = true;
    this.cores = <CorI[]>await this.coresService.list(this.produtoId);
    this.loading = false;
  }

  async loadTamanhos() {
    this.loading = true;
    this.tamanhos = <CorI[]>await this.tamanhosService.list(this.produtoId);
    this.loading = false;
  }

  async onSubmit(form: FormGroupDirective) {
   
  }

  addFoto(value = '') {
    this.fotos.push(this.fb.control(value, [Validators.required]))
  }

  deleteFoto(index) {
    if (this.fotos.length > 1) this.fotos.removeAt(index)
  }

  async createTamanho() {

  }

  async createCor() {

  }


  openDialog(templateRef) {
    this.dialog.open(templateRef, {
         width: '250px',
         // data: { name: this.name, animal: this.animal }
    });

    /*dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
    });*/
  }
}
