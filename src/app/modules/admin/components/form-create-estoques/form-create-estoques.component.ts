import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Cor, Tamanho } from 'src/app/core/models/api-models';
import { CoresService } from 'src/app/core/services/cores.service';
import { TamanhosService } from 'src/app/core/services/tamanhos.service';

@Component({
  selector: 'app-form-create-estoques',
  templateUrl: './form-create-estoques.component.html',
  styleUrls: ['./form-create-estoques.component.scss'],
})
export class FormCreateEstoquesComponent implements OnInit {
  @Output()
  create = new EventEmitter();

  @Output()
  update = new EventEmitter();

  @Input()
  produtoId: number;

  @Input()
  estoque: any;

  @Input()
  get loading() {
    return this._loading;
  }

  set loading(isLoading: boolean) {
    this._loading = isLoading;

    if (isLoading) {
      this.estoqueForm.disable();
    } else {
      this.estoqueForm.enable();
    }
  }
  _loading = false;

  estoqueForm = this.fb.group({
    cor: [null],
    tamanho: [null],
    qtdEstoque: [0, [Validators.required, Validators.min(0)]],
    acrescimoValor: [0, [Validators.required, Validators.min(0)]],
  });

  cores: Cor[] = [];
  tamanhos: Tamanho[] = [];

  corCtrl = this.fb.control('', Validators.required);
  tamanhoCtrl = this.fb.control('', Validators.required);

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private coresService: CoresService,
    private tamanhosService: TamanhosService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.loading = true;
    await this.loadCores();
    await this.loadTamanhos();
    this.initForm();
    this.loading = false;
  }

  initForm() {
    if (this.estoque) {
      const values = {
        cor: this.estoque.cor?.id,
        tamanho: this.estoque.tamanho?.id,
        qtdEstoque: this.estoque.qtdEstoque,
        acrescimoValor: this.estoque.acrescimoValor,
      };
      this.estoqueForm.setValue(values);
    } else {
      this.estoqueForm.reset({ qtdEstoque: 0, acrescimoValor: 0 });
    }
  }

  async loadCores() {
    this.loading = true;
    this.cores = <Cor[]>await this.coresService.list(this.produtoId);
    this.loading = false;
  }

  async loadTamanhos() {
    this.loading = true;
    this.tamanhos = <Cor[]>await this.tamanhosService.list(this.produtoId);
    this.loading = false;
  }

  async onSubmit(form: FormGroupDirective) {
    if (this.estoque?.id) {
      this.update.emit({ ...this.estoqueForm.value, id: this.estoque.id });
    } else {
      this.create.emit(this.estoqueForm.value);
    }
  }

  async createTamanho() {
    this.tamanhoCtrl.disable();

    const tamanho: Tamanho = { nome: this.tamanhoCtrl.value };

    try {
      await this.tamanhosService.create(this.produtoId, tamanho);
      await this.loadTamanhos();
      this.tamanhoCtrl.reset();
    } catch (err) {
      console.error(err);
    }

    this.tamanhoCtrl.enable();
  }

  async createCor() {
    this.corCtrl.disable();

    const cor: Cor = { nome: this.corCtrl.value };

    try {
      await this.coresService.create(this.produtoId, cor);
      await this.loadCores();
      this.corCtrl.reset();
    } catch (err) {
      console.error(err);
    }

    this.corCtrl.enable();
  }

  openDialog(templateRef) {
    this.dialog.open(templateRef, {
      width: '250px',
    });
  }
}
