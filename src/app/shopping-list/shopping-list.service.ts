import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredentsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
    // addIngredients = new EventEmitter<Ingredient>();
    addIngredient(i: Ingredient) {
        this.ingredients.push(i);
        this.ingredentsChanged.next(this.ingredients.slice())
    }

    addMultipleIngredients(i :Ingredient[]) {
        this.ingredients.push(...i)
        this.ingredentsChanged.next(this.ingredients.slice())
    }

    getIngredients() {
        return this.ingredients.slice()
    }
}