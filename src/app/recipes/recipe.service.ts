import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService){}
    recipesChanged = new Subject<Recipe[]>()
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'Classic Burger',
            'https://image.shutterstock.com/image-photo/fresh-tasty-burger-isolated-on-260nw-705104968.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('bread', 2)
            ]),
        new Recipe('A Test Recipe 2',
            'This is Simply a test',
            'https://image.shutterstock.com/image-photo/fresh-tasty-burger-isolated-on-260nw-705104968.jpg',
            [
                new Ingredient('fries', 1),
                new Ingredient('onions', 2)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getSelectedRecipe(index: any) {
        return this.recipes[index]
    }

    addIngToSL(i: Ingredient[]) {
        this.slService.addMultipleIngredients(i);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.getRecipes())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.getRecipes())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.getRecipes());
        console.log(this.recipes)
    }
}