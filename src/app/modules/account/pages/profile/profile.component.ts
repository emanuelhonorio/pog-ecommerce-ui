import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Endereco, Usuario } from 'src/app/core/models/api-models';
import { AuthService } from 'src/app/core/services/auth.service';
import { EnderecosService } from 'src/app/core/services/enderecos.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: Usuario = null;

  userForm = this.fb.group({
    nome: ['', [Validators.required]],
    email: [
      { value: '', disabled: true },
      [Validators.required, Validators.email],
    ],
  });
  userLoading: boolean;

  enderecos: Endereco[] = [];
  createEnderecoLoading: boolean = false;

  // in case is updating
  endereco: Endereco = null;
  updateEnderecoLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private enderecosService: EnderecosService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initUser();
    this.initAddresses();
  }

  async initUser() {
    this.userLoading = true;
    try {
      this.user = await this.authService.getMe();
      this.initForm();
    } catch (err) {
      console.error(err);
    }
    this.userLoading = false;
  }

  async initAddresses() {
    try {
      this.enderecos = <Endereco[]>await this.enderecosService.list();
    } catch (err) {
      console.error(err);
    }
  }

  initForm() {
    this.userForm.setValue({ nome: this.user.nome, email: this.user.email });
  }

  updateProfile(form: NgForm) {
    this.userLoading = true;
    this.userForm.disable();
    console.log('update profile: ', this.userForm.value);
    this.toastr.warning('Funcionalidade não implementada ainda');
    setTimeout(() => {
      this.userForm.enable();
      this.userLoading = false;
    }, 3000);
  }

  async createEndereco(endereco) {
    this.createEnderecoLoading = true;

    try {
      await this.enderecosService.create(endereco);
      this.toastr.success('Endereço criado com sucesso');
      this.initAddresses();
    } catch (err) {
      console.error(err);
      this.toastr.error('Ocorreu um erro ao criar endereço');
    }
    this.createEnderecoLoading = false;
  }

  async deleteEndereco(enderecoId: number) {
    try {
      await this.enderecosService.delete(enderecoId);
      this.toastr.success('Endereço deletado com sucesso');
      this.initAddresses();
    } catch (err) {
      console.error(err);
      if (err?.error?.status === 409) {
        this.toastr.error(
          'Impossível deletar agora',
          'Este endereço está sendo usado em uma compra'
        );
      } else {
        this.toastr.error('Ocorreu um erro ao deletar endereço');
      }
    }
  }

  async editEndereco(endereco) {
    this.updateEnderecoLoading = true;

    try {
      console.log(endereco);
      this.endereco = await this.enderecosService.update(endereco.id, endereco);
      this.toastr.success('Endereço editado com sucesso');
      this.initAddresses();
    } catch (err) {
      console.error(err);
      this.toastr.error('Ocorreu um erro ao editar endereço');
    }
    this.updateEnderecoLoading = false;
  }

  async openDialogEndereco(templateRef, endereco) {
    this.endereco = endereco;

    this.dialog.open(templateRef, {
      width: '700px',
    });
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
  }
}
