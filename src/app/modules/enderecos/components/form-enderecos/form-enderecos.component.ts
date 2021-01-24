import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Endereco } from 'src/app/core/models/api-models';
import { EnderecosService } from 'src/app/core/services/enderecos.service';

@Component({
  selector: 'app-form-enderecos',
  templateUrl: './form-enderecos.component.html',
  styleUrls: ['./form-enderecos.component.scss'],
})
export class FormEnderecosComponent implements OnInit, OnDestroy {
  enderecoForm = this.fb.group({
    cep: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
    ],
    numero: ['', Validators.required],
    complemento: [''],
  });

  formChange$: Subscription;

  _loading: boolean = false;

  @Output()
  public create = new EventEmitter();

  @Output()
  public update = new EventEmitter();

  @Input()
  public endereco: Endereco = null;

  @Input()
  get loading() {
    return this._loading;
  }

  set loading(isLoading: boolean) {
    this._loading = isLoading;

    if (isLoading) {
      this.enderecoForm.disable();
    } else {
      this.enderecoForm.enable();
    }
  }

  constructor(
    private fb: FormBuilder,
    private enderecoService: EnderecosService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy() {
    if (this.formChange$) this.formChange$.unsubscribe();
  }

  initForm() {
    if (this.endereco) {
      const { cep, numero, complemento } = this.endereco;

      this.enderecoForm.setValue({
        cep,
        numero,
        complemento,
      });
    }

    this.formChange$ = this.enderecoForm
      .get('cep')
      .valueChanges.subscribe((cep) => {
        if (cep?.length === 8) {
          this.validarCep();
        }
      });
  }

  async validarCep() {
    const cepField = this.enderecoForm.get('cep');

    try {
      const response = <any>(
        await this.enderecoService.consultarCep(cepField.value)
      );

      if (response.erro) {
        cepField.setErrors({ cep: 'Invalid Cep' });
      }
    } catch (err) {
      cepField.setErrors({ cep: 'Invalid Cep' });
    }
  }

  saveAddress() {
    if (this.endereco?.id) {
      this.update.emit({ id: this.endereco.id, ...this.enderecoForm.value });
    }
    this.create.emit(this.enderecoForm.value);
  }

  cancelarForm(form: NgForm) {
    console.log('reset ', this.endereco);
    if (this.endereco?.id) {
      this.initForm();
    } else {
      this.enderecoForm.reset();
      form.resetForm();
    }
  }

  getErrorMessage(form, fieldName: string) {
    const field = form.get(fieldName);

    if (!field) return;

    if (!field.errors) return;

    if (field.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field.hasError('email')) {
      return 'Email inválido';
    }

    if (field.hasError('minlength')) {
      return (
        'Mínimo de ' +
        field.getError('minlength')?.requiredLength +
        ' caracteres'
      );
    }

    if (field.hasError('maxlength')) {
      return (
        'Máximo de ' +
        field.getError('maxlength')?.requiredLength +
        ' caracteres'
      );
    }

    if (field.hasError('cep')) {
      return 'Cep inválido';
    }
  }
}
