import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 1),
        new Ingredient('Tomato', 3)
    ]

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