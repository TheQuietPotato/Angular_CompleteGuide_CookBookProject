import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService){}
    recipeSelected = new EventEmitter<Recipe>();

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

    addIngToSL(i: Ingredient[]) {
        this.slService.addMultipleIngredients(i);
    }
}