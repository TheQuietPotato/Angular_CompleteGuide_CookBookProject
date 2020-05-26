import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Ingredient } from './ingredients.model';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth-service.service';

@Injectable()

export class HttpService {
    constructor(
        private httpClient: HttpClient, 
        private recipeService: RecipeService, 
        private authService: AuthService
        ) { }

    storeRecipes() {
        const TOKEN: string = this.authService.getToken();
        return this.httpClient.put(
            'https://angular-recipe-book-2db25.firebaseio.com/recipes.json?token=' + TOKEN,
            this.recipeService.getRecipes()
        );
    }

    getRecipes() {
        const TOKEN: string = this.authService.getToken();
        this.httpClient.get('https://angular-recipe-book-2db25.firebaseio.com/recipes.json?auth=' + TOKEN)
            .pipe(map((response: Array<Recipe>) => {
                for (const each of response) {
                    if (!each.ingredients) {
                        console.log('No ing found so adding empty array', each)
                        each.ingredients = [];
                    }
                }
                return response
            }))
            .subscribe(
                (res) => {
                    const data: Recipe[] = res;
                    this.recipeService.setRecipes(data)
                }
            )
    }
}