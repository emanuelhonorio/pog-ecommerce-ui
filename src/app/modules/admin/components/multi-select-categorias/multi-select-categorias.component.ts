import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CategoriaI } from 'src/app/core/models/api-models';
import { CategoriasService } from 'src/app/core/services/categorias.service';

@Component({
  selector: 'app-multi-select-categorias',
  templateUrl: './multi-select-categorias.component.html',
  styleUrls: ['./multi-select-categorias.component.scss']
})
export class MultiSelectCategoriasComponent implements OnInit {

  @Input()
  form: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCategorias: CategoriaI[];
  allCategorias: CategoriaI[] = [];

  @ViewChild('categoriaInput') categoriaInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private categoriasService: CategoriasService) { }


  get categorias() {
    return this.form.get('categorias') as FormArray;
  }

  ngOnInit() {
    this.initCategorias();
  }
  
  async initCategorias() {
    //this.allCategorias = await this.categoriasService.list();
    this.allCategorias = [{id: 1, nome: 'Categoria #1'},{id: 2, nome: 'Categoria #2'},{id: 3, nome: 'Categoria #3'},]
    this.filteredCategorias = this.allCategorias.slice();
  }

  onInputChange(event) {
    const { value } = event.target;
    this.filteredCategorias = value ? this._filter(value) : this.allCategorias.slice();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    const categoria = this.allCategorias.find(c => c.nome === value);

    if (categoria) {
      this.categorias.value.push(categoria);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(categoria: CategoriaI): void {
    this.categorias.setValue(this.categorias.value.filter(c => c.id !== categoria.id))
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categorias.value.push(event.option.value);
    this.categoriaInput.nativeElement.value = '';
  }

  private _filter(nomeCategoria: string): CategoriaI[] {
    const filterValue = nomeCategoria.toLowerCase();
    
    return this.allCategorias.filter(categoria => categoria.nome.toLowerCase().indexOf(filterValue) >= 0);
  }

}
