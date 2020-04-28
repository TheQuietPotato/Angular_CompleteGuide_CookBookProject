import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')  nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  // myForm: FormGroup;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addToList() {
    const newIngre = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.shoppingListService.addIngredient(newIngre)
  }
}
