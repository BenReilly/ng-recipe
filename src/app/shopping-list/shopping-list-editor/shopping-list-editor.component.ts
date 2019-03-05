import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.scss']
})
export class ShoppingListEditorComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addAnIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const thisIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.addAnIngredient.emit(thisIngredient);
  }

}
