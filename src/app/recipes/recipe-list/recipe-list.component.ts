import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipieForDetailComponent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is Simply a test", "https://image.shutterstock.com/image-photo/fresh-tasty-burger-isolated-on-260nw-705104968.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  addNewRecipe(){
    this.recipes.push(this.recipes[0]);
  }

  triggerItemSelect(recipe: Recipe) {
    this.recipieForDetailComponent.emit(recipe)
  }
}
