import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  formG = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email]],
    senha: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
  });

  loading: boolean;
  error: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getErrorMessage(fieldName: string) {
    const field = this.formG.get(fieldName);

    if (!field) return;

    if (!field.errors) return;

    if (field.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field.hasError('email')) {
      return field.getError('email').alreadyExist || 'Email inválido';
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

  async signup(form: NgForm) {
    this.loading = true;
    try {
      const { nome, email, senha } = this.formG.value;
      await this.authService.signUp({ nome, email, senha });

      this.formG.reset();
      form.resetForm();

      this.router.navigateByUrl('/entrar');
    } catch (err) {
      if (err.status === 409 && err.error.message) {
        this.formG
          .get('email')
          .setErrors({ email: { alreadyExist: 'Email já existe' } });
      } else if (err.status === 0) {
        this.error =
          'Não foi possível conectar-se ao servidor, tente denovo em alguns instantes';
      } else {
        this.error = 'Unkown error, try again later';
      }
    } finally {
      this.loading = false;
    }
  }
}
