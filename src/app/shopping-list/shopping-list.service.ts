import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();


    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
    // addIngredients = new EventEmitter<Ingredient>();
    addIngredient(i: Ingredient) {
        this.ingredients.push(i);
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addMultipleIngredients(i :Ingredient[]) {
        this.ingredients.push(...i)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    getIngredients() {
        return this.ingredients.slice()
    }

    getIngredient(index: number) : Ingredient {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice())
    }

}