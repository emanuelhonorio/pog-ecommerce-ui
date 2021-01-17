import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  NgForm,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-fotos-field',
  templateUrl: './fotos-field.component.html',
  styleUrls: ['./fotos-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FotosFieldComponent),
      multi: true,
    },
  ],
})
export class FotosFieldComponent implements OnInit, ControlValueAccessor {
  @Input()
  _fotos: any[] = [];

  isAdding: boolean = false;

  constructor() {}

  ngOnInit() {}

  get fotos() {
    return this._fotos;
  }

  set fotos(value: any[]) {
    this._fotos = value;
    this.propagateChange(this._fotos);
  }

  remove(idx: number) {
    const newArr = [...this.fotos];
    newArr.splice(idx, 1);
    this.fotos = [...newArr];
  }

  addFoto(form: NgForm) {
    // reassignment for trigger the set
    this.fotos = [...this.fotos, form.value.imageUrl];
    form.reset();
    this.isAdding = false;
  }

  writeValue(value: any) {
    console.log(value);
    if (value) {
      this.fotos = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
