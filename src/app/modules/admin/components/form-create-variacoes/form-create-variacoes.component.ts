import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CorI, CreateVariacaoDTO, TamanhoI } from 'src/app/core/models/api-models';
import { CoresService } from 'src/app/core/services/cores.service';
import { TamanhosService } from 'src/app/core/services/tamanhos.service';
import { VariacoesService } from 'src/app/core/services/variacoes.service';

@Component({
  selector: 'app-form-create-variacoes',
  templateUrl: './form-create-variacoes.component.html',
  styleUrls: ['./form-create-variacoes.component.scss']
})
export class FormCreateVariacoesComponent implements OnInit {

  @Input()
  produtoId: number;

  @Input()
  cores: CorI[] = [];

  @Input()
  tamanhos: TamanhoI[] = [];

  @Input()
  variacao: any;

  @Output()
  save = new EventEmitter();

  loading = false;

  variacaoForm = this.fb.group({
    cor: [null],
    tamanho: [null],
    qtdEstoque: [0, [Validators.required, Validators.min(0)]],
    acrescimoValor: [0, [Validators.required, Validators.min(0)]],
  })

  corCtrl = this.fb.control('', [Validators.required]);
  tamanhoCtrl = this.fb.control('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private variacoesService: VariacoesService,
    private coresService: CoresService,
    private tamanhosService: TamanhosService
    ) { }

  ngOnInit(): void {
    //this.loadCores();
    //this.loadTamanhos();
    if (this.variacao) {
      const values = {
        cor: this.variacao.cor.id,
        tamanho: this.variacao.tamanho.id,
        qtdEstoque: this.variacao.qtdEstoque,
        acrescimoValor: this.variacao.acrescimoValor,
      }
      this.variacaoForm.setValue(values)
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
    this.variacaoForm.disable();

    // create variacao
    const variacaoDTO: CreateVariacaoDTO = {
      produtoId: this.produtoId,
      corId: this.variacaoForm.get('cor').value,
      tamanhoId: this.variacaoForm.get('tamanho').value,
      qtdEstoque: this.variacaoForm.get('qtdEstoque').value,
      acrescimoValor: this.variacaoForm.get('acrescimoValor').value,
    }
    if (this.variacao) {
      await this.variacoesService.update(this.variacao.id, variacaoDTO);
    } else {
      await this.variacoesService.create(variacaoDTO);
    }

    // reset form
    form.resetForm();
    this.variacaoForm.reset();
    this.variacaoForm.enable();
    this.loading = false;
    this.save.emit(this.variacaoForm.value);
  }

  async createTamanho() {
    // disable field
    this.tamanhoCtrl.disable();

    const tamanho: TamanhoI = { nome: this.tamanhoCtrl.value }
    await this.tamanhosService.create(this.produtoId, tamanho);
    await this.loadTamanhos();

    // reset and enable field
    this.tamanhoCtrl.reset();
    this.tamanhoCtrl.enable();
  }

  async createCor() {
    // disable field
    this.corCtrl.disable();

    const cor: CorI = { nome: this.corCtrl.value}
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
