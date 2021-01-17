import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  CorI,
  CreateEstoqueDTO,
  TamanhoI,
} from 'src/app/core/models/api-models';
import { CoresService } from 'src/app/core/services/cores.service';
import { EstoquesService } from 'src/app/core/services/estoques.service';
import { TamanhosService } from 'src/app/core/services/tamanhos.service';

@Component({
  selector: 'app-form-create-estoques',
  templateUrl: './form-create-estoques.component.html',
  styleUrls: ['./form-create-estoques.component.scss'],
})
export class FormCreateEstoquesComponent implements OnInit {
  @Input()
  produtoId: number;

  @Input()
  cores: CorI[] = [];

  @Input()
  tamanhos: TamanhoI[] = [];

  @Input()
  estoque: any;

  @Output()
  save = new EventEmitter();

  loading = false;

  estoqueForm = this.fb.group({
    cor: [null],
    tamanho: [null],
    qtdEstoque: [0, [Validators.required, Validators.min(0)]],
    acrescimoValor: [0, [Validators.required, Validators.min(0)]],
  });

  corCtrl = this.fb.control('', [Validators.required]);
  tamanhoCtrl = this.fb.control('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private estoqueService: EstoquesService,
    private coresService: CoresService,
    private tamanhosService: TamanhosService
  ) {}

  ngOnInit(): void {
    //this.loadCores();
    //this.loadTamanhos();
    if (this.estoque) {
      const values = {
        cor: this.estoque.cor.id,
        tamanho: this.estoque.tamanho.id,
        qtdEstoque: this.estoque.qtdEstoque,
        acrescimoValor: this.estoque.acrescimoValor,
      };
      this.estoqueForm.setValue(values);
    }
  }

  log(el) {
    console.log(el);
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
    // disable form
    this.loading = true;
    this.estoqueForm.disable();

    // create estoque
    const estoqueDTO: CreateEstoqueDTO = {
      produtoId: this.produtoId,
      corId: this.estoqueForm.get('cor').value,
      tamanhoId: this.estoqueForm.get('tamanho').value,
      qtdEstoque: this.estoqueForm.get('qtdEstoque').value,
      acrescimoValor: this.estoqueForm.get('acrescimoValor').value,
    };
    if (this.estoque) {
      await this.estoqueService.update(this.estoque.id, estoqueDTO);
    } else {
      await this.estoqueService.create(estoqueDTO);
    }

    // reset form
    form.resetForm();
    this.estoqueForm.reset();
    this.estoqueForm.enable();
    this.loading = false;
    this.save.emit(this.estoqueForm.value);
  }

  async createTamanho() {
    // disable field
    this.tamanhoCtrl.disable();

    const tamanho: TamanhoI = { nome: this.tamanhoCtrl.value };
    await this.tamanhosService.create(this.produtoId, tamanho);
    await this.loadTamanhos();

    // reset and enable field
    this.tamanhoCtrl.reset();
    this.tamanhoCtrl.enable();
  }

  async createCor() {
    // disable field
    this.corCtrl.disable();

    const cor: CorI = { nome: this.corCtrl.value };
    await this.coresService.create(this.produtoId, cor);
    await this.loadCores();

    // reset and enable field
    this.corCtrl.reset();
    this.corCtrl.enable();
  }

  openDialog(templateRef) {
    this.dialog.open(templateRef, {
      width: '250px',
    });
  }
}
