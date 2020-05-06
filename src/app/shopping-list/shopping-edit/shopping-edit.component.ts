import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription : Subscription
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('f') shoppingListForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.subscription = this.shoppingListService.startedEditing.subscribe((val: number) => {
      this.editedItemIndex = val;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(val);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  addToList(f: NgForm) {
    const value = f.value
    const newIngred = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngred)
    }

    if (!this.editMode){
      this.shoppingListService.addIngredient(newIngred)
    }

    this.clearForm()
  }

  clearForm() {
    this.shoppingListForm.resetForm()
    this.editMode = false;
  }

  onDelete() {
    this.clearForm()
    const INDEX = this.editedItemIndex
    this.shoppingListService.deleteIngredient(INDEX)
  }
}