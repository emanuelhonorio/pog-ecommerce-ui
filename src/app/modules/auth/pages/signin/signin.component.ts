import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  formG = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
  });

  error: string;
  loading: boolean;

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

  async signin(form: NgForm) {
    console.log(this.formG.value);
    this.loading = true;

    const { email, senha } = this.formG.value;

    try {
      await this.authService.signIn(email, senha);
      this.loading = false;
      this.formG.reset();
      form.resetForm();

      this.router.navigateByUrl('/');
    } catch (err) {
      if (err.error.error_description) {
        this.error = 'Email e/ou senha inválidos';
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
