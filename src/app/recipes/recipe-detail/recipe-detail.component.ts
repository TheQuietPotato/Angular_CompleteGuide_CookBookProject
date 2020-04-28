import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private sLService: ShoppingListService, private rService: RecipeService) { }

  ngOnInit() {
  }

  sendingIngredientsToSL() {
    // this.sLService.addMultipleIngredients(this.selectedRecipe.ingredients);
    this.rService.addIngToSL(this.selectedRecipe.ingredients);
  }

}
