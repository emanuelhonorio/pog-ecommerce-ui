import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TipoPagamentoEnum } from 'src/app/core/models/api-models';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.component.html',
  styleUrls: ['./payment-option.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaymentOptionComponent),
      multi: true,
    },
  ],
})
export class PaymentOptionComponent implements OnInit, ControlValueAccessor {
  @Input()
  modos: TipoPagamentoEnum[] = [];

  @Input()
  _value: {
    modoDePagamento: TipoPagamentoEnum;
    trocoPara?: number;
  };

  trocoPara: number;

  constructor() {}

  ngOnInit(): void {}

  get value() {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.propagateChange(this._value);
    console.log('new  ', this._value);
  }

  get getTipoPagamentoEnum() {
    return TipoPagamentoEnum;
  }

  select(modo) {
    this.value = { ...this.value, modoDePagamento: modo };
  }

  onInputTroco(troco: number) {
    this.value = {
      ...this.value,
      trocoPara: troco,
    };
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
